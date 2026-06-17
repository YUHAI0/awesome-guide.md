import { appendFileSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const zhFields = {
  site: '网站或产品名称',
  url: 'Markdown 指南 URL',
  type: '指南类型',
  action: 'agent 可以根据它完成什么动作',
  source: '发现入口或公开来源',
  access: '访问限制',
  status: '验证状态',
};

const maxShortFieldLength = 40;

function cleanValue(value = '') {
  return value
    .replace(/^示例：.*$/gm, '')
    .replace(/^例如：.*$/gm, '')
    .trim();
}

function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function extractSection(body, heading) {
  const lines = body.split(/\r?\n/);
  const headingPattern = new RegExp(`^#{2,3}\\s+${escapeRegex(heading)}\\s*$`);
  const start = lines.findIndex((line) => headingPattern.test(line));
  if (start === -1) return '';

  let end = lines.length;
  for (let index = start + 1; index < lines.length; index += 1) {
    if (/^#{2,3}\s+/.test(lines[index])) {
      end = index;
      break;
    }
  }

  return cleanValue(lines.slice(start + 1, end).join('\n'));
}

function isChecked(section, text) {
  const escaped = escapeRegex(text);
  return new RegExp(`- \\[[xX]\\]\\s+${escaped}`).test(section);
}

export function parseIssueBody(body) {
  const normalizedBody = body.replace(/^\uFEFF/, '');
  const status = extractSection(normalizedBody, zhFields.status);
  return {
    site: extractSection(normalizedBody, zhFields.site),
    url: extractSection(normalizedBody, zhFields.url),
    type: extractSection(normalizedBody, zhFields.type),
    action: extractSection(normalizedBody, zhFields.action),
    source: extractSection(normalizedBody, zhFields.source),
    access: extractSection(normalizedBody, zhFields.access),
    verifiedGuide: isChecked(status, '我确认这是网站/产品主动提供给 AI agent 的 Markdown 指南。'),
    verifiedSource: isChecked(status, '我提供了发现入口或可信公开来源。'),
  };
}

function isMarkdownUrl(url) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' && parsed.pathname.toLowerCase().includes('.md');
  } catch {
    return false;
  }
}

function characterCount(value) {
  return [...value].length;
}

export function validateEntry(entry) {
  const missing = [];
  for (const [key, label] of Object.entries(zhFields)) {
    if (key === 'status') continue;
    if (!entry[key]) missing.push(label);
  }

  if (entry.url && !isMarkdownUrl(entry.url)) {
    missing.push('有效的 https Markdown 指南 URL');
  }
  if (!entry.verifiedGuide || !entry.verifiedSource) {
    missing.push('验证状态两个勾选项');
  }
  if (entry.action && characterCount(entry.action) > maxShortFieldLength) {
    missing.push(`agent 可以根据它完成什么动作（${maxShortFieldLength}字以内）`);
  }
  if (entry.source && characterCount(entry.source) > maxShortFieldLength) {
    missing.push(`发现入口或公开来源（${maxShortFieldLength}字以内）`);
  }

  if (missing.length > 0) {
    return {
      valid: false,
      message: `Issue 模板未填写完整，缺少或无效字段：${missing.join('、')}。请补充后重新打开或更新 Issue。`,
    };
  }

  return { valid: true, message: 'Issue 模板校验通过。' };
}

function markdownLinkLabel(url) {
  const parsed = new URL(url);
  return basename(parsed.pathname) || parsed.hostname;
}

function sourceLinkLabel(entry) {
  return entry.site;
}

function tableCell(value) {
  return value.replace(/\r?\n+/g, '<br>').replace(/\|/g, '\\|').trim();
}

export function buildRows(entry) {
  const guideLabel = markdownLinkLabel(entry.url);
  const source = entry.source.startsWith('http')
    ? `[${tableCell(sourceLinkLabel(entry))}](${entry.source})`
    : tableCell(entry.source);
  const row = `| ${tableCell(entry.site)} | [\`${guideLabel}\`](${entry.url}) | ${tableCell(entry.action)} | ${source} |`;

  return { zh: row };
}

function extractUrls(row) {
  return [...row.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].map((match) => match[1]);
}

export function updateReadme(content, row, sectionTitle) {
  const urls = extractUrls(row);
  if (urls.some((url) => content.includes(url))) {
    throw new Error(`Guide URL already exists: ${urls.join(', ')}`);
  }

  const marker = `${sectionTitle}\n\n`;
  const sectionStart = content.indexOf(marker);
  if (sectionStart === -1) {
    throw new Error(`Section not found: ${sectionTitle}`);
  }

  const tableStart = content.indexOf('|', sectionStart);
  if (tableStart === -1) {
    throw new Error(`Table not found under section: ${sectionTitle}`);
  }

  const nextSection = content.indexOf('\n## ', tableStart);
  if (nextSection === -1) {
    return `${content.trimEnd()}\n${row}\n`;
  }

  const before = content.slice(0, nextSection).trimEnd();
  const after = content.slice(nextSection);
  return `${before}\n${row}\n${after}`;
}

function writeOutput(name, value) {
  const output = process.env.GITHUB_OUTPUT;
  if (!output) return;
  appendFileSync(output, `${name}<<EOF\n${value}\nEOF\n`, 'utf8');
}

async function main() {
  const issueBodyPath = process.env.ISSUE_BODY_FILE;
  if (!issueBodyPath) {
    throw new Error('ISSUE_BODY_FILE is required.');
  }

  const issueBody = readFileSync(issueBodyPath, 'utf8');
  const entry = parseIssueBody(issueBody);
  const validation = validateEntry(entry);

  if (!validation.valid) {
    writeOutput('status', 'invalid');
    writeOutput('message', validation.message);
    process.exitCode = 0;
    return;
  }

  if (process.env.VALIDATE_ONLY === 'true') {
    writeOutput('status', 'valid');
    writeOutput('message', 'Issue 模板校验通过。等待仓库管理者（admin 权限）添加 `approved` 标签后写入 README。');
    process.exitCode = 0;
    return;
  }

  const rows = buildRows(entry);
  const readmePath = 'README.md';
  const readme = readFileSync(readmePath, 'utf8');

  try {
    writeFileSync(readmePath, updateReadme(readme, rows.zh, '## Agent Markdown 指南'), 'utf8');
  } catch (error) {
    writeOutput('status', 'invalid');
    writeOutput('message', error.message);
    process.exitCode = 0;
    return;
  }

  writeOutput('status', 'updated');
  writeOutput('message', `已添加 ${entry.site}：${entry.url}`);
}

if (process.argv[1] && resolve(fileURLToPath(import.meta.url)) === resolve(process.argv[1])) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}

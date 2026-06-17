import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import {
  buildRows,
  parseIssueBody,
  updateReadme,
  validateEntry,
} from './update-readme-from-issue.mjs';

const validIssue = `
## 网站或产品名称

ExampleSite

## Markdown 指南 URL

https://example.com/agent-guide.md

## 指南类型

集成 / API 调用

## agent 可以根据它完成什么动作

读取指南并完成 API 接入。

## 发现入口或公开来源

官网开发者页面公开提供。

## 访问限制

无需登录即可访问。

## 验证状态

- [x] 我确认这是网站/产品主动提供给 AI agent 的 Markdown 指南。
- [x] 我提供了发现入口或可信公开来源。
`;

const readme = `# awesome-guide.md

## Agent Markdown 指南

| 网站 / 产品 | Markdown 指南 | 主要用途 | 发现入口 / 来源 |
| --- | --- | --- | --- |
| Existing | [\`guide.md\`](https://existing.com/guide.md) | 已有用途 | [Existing](https://existing.com) |

## 如何提交新条目
`;

test('parseIssueBody extracts filled template fields', () => {
  const entry = parseIssueBody(validIssue);

  assert.equal(entry.site, 'ExampleSite');
  assert.equal(entry.url, 'https://example.com/agent-guide.md');
  assert.equal(entry.type, '集成 / API 调用');
  assert.equal(entry.action, '读取指南并完成 API 接入。');
  assert.equal(entry.source, '官网开发者页面公开提供。');
  assert.equal(entry.access, '无需登录即可访问。');
  assert.equal(entry.verifiedGuide, true);
  assert.equal(entry.verifiedSource, true);
});

test('parseIssueBody accepts UTF-8 BOM before the first heading', () => {
  const entry = parseIssueBody(`\uFEFF${validIssue}`);

  assert.equal(entry.site, 'ExampleSite');
  assert.equal(entry.verifiedGuide, true);
});

test('validateEntry rejects missing required fields and unchecked boxes', () => {
  const entry = parseIssueBody('## 网站或产品名称\n\nExampleSite');
  const result = validateEntry(entry);

  assert.equal(result.valid, false);
  assert.match(result.message, /Markdown 指南 URL/);
  assert.match(result.message, /验证状态/);
});

test('validateEntry rejects action and source fields longer than 40 characters', () => {
  const entry = parseIssueBody(validIssue);
  entry.action = '这是一个明确超过四十个字符的动作说明字段，用来验证自动校验会拒绝过长内容并返回错误。';
  entry.source = '这是一个明确超过四十个字符的公开来源说明字段，用来验证自动校验会拒绝过长内容并返回错误。';
  const result = validateEntry(entry);

  assert.equal(result.valid, false);
  assert.match(result.message, /agent 可以根据它完成什么动作（40字以内）/);
  assert.match(result.message, /发现入口或公开来源（40字以内）/);
});

test('buildRows creates a Chinese README markdown table row', () => {
  const entry = parseIssueBody(validIssue);
  const rows = buildRows(entry);

  assert.equal(
    rows.zh,
    '| ExampleSite | [`agent-guide.md`](https://example.com/agent-guide.md) | 读取指南并完成 API 接入。 | 官网开发者页面公开提供。 |',
  );
  assert.equal(Object.hasOwn(rows, 'en'), false);
});

test('updateReadme appends a row before the next section', () => {
  const entry = parseIssueBody(validIssue);
  const rows = buildRows(entry);
  const updated = updateReadme(readme, rows.zh, '## Agent Markdown 指南');

  assert.match(updated, /\| ExampleSite \| \[`agent-guide.md`\]/);
  assert.ok(updated.indexOf('ExampleSite') < updated.indexOf('## 如何提交新条目'));
  assert.match(updated, /ExampleSite.*\|\n\n## 如何提交新条目/s);
});

test('updateReadme rejects duplicate guide URLs', () => {
  const duplicate = () => updateReadme(readme, '| Duplicate | [`guide.md`](https://existing.com/guide.md) | Use | [Duplicate](https://existing.com) |', '## Agent Markdown 指南');

  assert.throws(duplicate, /already exists/);
});

test('CLI validate-only mode does not write README', () => {
  const cwd = mkdtempSync(join(tmpdir(), 'awesome-guide-'));
  writeFileSync(join(cwd, 'README.md'), readme, 'utf8');
  writeFileSync(join(cwd, 'issue.md'), validIssue, 'utf8');
  const outputPath = join(cwd, 'output.txt');

  const result = spawnSync(
    process.execPath,
    [fileURLToPath(new URL('./update-readme-from-issue.mjs', import.meta.url))],
    {
      cwd,
      env: {
        ...process.env,
        ISSUE_BODY_FILE: 'issue.md',
        GITHUB_OUTPUT: outputPath,
        VALIDATE_ONLY: 'true',
      },
      encoding: 'utf8',
    },
  );

  assert.equal(result.status, 0, result.stderr);
  assert.equal(readFileSync(join(cwd, 'README.md'), 'utf8'), readme);
  assert.match(readFileSync(outputPath, 'utf8'), /status<<EOF\nvalid\nEOF/);
  assert.match(readFileSync(outputPath, 'utf8'), /仓库管理者（admin 权限）/);
});

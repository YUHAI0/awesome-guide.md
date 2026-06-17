import assert from 'node:assert/strict';
import test from 'node:test';
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

AI agent 可以读取该指南，完成 ExampleSite API 的接入和首个请求。

## 发现入口或公开来源

https://example.com/developers

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

const readmeEn = `# awesome-guide.md

## Agent Markdown Guides

| Site / Product | Markdown Guide | Main Use | Source |
| --- | --- | --- | --- |
| Existing | [\`guide.md\`](https://existing.com/guide.md) | Existing use | [Existing](https://existing.com) |

## Contributing
`;

test('parseIssueBody extracts filled template fields', () => {
  const entry = parseIssueBody(validIssue);

  assert.equal(entry.site, 'ExampleSite');
  assert.equal(entry.url, 'https://example.com/agent-guide.md');
  assert.equal(entry.type, '集成 / API 调用');
  assert.equal(entry.action, 'AI agent 可以读取该指南，完成 ExampleSite API 的接入和首个请求。');
  assert.equal(entry.source, 'https://example.com/developers');
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

test('buildRows creates Chinese and English markdown table rows', () => {
  const entry = parseIssueBody(validIssue);
  const rows = buildRows(entry);

  assert.equal(
    rows.zh,
    '| ExampleSite | [`agent-guide.md`](https://example.com/agent-guide.md) | AI agent 可以读取该指南，完成 ExampleSite API 的接入和首个请求。 | [ExampleSite](https://example.com/developers) |',
  );
  assert.equal(
    rows.en,
    '| ExampleSite | [`agent-guide.md`](https://example.com/agent-guide.md) | AI agent 可以读取该指南，完成 ExampleSite API 的接入和首个请求。 | [ExampleSite](https://example.com/developers) |',
  );
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
  const duplicate = () => updateReadme(readmeEn, '| Duplicate | [`guide.md`](https://existing.com/guide.md) | Use | [Duplicate](https://existing.com) |', '## Agent Markdown Guides');

  assert.throws(duplicate, /already exists/);
});

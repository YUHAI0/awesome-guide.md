# awesome-guide.md

[English](README.en.md) | 中文

> 收集网站、产品和文档站主动提供给 AI Agent 阅读或执行的 Markdown 指南。

## 项目目的

`awesome-guide.md` 关注的不是 Claude、Codex、Cursor 这类 agent 工具内置会读取哪些本地规则文件，而是互联网上的网站主动暴露给 agent 的 Markdown 指南入口。

这类文档通常长这样：

- 网站页面直接告诉用户：把某个 `.md` 链接发给你的 AI agent；
- 网站提供专门给 agent 阅读或执行的 `.md` 指南；
- 文档站提供 AI Agent Resources 页面，说明 agent 如何发现、读取、注册、鉴权或调用服务；

## 收录标准

- 必须是某个网站、产品、服务或文档站公开提供的 Markdown 指南。
- 必须能用于指导 AI agent 接入、注册、鉴权、调用、集成、发现资源或理解该服务。
- 必须能在公开网页、官方文档、官方仓库或可信公开资料中查到。
- 只收录 `.md` 或明确以 Markdown 格式提供的页面。
- 不收录 agent 工具自己的本地规则文件，例如 `AGENTS.md`、`CLAUDE.md`、`.cursor/rules/*.mdc`。
- 不收录普通 API 文档页面，除非该页面明确面向 AI agent。

## Agent Markdown 指南

| 网站 / 产品 | Markdown 指南 | 主要用途 | 发现入口 / 来源 |
| --- | --- | --- | --- |
| Moltbook | [`skill.md`](https://www.moltbook.com/skill.md) | 让 AI agent 读取后加入 Moltbook、注册身份并执行平台集成流程 | [Moltbook 首页](https://www.moltbook.com/) 明确写着让 agent 读取 `skill.md` |
| Telnyx | [`getting-started.md`](https://telnyx.com/getting-started.md) | Telnyx 面向 agent 的注册到首个 API 调用流程 | [Telnyx getting started](https://telnyx.com/getting-started.md) |
| Hookdeck | [`/docs/ai-agent-resources.md`](https://hookdeck.com/docs/ai-agent-resources.md) | 给 AI agent 的资源中心，说明 Markdown docs、MCP、skills、CLI 等入口 | [Hookdeck AI Agent Resources](https://hookdeck.com/docs/ai-agent-resources) |
| Redis | [`/docs/latest/ai-agent-resources/index.html.md`](https://redis.io/docs/latest/ai-agent-resources/index.html.md) | Redis 为 AI agent 提供的资源说明，包含 Markdown 文档格式和 API 参考入口 | [Redis AI Agent Resources](https://redis.io/docs/latest/ai-agent-resources/) |
| Inkbox | [`/docs/get-started/agent-signup.md`](https://inkbox.ai/docs/get-started/agent-signup.md) | AI agent 注册 Inkbox，获得身份、邮箱、tunnel 和 API key | [Inkbox agent signup](https://inkbox.ai/docs/get-started/agent-signup.md) |

## 暂不收录

下面这些不是本项目当前要收录的对象：

- agent 工具内置本地规则：`AGENTS.md`、`CLAUDE.md`、`GEMINI.md`、`QWEN.md`、`.cursor/rules/*.mdc` 等；
- 只服务人类开发者的普通 API 文档；
- 站点索引、文档地图或非 Markdown 指南入口；
- 普通项目文档：`README.md`、`CONTRIBUTING.md`、`SECURITY.md`；
- 配置文件：`.env`、`settings.json`、`mcp.json`、`.aider.conf.yml`；
- 无法公开访问或没有可信来源的链接。

## 推荐记录字段

新增条目时建议至少记录：

- 网站或产品名称；
- Markdown 指南 URL；
- 指南类型：注册、鉴权、集成、资源索引、技能安装、API 调用、上手流程；
- agent 可以根据它完成什么动作；
- 发现入口或来源页面；
- 是否需要登录、地区可访问性或人类确认步骤。

## 如何提交新条目

1. 在 GitHub 仓库新建 Issue，标题使用：`Add: 网站名 / Markdown 指南 URL`。
2. Issue 必须提供：网站名称、Markdown 指南链接、用途说明、发现入口或公开来源。
3. 也可以直接提交 PR：

```bash
git clone git@github.com:YUHAI0/awesome-guide.md.git
cd awesome-guide.md
git checkout -b docs/add-agent-site-guide
git add README.md
git commit -m "docs: 添加某网站的 agent markdown 指南"
git push origin docs/add-agent-site-guide
```

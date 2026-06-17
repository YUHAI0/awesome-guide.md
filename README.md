# awesome-guide.md

[English](README.en.md) | 中文

> 收集网站、产品和文档站主动提供给 AI Agent 阅读或执行的 Markdown 指南。

## 项目目的

`awesome-guide.md` 的目的是收录互联网上的网站主动暴露给 agent 的 Markdown 指南入口。

## 收录标准

- 必须是某个网站、产品、服务或文档站公开提供的 Markdown 指南。
- 必须能用于指导 AI agent 接入、注册、鉴权、调用、集成、发现资源或理解该服务。
- 必须能在公开网页、官方文档、官方仓库或可信公开资料中查到。
- 只收录 `.md` 或明确以 Markdown 格式提供的页面。
- 不收录普通 API 文档页面，除非该页面明确面向 AI agent。

## Agent Markdown 指南

| 网站 / 产品 | Markdown 指南 | 主要用途 | 发现入口 / 来源 |
| --- | --- | --- | --- |
| Moltbook | [`skill.md`](https://www.moltbook.com/skill.md) | 让 AI agent 读取后加入 Moltbook、注册身份并执行平台集成流程 | [Moltbook 首页](https://www.moltbook.com/) 明确写着让 agent 读取 `skill.md` |
| Telnyx | [`getting-started.md`](https://telnyx.com/getting-started.md) | Telnyx 面向 agent 的注册到首个 API 调用流程 | [Telnyx getting started](https://telnyx.com/getting-started.md) |
| Hookdeck | [`/docs/ai-agent-resources.md`](https://hookdeck.com/docs/ai-agent-resources.md) | 给 AI agent 的资源中心，说明 Markdown docs、MCP、skills、CLI 等入口 | [Hookdeck AI Agent Resources](https://hookdeck.com/docs/ai-agent-resources) |
| Redis | [`/docs/latest/ai-agent-resources/index.html.md`](https://redis.io/docs/latest/ai-agent-resources/index.html.md) | Redis 为 AI agent 提供的资源说明，包含 Markdown 文档格式和 API 参考入口 | [Redis AI Agent Resources](https://redis.io/docs/latest/ai-agent-resources/) |
| Inkbox | [`/docs/get-started/agent-signup.md`](https://inkbox.ai/docs/get-started/agent-signup.md) | AI agent 注册 Inkbox，获得身份、邮箱、tunnel 和 API key | [Inkbox agent signup](https://inkbox.ai/docs/get-started/agent-signup.md) |

## 如何提交新条目

请通过 GitHub Issue 提交新条目，标题使用：`Add: 网站名`。

Issue 模板会要求填写网站名称、Markdown 指南链接、指南类型、agent 可完成的动作、公开来源、访问限制和验证状态。

可以参考 Issue 模板中的样例填写。

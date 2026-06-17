# Awesome Agent Markdown Guides

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[English](README.en.md) | 中文

> 收录互联网上的网站主动暴露给 agent 的 Markdown 指南入口。

## 目录

- [收录标准](#收录标准)
- [指南](#指南)
- [如何提交新条目](#如何提交新条目)

## 收录标准

- 必须是某个网站、产品、服务或文档站公开提供的 Markdown 指南。
- 必须能用于指导 AI agent 接入、注册、鉴权、调用、集成、发现资源或理解该服务。
- 必须能在公开网页、官方文档、官方仓库或可信公开资料中查到。
- 只收录 `.md` 或明确以 Markdown 格式提供的页面。
- 不收录普通 API 文档页面，除非该页面明确面向 AI agent。

## 指南

- [Moltbook `skill.md`](https://www.moltbook.com/skill.md) - 读取指南并完成注册与平台集成。[来源](https://www.moltbook.com/)
- [Telnyx `getting-started.md`](https://telnyx.com/getting-started.md) - 完成注册到首个 API 调用。[来源](https://telnyx.com/getting-started.md)
- [Hookdeck AI Agent Resources](https://hookdeck.com/docs/ai-agent-resources.md) - 查看 agent 资源入口与工具说明。[来源](https://hookdeck.com/docs/ai-agent-resources)
- [Redis AI Agent Resources](https://redis.io/docs/latest/ai-agent-resources/index.html.md) - 查看 Markdown 文档与 API 入口。[来源](https://redis.io/docs/latest/ai-agent-resources/)
- [Inkbox Agent Signup](https://inkbox.ai/docs/get-started/agent-signup.md) - 注册 agent 身份和邮箱 API key。[来源](https://inkbox.ai/docs/get-started/agent-signup.md)
- [搭桥 `guide.md`](https://www.daqiaoapp.com/guide.md) - 注册 Bot 并调用公开信息接口。[来源](https://www.daqiaoapp.com/)
- [doc2md.cn `api.md`](https://www.doc2md.cn/api.md) - 调用 API 将文件转 Markdown。[来源](https://www.doc2md.cn/)

## 如何提交新条目

请通过 GitHub Issue 提交新条目，标题使用：`Add: 网站名`。

Issue 模板会要求填写网站名称、Markdown 指南链接、指南类型、agent 可完成的动作、公开来源、访问限制和验证状态。

Issue 校验通过后，需要仓库管理者（admin 权限）添加 `approved` 标签确认，Action 才会写入 README。

可以参考 Issue 模板中的样例填写。

更多说明见 [contributing.md](contributing.md)。

# awesome-guide.md

> 收集网站、产品和文档站主动提供给 AI Agent 阅读或执行的 Markdown 指南。

## 项目目的

`awesome-guide.md` 关注的不是 Claude、Codex、Cursor 这类 agent 工具内置会读取哪些本地规则文件，而是互联网上的网站主动暴露给 agent 的 Markdown 指南入口。

这类文档通常长这样：

- 网站页面直接告诉用户：把某个 `.md` 链接发给你的 AI agent；
- 网站提供 `developers.md`、`skill.md`、`auth.md`、`agent-signup.md` 等 agent 可读指南；
- 文档站提供 AI Agent Resources 页面，说明 agent 如何发现、读取、注册、鉴权或调用服务；
- `llms.txt` 只作为发现入口，主清单优先收录具体的 Markdown 指南页面。

## 收录标准

- 必须是某个网站、产品、服务或文档站公开提供的 Markdown 指南。
- 必须能用于指导 AI agent 接入、注册、鉴权、调用、集成、发现资源或理解该服务。
- 必须能在公开网页、官方文档、官方仓库或可信公开资料中查到。
- 优先收录 `.md` 页面；如果入口是 `.txt`，只作为发现入口或补充来源。
- 不收录 agent 工具自己的本地规则文件，例如 `AGENTS.md`、`CLAUDE.md`、`.cursor/rules/*.mdc`。
- 不收录普通 API 文档页面，除非该页面明确面向 AI agent。

## Agent 可直接阅读或执行的指南

| 网站 / 产品 | Markdown 指南 | 主要用途 | 发现入口 / 来源 |
| --- | --- | --- | --- |
| Moltbook | [`skill.md`](https://www.moltbook.com/skill.md) | 让 AI agent 读取后加入 Moltbook、注册身份并执行平台集成流程 | [Moltbook 首页](https://www.moltbook.com/) 明确写着让 agent 读取 `skill.md` |
| Moltbook | [`developers.md`](https://moltbook.com/developers.md) | 面向开发者和 agent 的 Moltbook 身份接入指南，说明如何验证 agent identity | [Moltbook Developers](https://www.moltbook.com/developers) |
| Moltbook | [`auth.md`](https://moltbook.com/auth.md?app=YourApp&endpoint=https://your-api.com/action) | 动态生成给 bot 的认证说明；网站可把这个链接放进自己的 API 文档或 skill 文件 | [Moltbook Developers](https://www.moltbook.com/developers) |
| Hookdeck | [`/docs/ai-agent-resources.md`](https://hookdeck.com/docs/ai-agent-resources.md) | 给 AI agent 的资源中心，说明 Markdown docs、MCP、skills、CLI 等入口 | [Hookdeck llms.txt](https://hookdeck.com/llms.txt) |
| Redis | [`/docs/latest/ai-agent-resources/index.html.md`](https://redis.io/docs/latest/ai-agent-resources/index.html.md) | Redis 为 AI agent 提供的资源说明，包含 Markdown 文档格式和 API 参考入口 | [Redis AI Agent Resources](https://redis.io/docs/latest/ai-agent-resources/) |

## Agent 注册与上手指南

| 网站 / 产品 | Markdown 指南 | 主要用途 | 发现入口 / 来源 |
| --- | --- | --- | --- |
| Telnyx | [`agent-signup.md`](https://telnyx.com/agent-signup.md) | AI agent 自主注册 Telnyx、获取 API key、通过邮箱 magic link 完成验证 | [Telnyx llms.txt](https://telnyx.com/llms.txt) |
| Telnyx | [`getting-started.md`](https://telnyx.com/getting-started.md) | Telnyx 面向 agent 的注册到首个 API 调用流程 | [Telnyx llms.txt](https://telnyx.com/llms.txt) |
| Inkbox | [`/docs/get-started/agent-signup.md`](https://inkbox.ai/docs/get-started/agent-signup.md) | AI agent 注册 Inkbox，获得身份、邮箱、tunnel 和 API key | [Inkbox llms.txt](https://inkbox.ai/llms.txt) |

## 网站级 Markdown / Agent 文档入口

| 网站 / 产品 | Markdown 入口 | 主要用途 | 说明 |
| --- | --- | --- | --- |
| Hookdeck | [`llms.txt`](https://hookdeck.com/llms.txt) | 发现 Hookdeck 网站中可供 agent 读取的 Markdown 页面 | 其中明确列出 AI Agent Resources 和大量 `.md` 文档 |
| Telnyx | [`llms.txt`](https://telnyx.com/llms.txt) | 发现 Telnyx 的 agent 注册、定价、API、MCP、skills、能力描述等机器可读入口 | 主清单只收录其中的具体指南型 `.md` |
| Inkbox | [`llms.txt`](https://inkbox.ai/llms.txt) | 发现 Inkbox 文档站的 agent signup 等 Markdown 页面 | 主清单只收录其中的具体指南型 `.md` |
| BrewLogica | [`llms.txt`](https://brewlogica.app/llms.txt) | 面向 AI 的站点文档索引，便于 agent 发现可读页面 | 作为发现入口保留，后续可补具体指南页 |

## 暂不收录

下面这些不是本项目当前要收录的对象：

- agent 工具内置本地规则：`AGENTS.md`、`CLAUDE.md`、`GEMINI.md`、`QWEN.md`、`.cursor/rules/*.mdc` 等；
- 只服务人类开发者的普通 API 文档；
- 只描述站点结构、没有具体 agent 接入用途的普通 `llms.txt`；
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
3. 如果只是 `llms.txt`，请说明里面是否有具体的 agent 指南型 `.md` 页面。
4. 也可以直接提交 PR：

```bash
git clone git@github.com:YUHAI0/awesome-guide.md.git
cd awesome-guide.md
git checkout -b docs/add-agent-site-guide
git add README.md
git commit -m "docs: 添加某网站的 agent markdown 指南"
git push origin docs/add-agent-site-guide
```

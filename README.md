# awesome-guide.md

> 收集全网公开可查、用于指导 AI Agent / Coding Agent / IDE Agent 行为的 Markdown 指引文件。

## 项目目的

`awesome-guide.md` 只整理“指引类 Markdown”：也就是工具会读取、引用或建议维护的规则、约定、记忆、指南、编码标准等自然语言文档。它的目标是帮助开发者快速判断：

- 某个 agent 应该把项目规则写到哪个 Markdown 文件里；
- 这个文件放在哪里；
- 它主要指导什么行为；
- 官方或可信英文文档在哪里。

## 收录标准

- 必须是公开网页、官方文档、官方仓库或可信社区资料中可以查到的文件。
- 必须用于指导 agent 行为、编码规范、项目约定、上下文记忆或工作方式。
- 优先收录 Markdown 文件；少数官方明确说明为 Markdown 规则文件但后缀不是 `.md` 的格式会单独标注。
- 不收录模型配置、API Key 配置、MCP 配置、忽略文件、普通项目 README、普通贡献指南、普通安全策略文件。
- 不收录无法找到公开来源的口口相传用法。

## 通用指引文件

| 指引文件 | 适用工具 | 推荐位置 | 作用 | 英文文档 / 来源 |
| --- | --- | --- | --- | --- |
| `AGENTS.md` | OpenAI Codex、GitHub Copilot、Devin / Windsurf Cascade、Cline、Roo Code、JetBrains Junie、Amp、Crush、Aider 等 | 仓库根目录或子目录 | 跨工具的项目级 agent 指引，通常写启动命令、测试命令、代码风格、目录约定、PR 要求 | [AGENTS.md](https://agents.md/), [OpenAI Codex](https://developers.openai.com/codex/guides/agents-md), [GitHub Copilot](https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot), [Devin / Windsurf Cascade](https://docs.windsurf.com/windsurf/cascade/agents-md), [Cline](https://docs.cline.bot/customization/cline-rules), [Roo Code](https://roocodeinc.github.io/Roo-Code/features/custom-instructions/), [Junie](https://junie.jetbrains.com/docs/guidelines-and-memory.html), [Amp](https://ampcode.com/manual), [Crush](https://github.com/charmbracelet/crush) |
| `AGENTS.override.md` | OpenAI Codex | 与 `AGENTS.md` 同级 | Codex 专用覆盖指引，用于替代同目录下的 `AGENTS.md` | [OpenAI Codex](https://developers.openai.com/codex/guides/agents-md) |

## 主流 Coding Agent 指引文件

| 工具 | 指引文件 | 推荐位置 | 作用 | 英文文档 / 来源 |
| --- | --- | --- | --- | --- |
| Claude Code | `CLAUDE.md` | 仓库根目录、父目录或用户级目录 | Claude Code 的项目记忆文件，写项目说明、常用命令、代码风格、团队约定 | [Claude Code memory](https://docs.anthropic.com/en/docs/claude-code/memory) |
| Claude Code | `CLAUDE.local.md` | 仓库根目录 | 本地个人偏好指引，适合写不应提交到仓库的私人环境、测试数据或偏好 | [Claude Code memory](https://docs.anthropic.com/en/docs/claude-code/memory) |
| Claude Code | `.claude/rules/*.md` | `.claude/rules/` | 面向大项目的路径级或主题级规则文件，用于拆分代码风格、安全、测试等指引 | [Claude Code memory](https://docs.anthropic.com/en/docs/claude-code/memory) |
| GitHub Copilot | `.github/copilot-instructions.md` | `.github/` | 仓库级 Copilot 自定义指令，影响 Chat、代码生成、Review 等支持场景 | [GitHub Copilot custom instructions](https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot) |
| GitHub Copilot | `.github/instructions/*.instructions.md` | `.github/instructions/` | 路径级或主题级指令文件，可用 frontmatter 定义适用文件范围 | [GitHub Copilot custom instructions](https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot) |
| Gemini CLI | `GEMINI.md` | 仓库目录或用户级目录 | Gemini CLI 的上下文指引文件，可写项目说明、角色、编码风格和团队规则 | [Gemini CLI context files](https://geminicli.com/docs/cli/gemini-md/), [Google Developers](https://developers.google.com/gemini-code-assist/docs/gemini-cli) |
| Qwen Code | `QWEN.md` | 仓库根目录或 `.qwen/` | Qwen Code 的上下文指引文件，用于写项目级或全局默认指令 | [Qwen Code settings](https://qwenlm.github.io/qwen-code-docs/en/users/configuration/settings/) |
| Aider | `CONVENTIONS.md` | 仓库根目录或自定义路径 | 编码约定指引文件，通常通过 `/read CONVENTIONS.md` 或 `--read CONVENTIONS.md` 加载 | [Aider conventions](https://aider.chat/docs/usage/conventions.html), [Aider conventions repo](https://github.com/Aider-AI/conventions) |
| Amp | `AGENTS.md` | 仓库根目录或目录树中 | Amp 读取的项目结构、构建测试命令、编码约定指引 | [Amp manual](https://ampcode.com/manual) |
| Amp | `AGENT.md` | 仓库根目录 | Amp 旧版指引文件；官方说明现已改为读取 `AGENTS.md` | [Amp AGENT.md note](https://ampcode.com/news/AGENT.md) |
| Crush | `CRUSH.md` | `~/.config/crush/CRUSH.md` 或初始化时自定义路径 | Crush 专用自然语言指引文件，用于写只适合 Crush 的规则；项目初始化默认生成 `AGENTS.md`，也可自定义为 `CRUSH.md` | [Crush README](https://github.com/charmbracelet/crush) |

## IDE / 插件规则指引文件

| 工具 | 指引文件 | 推荐位置 | 作用 | 英文文档 / 来源 |
| --- | --- | --- | --- | --- |
| Cursor | `.cursor/rules/*.mdc` | `.cursor/rules/` | Cursor Project Rules；`.mdc` 是 Markdown Cursor 规则文件，可写编码规范、架构约束、文件匹配规则 | [Cursor rules](https://cursor.com/docs/rules) |
| Devin / Windsurf Cascade | `.devin/rules/*.md` | `.devin/rules/` | Cascade 工作区规则文件，适合团队共享编码规范、架构约定和项目行为指引 | [Devin / Windsurf memories and rules](https://docs.windsurf.com/windsurf/cascade/memories) |
| Devin / Windsurf Cascade | `.windsurf/rules/*.md` | `.windsurf/rules/` | Cascade 旧版兼容规则目录；新项目优先使用 `.devin/rules/` | [Devin / Windsurf memories and rules](https://docs.windsurf.com/windsurf/cascade/memories) |
| Devin / Windsurf Cascade | `global_rules.md` | `~/.codeium/windsurf/memories/global_rules.md` | Cascade 全局规则文件，适合跨项目个人或组织通用指引 | [Devin / Windsurf memories and rules](https://docs.windsurf.com/windsurf/cascade/memories) |
| Cline | `.clinerules/*.md` | `.clinerules/` | Cline 持久规则文件，用于写编码标准、项目偏好、工作流程要求 | [Cline rules](https://docs.cline.bot/customization/cline-rules) |
| Roo Code | `.roo/rules/*.md` | `.roo/rules/` | Roo Code 工作区规则，用于写自定义行为、编码标准、约束和偏好 | [Roo Code custom instructions](https://roocodeinc.github.io/Roo-Code/features/custom-instructions/) |
| Roo Code | `.roo/rules-{mode}/*.md` | `.roo/` | Roo Code 模式专用规则，例如只对某个 mode 生效的指引 | [Roo Code custom instructions](https://roocodeinc.github.io/Roo-Code/features/custom-instructions/) |
| Continue | `.continue/rules/*.md` | `.continue/rules/` | Continue Agent / Chat / Edit 模式规则文件，可用 YAML frontmatter 控制适用范围 | [Continue rules](https://docs.continue.dev/customize/deep-dives/rules) |
| Amazon Q Developer | `.amazonq/rules/*.md` | `.amazonq/rules/` | Amazon Q 项目规则，写编码标准、安全要求、架构模式等团队共享指引 | [Amazon Q project rules](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/context-project-rules.html), [AWS blog](https://aws.amazon.com/blogs/devops/mastering-amazon-q-developer-with-rules/) |
| JetBrains Junie | `AGENTS.md` | 仓库根目录 | Junie 推荐的项目级 guidelines 文件 | [Junie guidelines](https://junie.jetbrains.com/docs/guidelines-and-memory.html), [JetBrains AI Assistant](https://www.jetbrains.com/help/ai-assistant/junie-agent.html) |
| JetBrains Junie | `.junie/guidelines.md` | `.junie/` | Junie 早期 guidelines 文件；现可用 `AGENTS.md` 替代或迁移 | [Junie guidelines](https://junie.jetbrains.com/docs/guidelines-and-memory.html) |
| JetBrains Junie | `.junie/guidelines/*.md` | `.junie/guidelines/` | Junie 技术栈或主题拆分式 guidelines | [Junie guidelines](https://junie.jetbrains.com/docs/guidelines-and-memory.html), [Junie guidelines repo](https://github.com/JetBrains/junie-guidelines) |

## 不收录范围

下面这些文件可能也会被 agent 读取，但它们不是本项目要整理的“agent 指引类 Markdown”，因此暂不作为主清单条目：

- `README.md`：项目介绍文档，不是 agent 专用指引。
- `CONTRIBUTING.md`：贡献说明，不是 agent 专用指引。
- `SECURITY.md`：安全披露说明，不是 agent 专用指引。
- `llms.txt` / `llms-full.txt`：文档站索引或 LLM 文档入口，不是 coding agent 项目行为指引。
- `.env`、`settings.json`、`mcp.json`、`.aider.conf.yml` 等：配置文件，不是 Markdown 指引。
- `SKILL.md`：技能包入口，不属于本清单当前聚焦的“项目规则 / 指引类 Markdown”。

## 建议维护方式

如果一个团队同时使用多个 agent，建议优先维护一个通用 `AGENTS.md`，再按工具需要添加桥接文件：

- Claude Code：可以在 `CLAUDE.md` 中引用或总结 `AGENTS.md`。
- GitHub Copilot：可以同时维护 `.github/copilot-instructions.md` 和 `AGENTS.md`，前者服务 Copilot 全局自定义指令，后者服务 coding agent。
- Gemini CLI / Qwen Code：如果团队重度使用对应 CLI，可以维护 `GEMINI.md` 或 `QWEN.md`。
- Cursor / Cline / Roo / Continue / Amazon Q：适合把大规则拆成多个主题文件，放到各自规则目录。

推荐指引文件包含：

- 项目简介和关键目录；
- 安装、启动、构建、测试命令；
- 代码风格和架构边界；
- 禁止修改或高风险区域；
- 常见任务流程；
- PR、提交、验证要求；
- 工具专用注意事项。

## 如何提交新条目

1. 在 GitHub 仓库新建 Issue，标题使用：`Add: 工具名 / 文件名`。
2. Issue 必须提供：工具名称、指引文件名、推荐路径、用途说明、英文官方文档或可信公开来源链接。
3. 如果没有公开来源链接，暂不收录。
4. 也可以直接提交 PR：

```bash
git clone git@github.com:YUHAI0/awesome-guide.md.git
cd awesome-guide.md
git checkout -b docs/add-agent-guide
git add README.md
git commit -m "docs: 添加某工具的 agent 指引文件"
git push origin docs/add-agent-guide
```

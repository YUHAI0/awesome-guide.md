# awesome-guide.md

> 中文：整理全网公开出现过、可被 AI agent / coding agent / IDE agent 读取或接入的 Markdown 文档约定。
>
> English: A curated bilingual index of Markdown-based conventions that AI agents, coding agents, and IDE agents can read, load, or use as persistent project context.

## 项目目的 / Purpose

中文：`awesome-guide.md` 旨在把分散在各类 agent 工具、IDE、CLI、文档站和社区里的 Markdown 接入文件统一整理出来，帮助开发者快速判断“应该把规则写到哪个 `.md` 文件里”“哪些工具能读取它”“它适合团队共享、个人偏好、项目规则还是可复用技能”。

English: `awesome-guide.md` collects Markdown entry points used by agentic coding tools and AI-assisted development environments. It helps developers decide where to place instructions, which tools can read them, and whether each file is best suited for team-wide rules, personal preferences, project context, reusable skills, prompts, or documentation indexes.

## 收录标准 / Inclusion Criteria

- 中文：优先收录有官方文档、官方仓库、明确工具行为或广泛社区实践的 Markdown 文件。
- English: Prefer files backed by official docs, source repositories, documented tool behavior, or broad community practice.
- 中文：同一工具的新旧格式会同时列出，并标注推荐状态。
- English: New and legacy formats for the same tool may both be listed, with status notes.
- 中文：不保证“全网穷尽”，但会持续通过 Issue 和 PR 补全。
- English: This list is not guaranteed to be exhaustive, but is designed to grow through Issues and pull requests.

## 通用标准 / Cross-Agent Standards

| 文件 / File | 工具或生态 / Tool or Ecosystem | 用途 / Purpose | 状态 / Status | 参考 / Reference |
| --- | --- | --- | --- | --- |
| `AGENTS.md` | Codex, Cursor, GitHub Copilot, Windsurf / Devin Desktop, Cline, Roo Code, Junie, Amp, Aider, and more | 中文：跨工具项目指令文件；英文：cross-tool project instructions | 推荐 / Recommended | [agents.md](https://agents.md/) |
| `AGENTS.override.md` | OpenAI Codex | 中文：全局或目录级覆盖指令；英文：global or directory-level override instructions | 工具专用 / Tool-specific | [Codex AGENTS.md guide](https://developers.openai.com/codex/guides/agents-md) |
| `llms.txt` | Docs sites, LLM-ready documentation | 中文：面向 LLM 的文档索引；英文：LLM-readable documentation index | 推荐用于文档站 / Recommended for docs sites | [llmstxt.org](https://llmstxt.org/) |
| `llms-full.txt` | Docs sites, LLM-ready documentation | 中文：完整文档上下文；英文：full documentation context for LLMs | 可选 / Optional | [llmstxt.org](https://llmstxt.org/) |
| `SKILL.md` | Agent Skills compatible tools | 中文：可复用 agent 技能包入口；英文：entry file for reusable agent skill packages | 推荐用于复杂流程 / Recommended for reusable workflows | [Agent Skills](https://agentskills.io/) |

## 编码 Agent 与 IDE 规则 / Coding Agents and IDE Rules

| 工具 / Tool | Markdown 文件 / Markdown Files | 默认位置 / Default Location | 说明 / Notes | 参考 / Reference |
| --- | --- | --- | --- | --- |
| OpenAI Codex | `AGENTS.md`, `AGENTS.override.md` | `~/.codex/`, repo root, nested directories | 中文：按全局、项目、子目录分层加载；英文：loads global, project, and nested instructions in order | [Codex guide](https://developers.openai.com/codex/guides/agents-md) |
| Claude Code | `CLAUDE.md`, `CLAUDE.local.md`, `.claude/rules/*.md` | repo root, `.claude/`, `~/.claude/` | 中文：`CLAUDE.md` 可用 `@AGENTS.md` 复用通用规则；英文：`CLAUDE.md` can import `AGENTS.md` with `@` syntax | [Claude memory docs](https://docs.anthropic.com/en/docs/claude-code/memory) |
| GitHub Copilot | `.github/copilot-instructions.md`, `.github/instructions/*.instructions.md`, `AGENTS.md`, `CLAUDE.md`, `GEMINI.md` | `.github/`, `.github/instructions/`, repo tree | 中文：支持仓库级、路径级和 agent 指令；英文：supports repo-wide, path-specific, and agent instructions | [GitHub Docs](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions) |
| Gemini CLI | `GEMINI.md`, configurable `AGENTS.md` | repo tree, `~/.gemini/` | 中文：默认读取 `GEMINI.md`，可通过 `contextFileName` 改为 `AGENTS.md`；英文：defaults to `GEMINI.md`, configurable to `AGENTS.md` | [Gemini CLI configuration](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/configuration.md) |
| Qwen Code | `QWEN.md`, configurable context files | repo tree, `~/.qwen/`, `.qwen/settings.json` | 中文：默认上下文文件为 `QWEN.md`，可配置 `context.fileName`；英文：defaults to `QWEN.md`, configurable via `context.fileName` | [Qwen Code settings](https://qwenlm.github.io/qwen-code-docs/en/users/configuration/settings/) |
| Cursor | `.cursor/rules/*.mdc`, `AGENTS.md`, legacy `.cursorrules` | `.cursor/rules/`, repo root | 中文：`.mdc` 支持 frontmatter、glob 和智能附加；英文：`.mdc` supports frontmatter, globs, and intelligent attachment | [Cursor rules](https://cursor.com/docs/rules.md) |
| Windsurf / Devin Desktop Cascade | `.devin/rules/*.md`, `.windsurf/rules/*.md`, `.windsurfrules`, `AGENTS.md` | `.devin/rules/`, `.windsurf/rules/`, repo tree | 中文：`.devin/rules/` 为推荐位置，`.windsurf/` 为兼容位置；英文：`.devin/rules/` is preferred, `.windsurf/` remains as fallback | [Cascade memories and rules](https://docs.windsurf.com/windsurf/cascade/memories) |
| Cline | `.clinerules/*.md`, `.clinerules/*.txt`, `AGENTS.md`, legacy `.cursorrules`, `.windsurfrules` | `.clinerules/`, repo root | 中文：支持多来源规则并可在规则面板切换；英文：detects several rule sources and allows toggling | [Cline rules](https://docs.cline.bot/customization/cline-rules) |
| Roo Code | `.roo/rules/*.md`, `.roo/rules-{mode}/*.md`, `.roorules`, `.roorules-{mode}`, `AGENTS.md` | `.roo/`, repo root, `~/.roo/` | 中文：支持全局、工作区和模式专用规则；英文：supports global, workspace, and mode-specific rules | [Roo custom instructions](https://docs.roocode.com/features/custom-instructions) |
| Continue | `.continue/rules/*.md` | `.continue/rules/` | 中文：Markdown rule 可带 YAML frontmatter、glob、regex、alwaysApply；英文：Markdown rules support frontmatter, globs, regex, and `alwaysApply` | [Continue rules](https://docs.continue.dev/customize/deep-dives/rules) |
| Amazon Q Developer | `.amazonq/rules/*.md` | `.amazonq/rules/` | 中文：项目规则会在 IDE chat 中自动作为上下文；英文：project rules are automatically used as IDE chat context | [Amazon Q project rules](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/context-project-rules.html) |
| Aider | `CONVENTIONS.md` or any Markdown loaded with `/read` / `--read` | configurable, often repo root | 中文：通过 `.aider.conf.yml` 的 `read` 固定加载约定；英文：can always load conventions via `.aider.conf.yml` `read` | [Aider conventions](https://aider.chat/docs/usage/conventions.html) |
| JetBrains Junie | `.junie/AGENTS.md`, `AGENTS.md`, legacy `.junie/guidelines.md`, `.junie/guidelines/*.md` | `.junie/`, repo root, `~/.junie/` | 中文：优先使用 `.junie/AGENTS.md` 和根目录 `AGENTS.md`；英文：prefers `.junie/AGENTS.md` and root `AGENTS.md` | [Junie guidelines](https://junie.jetbrains.com/docs/guidelines-and-memory.html) |
| Amp | `AGENTS.md`, legacy `AGENT.md` | repo root | 中文：新版本使用 `AGENTS.md`，旧文章提到 `AGENT.md`；英文：newer behavior uses `AGENTS.md`, legacy docs mention `AGENT.md` | [Amp manual](https://ampcode.com/manual) |
| Crush | `CRUSH.md`, `AGENTS.md` | `~/.config/crush/CRUSH.md`, `~/.config/AGENTS.md` | 中文：`CRUSH.md` 放工具专用规则，`AGENTS.md` 放跨工具规则；英文：use `CRUSH.md` for Crush-specific rules and `AGENTS.md` for shared rules | [Crush README](https://github.com/charmbracelet/crush) |

## 技能、命令与工作流 / Skills, Commands, and Workflows

| 文件 / File | 工具或生态 / Tool or Ecosystem | 用途 / Purpose | 备注 / Notes |
| --- | --- | --- | --- |
| `SKILL.md` | Agent Skills, Claude Code, Codex plugins, Crush, compatible agents | 中文：技能说明、触发条件、步骤、引用文件；英文：skill description, triggers, steps, and references | 适合复杂、可复用流程 / Best for reusable procedures |
| `.claude/commands/*.md` | Claude Code | 中文：自定义 slash command；英文：custom slash commands | 常用于可重复提示 / Reusable prompts |
| `.continue/prompts/*.md` | Continue | 中文：可复用 prompt；英文：reusable prompts | 可与 rules 分离 / Separate from rules |
| `.devin/workflows/*.md` or `.windsurf/workflows/*.md` | Windsurf / Devin Desktop | 中文：手动触发的工作流；英文：manually triggered workflows | 适合发布、评审、部署清单 / Useful for release, review, and deploy checklists |
| `.qwen/skills/*/SKILL.md` | Qwen Code | 中文：项目级 agent skill；英文：project-level agent skill | Qwen Code 文档列出 `.qwen/skills/` |

## 文档站与知识库接入 / Documentation and Knowledge-Base Entry Points

| 文件 / File | 适用场景 / Scenario | 用途 / Purpose |
| --- | --- | --- |
| `llms.txt` | 文档站、SDK、开源项目 / docs sites, SDKs, OSS projects | 中文：提供面向 LLM 的文档地图；英文：provides an LLM-oriented documentation map |
| `llms-full.txt` | 小型文档站或可接受大上下文的场景 / small docs sites or large-context use | 中文：提供完整合并文档；英文：provides full merged docs |
| `README.md` | 所有项目 / all projects | 中文：人类入口，也常被 agent 读取；英文：human entry point, often read by agents |
| `CONTRIBUTING.md` | 开源项目 / open-source projects | 中文：贡献流程、测试、提交规范；英文：contribution flow, tests, commit rules |
| `SECURITY.md` | 开源或企业项目 / OSS or enterprise projects | 中文：安全报告、禁区、漏洞披露；英文：security reporting and disclosure rules |
| `ARCHITECTURE.md` | 中大型项目 / medium and large projects | 中文：系统结构与边界；英文：system structure and boundaries |
| `DESIGN.md` | 设计系统、品牌、UI 项目 / design systems, brand, UI projects | 中文：面向 agent 的视觉规范；英文：agent-readable visual identity or design system guidance |

## 建议写法 / Recommended Structure

中文：如果你只想维护一个通用文件，优先从 `AGENTS.md` 开始；如果你的团队同时使用 Claude Code、Cursor、Copilot、Gemini CLI 等工具，再按工具需要添加轻量桥接文件，例如 `CLAUDE.md` 内只写 `@AGENTS.md`。

English: If you want one shared source of truth, start with `AGENTS.md`. If your team uses Claude Code, Cursor, Copilot, Gemini CLI, and other tools together, add thin compatibility files where needed, such as a `CLAUDE.md` that only imports `@AGENTS.md`.

推荐章节 / Suggested sections:

- 项目概览 / Project overview
- 环境与启动命令 / Setup and run commands
- 构建、测试、Lint / Build, test, and lint
- 代码风格与架构边界 / Code style and architectural boundaries
- 安全与权限注意事项 / Security and permission notes
- 提交与 PR 规范 / Commit and PR rules
- 工具专用补充 / Tool-specific notes

## 待补充清单 / To Be Expanded

- Zed Agent, Factory, Devin cloud, Kilo Code, OpenCode, Sourcegraph Cody, Tabnine, Replit Agent, VS Code agent mode, Warp, Goose, Semgrep Assistant, Augment Code, UIPath coded agents.
- 更多非英文生态里的 agent Markdown 约定。
- 更多真实仓库示例和迁移模板。

## 如何提交 awesome-guide 条目 / How to Contribute an awesome-guide Entry

中文：

1. 在 GitHub 上打开本仓库：`git@github.com:YUHAI0/awesome-guide.md.git` 对应的页面。
2. 新建 Issue，标题使用：`Add: 工具名 / 文件名`。
3. 在 Issue 中提供：工具名称、Markdown 文件名、默认路径、用途、官方文档或可信来源链接、是否已验证。
4. 如果你愿意直接修改清单，也可以 fork 仓库后通过 Git 提交 PR：

```bash
git clone git@github.com:YUHAI0/awesome-guide.md.git
cd awesome-guide.md
git checkout -b docs/add-your-agent-md
git add README.md
git commit -m "docs: 添加某工具的 agent 文档约定"
git push origin docs/add-your-agent-md
```

English:

1. Open the GitHub repository that corresponds to `git@github.com:YUHAI0/awesome-guide.md.git`.
2. Create an Issue with the title `Add: tool name / file name`.
3. Include the tool name, Markdown filename, default path, purpose, official or credible source link, and verification status.
4. You can also fork the repository and submit a PR through Git:

```bash
git clone git@github.com:YUHAI0/awesome-guide.md.git
cd awesome-guide.md
git checkout -b docs/add-your-agent-md
git add README.md
git commit -m "docs: 添加某工具的 agent 文档约定"
git push origin docs/add-your-agent-md
```

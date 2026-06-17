# awesome-guide.md

English | [中文](README.md)

> A curated list of Markdown guides that websites, products, and documentation sites publish for AI agents to read or execute.

## Purpose

`awesome-guide.md` does not track local rule files built into agent tools such as Claude, Codex, or Cursor. It tracks Markdown guide entry points that websites publish on the open web for AI agents.

These documents usually look like:

- a website tells users to give a specific `.md` link to their AI agent;
- a website publishes agent-readable guides such as `developers.md`, `skill.md`, `auth.md`, or `agent-signup.md`;
- a documentation site publishes an AI Agent Resources page that explains how agents can discover, read, sign up, authenticate, or call the service.

## Inclusion Criteria

- The entry must be a public Markdown guide provided by a website, product, service, or documentation site.
- It must help an AI agent integrate, sign up, authenticate, call APIs, discover resources, or understand the service.
- It must be discoverable from a public webpage, official documentation, official repository, or credible public source.
- Only `.md` pages or pages explicitly served as Markdown are included.
- Local rule files for agent tools are excluded, such as `AGENTS.md`, `CLAUDE.md`, and `.cursor/rules/*.mdc`.
- Generic API docs are excluded unless the page is explicitly designed for AI agents.

## Agent-Readable Or Executable Guides

| Site / Product | Markdown Guide | Main Use | Source |
| --- | --- | --- | --- |
| Moltbook | [`skill.md`](https://www.moltbook.com/skill.md) | Lets an AI agent join Moltbook, register identity, and run platform integration steps | [Moltbook homepage](https://www.moltbook.com/) points agents to `skill.md` |
| Moltbook | [`developers.md`](https://moltbook.com/developers.md) | Developer and agent guide for Moltbook identity integration and agent identity verification | [Moltbook Developers](https://www.moltbook.com/developers) |
| Moltbook | [`auth.md`](https://moltbook.com/auth.md?app=YourApp&endpoint=https://your-api.com/action) | Dynamic authentication instructions for bots; sites can link it from API docs or skill files | [Moltbook Developers](https://www.moltbook.com/developers) |
| Hookdeck | [`/docs/ai-agent-resources.md`](https://hookdeck.com/docs/ai-agent-resources.md) | Resource hub for AI agents, covering Markdown docs, MCP, skills, CLI, and related entry points | [Hookdeck AI Agent Resources](https://hookdeck.com/docs/ai-agent-resources) |
| Redis | [`/docs/latest/ai-agent-resources/index.html.md`](https://redis.io/docs/latest/ai-agent-resources/index.html.md) | Redis resources for AI agents, including Markdown documentation format and API reference entry points | [Redis AI Agent Resources](https://redis.io/docs/latest/ai-agent-resources/) |

## Agent Signup And Getting Started Guides

| Site / Product | Markdown Guide | Main Use | Source |
| --- | --- | --- | --- |
| Telnyx | [`agent-signup.md`](https://telnyx.com/agent-signup.md) | Lets an AI agent sign up for Telnyx, get an API key, and complete magic-link verification | [Telnyx agent signup](https://telnyx.com/agent-signup.md) |
| Telnyx | [`getting-started.md`](https://telnyx.com/getting-started.md) | Agent-oriented Telnyx flow from signup to the first API call | [Telnyx getting started](https://telnyx.com/getting-started.md) |
| Inkbox | [`/docs/get-started/agent-signup.md`](https://inkbox.ai/docs/get-started/agent-signup.md) | Lets an AI agent register with Inkbox and get an identity, mailbox, tunnel, and API key | [Inkbox agent signup](https://inkbox.ai/docs/get-started/agent-signup.md) |

## Excluded

The following are outside the scope of this project:

- local rule files built into agent tools: `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `QWEN.md`, `.cursor/rules/*.mdc`, and similar files;
- generic API docs written only for human developers;
- site indexes, documentation maps, or non-Markdown guide entry points;
- ordinary project docs: `README.md`, `CONTRIBUTING.md`, `SECURITY.md`;
- configuration files: `.env`, `settings.json`, `mcp.json`, `.aider.conf.yml`;
- links that are not publicly accessible or do not have a credible source.

## Recommended Fields

When adding an entry, include at least:

- site or product name;
- Markdown guide URL;
- guide type: signup, authentication, integration, resource hub, skill installation, API call, getting started;
- what an agent can do after reading it;
- source page;
- login requirements, regional access limits, or human confirmation steps.

## Contributing

1. Open a GitHub Issue with the title: `Add: site name / Markdown guide URL`.
2. Include the site name, Markdown guide link, purpose, and public source.
3. Or submit a PR directly:

```bash
git clone git@github.com:YUHAI0/awesome-guide.md.git
cd awesome-guide.md
git checkout -b docs/add-agent-site-guide
git add README.md README.en.md
git commit -m "docs: 添加某网站的 agent markdown 指南"
git push origin docs/add-agent-site-guide
```

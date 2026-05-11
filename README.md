# Glitch Vibe Kit

Glitch Vibe Kit is a free starter kit for setting up an AI coding agent so it can build real projects instead of only chatting about them.

It works with Claude Code, Codex, Cursor, OpenClaw, Hermes, NemoClaw, and Aider. The kit gives your agent a sane project operating manual, a safe MCP roster, useful skills, and starter templates for common builds.

You do not need to be a full-time engineer to use it. You do need to be willing to paste one install prompt into your AI coding tool, add your own API keys where the templates say `<paste-key-here>`, and follow the first 24-hour onboarding checklist.

## Fast Start

1. Download this folder or clone the repo.
2. Open `INSTALL-PROMPT.md`.
3. Paste it into your AI coding agent.
4. Follow the agent's prompts.
5. Start with one template in `templates/`.

If scripts make you nervous, open `install/install-via-claude.md` and paste that into Claude Code or Codex instead.

## What You Get

- `INSTALL-PROMPT.md` - one prompt that tells any AI coding agent how to install the kit.
- `docs/ONBOARDING.md` - the first 24 hours, written for non-engineers.
- `docs/WHAT-IS-MCP.md` - plain-English MCP explanation.
- `docs/PICK-YOUR-AGENT.md` - Claude Code vs Codex vs Cursor vs OpenClaw vs Hermes vs NemoClaw vs Aider.
- `agent-configs/` - sanitized starter configs for each tool.
- `mcp/mcp.json.template` - a safe MCP roster with placeholders, not secrets.
- `templates/` - starter projects for common agency and SaaS workflows.
- `skills/` - portable skill docs for HeyGen video and Shopify theme work.
- `install/` - macOS/Linux and Windows installers.

## Before Paid Agent Installs

Paid Glitch Grow agents assume this kit has already been installed.

If you skip it, the paid install steps still work, but they will be slower because your AI agent will wire MCPs and project rules ad hoc instead of starting from a known baseline.

## Security Rules

- Never commit `.env` files.
- Never paste live API keys into Git, Slack, Discord, or an AI chat unless you are intentionally rotating them afterwards.
- Use the placeholders in `mcp/mcp.json.template` and let your local agent write real secrets only into local ignored files.
- Keep client data out of prompts unless the client has approved that workflow.

## Included Skills

V1 includes two broadly useful sanitized skills:

- HeyGen video workflows: avatar/video planning, generation checklist, and quality rules.
- Shopify theme developer workflows: premium section patterns, blocks, presets, color schemes, and theme QA.

These are docs and prompts, not hidden credentials. You still need your own HeyGen, Shopify, GitHub, Stripe, and other account keys.

## License

Source-available starter kit. See `LICENSE`.

# Install Prompt

Paste this into Claude Code, Codex, Cursor, OpenClaw, Hermes, NemoClaw, or Aider from the folder that contains this kit.

```text
You are installing the Glitch Vibe Kit for me.

Goal: configure my AI coding workspace so I can build real projects with a safe MCP roster, useful agent rules, and starter templates.

Rules:
- Do not expose, print, or commit secrets.
- Ask before overwriting existing config files.
- Back up any existing config before replacing it.
- Use the templates in this folder as source material.
- If a tool is not installed, tell me the exact install step and continue with the rest.
- Prefer local ignored config files for real API keys.

Steps:
1. Detect my OS and current AI tool if possible.
2. Read README.md, docs/ONBOARDING.md, docs/WHAT-IS-MCP.md, and docs/PICK-YOUR-AGENT.md.
3. Inspect agent-configs/ and choose the config matching my tool.
4. Copy or merge the matching config into my project.
5. Copy mcp/mcp.json.template to a local MCP config location, replacing only placeholders I provide.
6. Ask which starter template I want: astro-marketing-site, nextjs-stripe-saas, python-langgraph-agent, or express-postgres-api.
7. Create a new project folder from that template.
8. Run the template's smoke test if dependencies are available.
9. End by telling me exactly what changed, what still needs keys, and the first useful command to run.
```

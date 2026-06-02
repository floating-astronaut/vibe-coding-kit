# Install Prompt

Paste this into Claude Code, Codex, Kimi, Cursor, Aider, or NemoClaw from the folder that contains this kit.

```text
You are installing the Vibe Coding Kit for me.

Goal: configure my AI coding workspace so a coordinated multi-agent team can work the same repo with zero drift — docs first, lanes assigned, write back, no drift.

Rules:
- Do not expose, print, or commit secrets.
- Ask before overwriting existing config files.
- Back up any existing config before replacing it.
- Use the templates in this folder as source material.
- If a tool is not installed, tell me the exact install step and continue with the rest.
- Prefer local ignored config files for real API keys.

Steps:
1. Detect my OS and current AI tool if possible.
2. Read README.md, docs/THE-METHOD.md, docs/ROLES.md, and docs/ONBOARDING.md.
3. Inspect agent-configs/ and choose the config matching my tool.
   - Claude Code / Cursor / Aider → builder role (heavy authoring, multi-file)
   - Codex / NemoClaw → verifier role (check claims, polish details, find bugs)
   - Kimi → orchestrator role (cross-repo, parallel checks, infra)
4. Copy or merge the matching config into my project.
5. If this is a new project (not the kit itself), run: bin/vibe-scaffold .
6. Copy mcp/mcp.json.template to a local MCP config location, replacing only placeholders I provide.
7. Ask which starter template I want: astro-marketing-site, nextjs-stripe-saas, python-langgraph-agent, or express-postgres-api.
8. Create a new project folder from that template.
9. Run the template's smoke test if dependencies are available.
10. End by telling me exactly what changed, what still needs keys, and the first useful command to run.
```

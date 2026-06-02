# Install Prompt

Paste this into Claude Code, Codex, Kimi, Cursor, or Aider, run from the folder
that contains this kit.

```text
You are installing the Vibe Coding Kit into my project so a coordinated
multi-agent team can work the same repo with zero drift: docs first, lanes
assigned, write back, no drift.

Rules:
- Do not expose, print, or commit secrets. Keep real keys in local ignored files.
- Ask before overwriting existing files; back up anything you replace.

Steps:
1. Read README.md, docs/THE-METHOD.md, and docs/ROLES.md.
2. From the target project directory, run:  bin/vibe-scaffold .
   This drops the method docs, a fresh control plane (lane board, session
   coordination, supervisor log), and the per-agent configs (CLAUDE.md /
   AGENTS.md / KIMI.md) into the project.
3. Confirm I have a builder, a verifier, and an orchestrator covered (see
   docs/ROLES.md): e.g. Claude builds, Codex verifies, Kimi orchestrates.
   Map whatever agents I run onto those three functions.
4. Open my first lane:  bin/vibe-lane open SETUP-1 "<first task>"
5. Tell me exactly what changed and the first command to run.
```

# Vibe Coding Kit

> Replace your dev team — you don't need one anymore.

One operator + a coordinated Claude / Codex / Kimi team ships like a squad. The Vibe Coding Kit is the operating system for that team: docs-first discipline, bounded lanes, and zero-drift handoffs across agents.

v1 was a single-agent bootstrap kit. **v2 productizes what's actually defensible: the coordination layer.** Three agents work the same repo without colliding because the docs are the source of truth and a control plane assigns and tracks every lane.

## Fast Start

1. Clone this repo.
2. Open `INSTALL-PROMPT.md`.
3. Paste it into your AI coding agent.
4. Follow the agent's prompts.
5. Read `docs/THE-METHOD.md` — this is the loop that prevents drift.

## What You Get

- `INSTALL-PROMPT.md` — one prompt that bootstraps a 3-agent team into any repo.
- `docs/THE-METHOD.md` — the core loop: docs first → lanes assigned → code → write back → no drift.
- `docs/AGENT-SYNC-PROTOCOL.md` — the multi-agent contract every session agrees to.
- `docs/ROLES.md` — who does what (Claude builds, Codex verifies, Kimi orchestrates).
- `docs/LANE-LIFECYCLE.md` — how lanes move: OPEN → CLAIMED → IN PROGRESS → IN VERIFICATION → CLOSED.
- `docs/DOC-SYSTEM.md` — the master doc map and precedence rules.
- `docs/ONBOARDING.md` — the first hour for an operator.
- `bin/vibe-scaffold` — drop the doc-system + control-plane into any repo in one command.
- `bin/vibe-lane` — open, claim, state, and close lanes on the live board.
- `bin/vibe-writeback` — append evidence to the supervisor log and regenerate changelogs.
- `agent-configs/` — enforcing configs for Claude Code, Codex, Kimi, Cursor, Aider, and NemoClaw.
- `mcp/mcp.json.template` — a safe MCP roster with placeholders, not secrets.
- `templates/` — starter projects for common agency and SaaS workflows.

## The Three Tools

### `bin/vibe-scaffold [target-dir]`

Drops the full method into a target repo: method docs, fresh control-plane templates (lane board, session coordination, supervisor), and per-agent enforcing configs. Run this once per project to make it multi-agent safe.

```bash
vibe-scaffold /path/to/your-project
```

### `bin/vibe-lane`

Manage lanes on `control-plane/ACTIVE_LANE_BOARD.md`.

```bash
vibe-lane open  L1 "wire up auth"
vibe-lane claim L1 Claude
vibe-lane state L1 "IN PROGRESS"
vibe-lane state L1 "IN VERIFICATION"
vibe-lane close L1 "auth flow end-to-end passing"
```

### `bin/vibe-writeback`

Automate the write-back step that closes a lane.

```bash
vibe-writeback supervisor L1   # prepend a prefilled evidence entry
vibe-writeback changelog       # regenerate CHANGELOG.md from git log
```

## Agent Roles

| Agent | Default Role | When to assign |
|---|---|---|
| **Claude Code** | Builder | Heavy multi-file authoring, refactors, migrations |
| **Codex** | Verifier & finisher | Rendered-page verification, detail polish, bug-finding |
| **Kimi** | Orchestrator | Cross-repo work, parallel verification, infra checks |
| **Cursor** | Builder | IDE-based deep coding, manual steering with AI assist |
| **Aider** | Builder | Terminal-first precise edits with git discipline |
| **NemoClaw** | Verifier | Lightweight second-pair-of-eyes checks and experiments |

Keep the three *functions* covered — builder / verifier / orchestrator — and map your roster onto them. The method depends on the functions, not the specific tools.

## Security Rules

- Never commit `.env` files.
- Never paste live API keys into Git, Slack, Discord, or an AI chat unless you are intentionally rotating them afterwards.
- Use the placeholders in `mcp/mcp.json.template` and let your local agent write real secrets only into local ignored files.
- Keep client data out of prompts unless the client has approved that workflow.

## Proof

This kit was built with its own method. Here is a real zero-drift lane start→close on a freshly scaffolded repo:

```bash
# 1. Scaffold the method into a throwaway repo
$ vibe-scaffold /tmp/vibe-proof
Scaffolding vibe-coding-kit method into: /tmp/vibe-proof
  + docs/THE-METHOD.md
  + docs/AGENT-SYNC-PROTOCOL.md
  + docs/ROLES.md
  + docs/LANE-LIFECYCLE.md
  + docs/DOC-SYSTEM.md
  + control-plane/ACTIVE_LANE_BOARD.md
  + control-plane/SESSION_COORDINATION.md
  + control-plane/ENGINEERING_SUPERVISOR.md
  + CLAUDE.md
  + AGENTS.md
  + KIMI.md

# 2. Open a lane
$ cd /tmp/vibe-proof && vibe-lane open PROOF-1 "proof run — zero drift demo"
opened PROOF-1 (unassigned)

# 3. Claim it
$ vibe-lane claim PROOF-1 Kimi
claimed PROOF-1 -> Kimi

# 4. Move through states
$ vibe-lane state PROOF-1 "IN PROGRESS"
PROOF-1 -> [IN PROGRESS]

$ vibe-lane state PROOF-1 "IN VERIFICATION"
PROOF-1 -> [IN VERIFICATION]

# 5. Close it
$ vibe-lane close PROOF-1 "scaffold + lane lifecycle + writeback verified end-to-end"
closed PROOF-1

# 6. Write back evidence
$ vibe-writeback supervisor PROOF-1 Kimi
prepended PROOF-1 entry to control-plane/ENGINEERING_SUPERVISOR.md
```

Result: the lane board shows PROOF-1 in **Recently closed**, and the supervisor log contains a dated evidence entry. Zero drift — the repo state, the board, and the evidence log are consistent without human babysitting.

## License

MIT. See `LICENSE`.

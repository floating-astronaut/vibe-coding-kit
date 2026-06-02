# Active Lane Board — vibe-coding-kit v2

> Live queue for building v2. This repo is built with its own method: these are
> real lanes, tracked here, closed with write-back. See `docs/V2-DESIGN.md` for
> the spec they're cut from.

States: `OPEN` · `CLAIMED` · `IN PROGRESS` · `IN VERIFICATION` · `CLOSED`

---

## Active

### L3 — Enforcing agent configs                [OPEN]
Owner: Claude        Opened: 2026-06-02
Reading: docs/THE-METHOD.md, docs/AGENT-SYNC-PROTOCOL.md, docs/ROLES.md
Acceptance: claude-code/CLAUDE.md, codex/AGENTS.md, kimi/KIMI.md each enforce
  read-docs → claim-lane → write-back → no-drift; no generic v1 copy remains
Write-back: this board, ENGINEERING_SUPERVISOR.md

### L4 — Tooling (vibe-scaffold / vibe-lane / vibe-writeback)   [OPEN]
Owner: Claude / Kimi        Opened: 2026-06-02
Reading: docs/LANE-LIFECYCLE.md, docs/DOC-SYSTEM.md
Acceptance: `vibe-scaffold` drops docs/ + control-plane/ + configs into a fresh
  repo in one command; `vibe-lane` opens/claims/closes a board entry
Write-back: this board, ENGINEERING_SUPERVISOR.md, README

### L5 — Refresh v1 carryover                   [OPEN]
Owner: Codex        Opened: 2026-06-02
Reading: docs/V2-DESIGN.md, existing README.md, templates/, mcp/
Acceptance: README + INSTALL-PROMPT reframed to the method + "replace your dev
  team" positioning; zero "glitch"/old-brand leakage; template smoke tests pass
Write-back: this board, ENGINEERING_SUPERVISOR.md

### L6 — Proof run                              [OPEN]
Owner: Kimi        Opened: 2026-06-02
Reading: all of docs/ + control-plane/
Acceptance: scaffold v2 into a throwaway repo, run one real lane start→close
  across two agents, show zero-drift handoff; capture the transcript
Write-back: ENGINEERING_SUPERVISOR.md, README (proof section)

---

## Recently closed

- **L1 — Method docs** (Claude, 2026-06-02) — THE-METHOD, AGENT-SYNC-PROTOCOL, ROLES, LANE-LIFECYCLE, DOC-SYSTEM written. → supervisor
- **L2 — Control plane** (Claude, 2026-06-02) — 3 templates authored. → supervisor
- **L0 — Design** (Claude, 2026-06-02) — docs/V2-DESIGN.md locked. → supervisor

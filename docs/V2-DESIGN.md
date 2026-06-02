# Vibe Kit v2 — Design Doc (docs-first anchor)

> This is the locked spec for v2. Per the method this kit teaches, nothing
> gets coded until this doc is agreed. Lanes are cut from here.

## Thesis

v1 was a **single-agent bootstrap kit for non-engineers** — pick an agent,
install MCPs, grab a template. v2 productizes the part that's actually
novel and defensible: **the operating system for a coordinated multi-agent
dev team.**

The core loop v2 ships and enforces:

```
docs first  →  lanes assigned  →  code  →  write back  →  no drift
```

Three agents (Claude Code, Codex, Kimi) work the same repo without colliding,
because the **docs are the source of truth** and a **control plane** assigns
and tracks lanes. v2 is the artifact of the process it teaches.

## Audience & distribution

- **Audience:** operators who already run AI coding agents and want the
  coordination discipline (not absolute beginners).
- **Distribution:** public OSS, MIT, under **`floating-astronaut`** (personal
  flagship — GitHub + GitLab). Ties to tejaskaranagrawal.com. Not org-branded.

## What v2 is (repo structure)

```
README.md                         # positioning: an OS for a multi-agent dev team
INSTALL-PROMPT.md                 # bootstrap a 3-agent team into a fresh repo
docs/
  THE-METHOD.md                   # the core loop, explained + why it kills drift
  AGENT-SYNC-PROTOCOL.md          # the multi-agent contract (sanitized, generalized)
  ROLES.md                        # Claude / Codex / Kimi comparative advantage + split
  LANE-LIFECYCLE.md               # open → assign → work → verify → close → write-back
  DOC-SYSTEM.md                   # doc precedence + master map (the meta-doc)
  ONBOARDING.md                   # first hour for an operator
control-plane/                    # the live coordination surfaces (templates)
  ACTIVE_LANE_BOARD.template.md   # the live queue + assignment surface
  SESSION_COORDINATION.template.md# who is doing what, right now
  ENGINEERING_SUPERVISOR.template.md # append-only evidence log
agent-configs/                    # configs that ENFORCE the method (not generic v1 ones)
  claude-code/CLAUDE.md           # read docs → claim a lane → write back → no drift
  codex/AGENTS.md
  kimi/KIMI.md
  cursor/ , aider/ , ...
bin/
  vibe-lane                       # CLI: open/claim/close lanes, update the board
  vibe-scaffold                   # drop the doc-system + control-plane into any repo
  vibe-writeback                  # changelog / supervisor write-back automation
mcp/                              # safe MCP roster (kept from v1)
templates/                        # starter projects (kept from v1, refreshed)
```

## The method (what THE-METHOD.md will codify)

1. **Docs first.** Before code on any non-trivial task, the relevant design /
   contract doc is written or updated. Code never outruns docs on
   architecture, IA, reporting, pricing, tracking, security, or UX.
2. **Lanes assigned.** Work is cut into bounded lanes on `ACTIVE_LANE_BOARD`.
   Each lane has: owner agent, required-reading docs, acceptance, write-back duty.
3. **Comparative advantage.** Claude = heavy multi-file authoring/refactors;
   Codex = browser/rendered verification + detail polish + second-pair-of-eyes;
   Kimi = cross-repo orchestration + parallel verification + infra checks.
4. **Write back.** A lane isn't closed until the contract doc is updated, the
   lane board reflects status, and evidence is appended to the supervisor log.
5. **No drift.** Precedence is explicit (direct instruction > doc system > live
   control-plane > code > prior chat). Generated/meta artifacts are aids, not law.

## How we BUILD v2 (the lanes — eat our own dog food)

| Lane | Owner | Scope | Acceptance |
|---|---|---|---|
| **L1 Method docs** | Claude | THE-METHOD, AGENT-SYNC-PROTOCOL, ROLES, LANE-LIFECYCLE, DOC-SYSTEM | reads coherently end-to-end; no v1/"glitch"/PII leakage |
| **L2 Control plane** | Claude | the 3 control-plane templates + their formats | a fresh repo can adopt them as-is |
| **L3 Enforcing configs** | Claude | claude-code/CLAUDE.md, codex/AGENTS.md, kimi/KIMI.md wired to the method | each enforces read-docs → claim-lane → write-back |
| **L4 Tooling** | Claude/Kimi | `vibe-lane`, `vibe-scaffold`, `vibe-writeback` | scaffolds + drives a lane on a sample repo |
| **L5 Refresh v1 carryover** | Codex | README, INSTALL-PROMPT, templates, MCP roster | no stale branding; smoke tests pass |
| **L6 Proof run** | Kimi | scaffold v2 into a throwaway repo, run one real lane start→close | demonstrates zero-drift handoff across 3 agents |

L1/L2 are the foundation and must land before L3–L6.

## Success criteria

- A new operator can run `vibe-scaffold` in any repo and have the full
  doc-system + control-plane + 3-agent configs in place in one command.
- Two agents can work the same repo concurrently without clobbering each
  other (proven by L6).
- Zero "glitch"/old-brand/PII leakage; clean public history.

## Decided

- **Repo name:** `vibe-coding-kit` (rename from `glitch-vibe-kit`), under
  `floating-astronaut` on GitHub + GitLab.
- **Positioning hook:** *"Replace your dev team — you don't need one anymore."*
  One operator + a coordinated Claude/Codex/Kimi team ships like a squad.

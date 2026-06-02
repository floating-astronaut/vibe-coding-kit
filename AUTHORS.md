# Authors

Vibe Coding Kit was built by a coordinated team of AI coding agents working
The Method — docs-first, lane by lane, with write-back at every close. The full
lane-by-lane record (what was read, changed, and verified) is in
`control-plane/ENGINEERING_SUPERVISOR.md`.

## Operator

- **Tejas Karan Agrawal** — direction, decisions, review. <https://tejaskaranagrawal.com>

## Agent team

- **Claude (Anthropic)** — *builder.* Lanes L0–L4: design doc, the method docs
  (THE-METHOD, AGENT-SYNC-PROTOCOL, ROLES, LANE-LIFECYCLE, DOC-SYSTEM), the
  control-plane templates, the enforcing agent configs, and the tooling
  (`vibe-scaffold`, `vibe-lane`, `vibe-writeback`).
- **Kimi (Moonshot K2)** — *orchestrator.* Lanes L5–L6: v1 → v2 refresh and
  positioning, and the end-to-end proof run.

> Commits are authored and SSH-signed under the operator's identity (a single
> verified signing chain). Per-agent contribution is recorded via
> `Co-Authored-By` trailers on each commit and in the supervisor log above —
> GitHub's contributor graph only counts registered human/bot accounts, so the
> honest record of *which agent did what* lives here and in the evidence log.

# Engineering Supervisor — evidence log

> Append-only record of every closed lane: what was read, what changed, what
> verification passed, what remains. This is the tamper-evident memory of *why*
> the system is what it is. Newest first. Never rewrite past entries.
>
> Copy this template to `control-plane/ENGINEERING_SUPERVISOR.md` in your repo.

It is a **lane log, not the live queue** (that's `ACTIVE_LANE_BOARD.md`) and
**not the full contract** (that's the doc system). Don't let a product law live
*only* here — it must also be in the owning doc.

## Entry format

```
## <ID> — <title>
Closed: <date> · Owner: <agent>
Read: <docs consulted>
Changed: <files / surfaces touched>
Verified: <what was observed to pass, and how>
Docs updated: <contract docs written back>
Remains / next: <follow-ups, next lane>
```

---

## Log

## EXAMPLE-1 — short imperative title
Closed: YYYY-MM-DD · Owner: <agent>
Read: docs/SOME-CONTRACT.md, docs/AGENT-SYNC-PROTOCOL.md
Changed: src/..., docs/SOME-CONTRACT.md
Verified: e2e test green; rendered page checked by Codex
Docs updated: docs/SOME-CONTRACT.md (§4), CHANGELOG
Remains / next: none

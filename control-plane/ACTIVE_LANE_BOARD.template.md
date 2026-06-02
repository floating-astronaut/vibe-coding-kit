# Active Lane Board

> The single live queue. Every lane lives here and moves through states. This
> is the assignment surface — agents claim, work, and close lanes here. If the
> board and reality disagree, fix the board.
>
> Copy this template to `control-plane/ACTIVE_LANE_BOARD.md` in your repo.

States: `OPEN` · `CLAIMED` · `IN PROGRESS` · `IN VERIFICATION` · `CLOSED`

## Lane format

```
### <ID> — <title>                          [STATE]
Owner: <agent | unassigned>      Opened: <date>
Reading: <docs to read before code>
Acceptance: <verifiable definition of done>
Write-back: <docs to update on close>
Notes: <decisions, blockers, handoff hints>
```

---

## Active

### EXAMPLE-1 — short imperative title          [OPEN]
Owner: unassigned        Opened: YYYY-MM-DD
Reading: docs/SOME-CONTRACT.md
Acceptance: <how we'll know it's done, observably>
Write-back: docs/SOME-CONTRACT.md, CHANGELOG
Notes: first sub-step is writing the contract doc if it doesn't exist yet

---

## Recently closed (rolling — prune to supervisor log)

- _none yet_

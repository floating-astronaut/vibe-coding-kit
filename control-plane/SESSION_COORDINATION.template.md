# Session Coordination

> Who is active right now, and on what. The point is collision avoidance: before
> you claim a lane or touch a surface, check here that no other agent is already
> on it. Update when a session starts, switches lanes, or ends.
>
> Copy this template to `control-plane/SESSION_COORDINATION.md` in your repo.

## Active sessions

| Agent | Started | Lane | Surface (files/dirs) | Status |
|-------|---------|------|----------------------|--------|
| _none_ | | | | |

## Rules

- **Claim before you touch.** Add your row before editing a surface another
  session might also touch.
- **One surface, one session.** If a surface is already listed, coordinate or
  pick a different lane — don't edit it concurrently.
- **Clear your row on exit.** A stale "active" row blocks others. Remove it (or
  mark `ended`) when you stop.
- **This is presence, not history.** Closed-lane evidence goes to
  `ENGINEERING_SUPERVISOR.md`, not here.

## Recent handoffs

> When you hand a lane to another agent, note it here so they have context.

- _none yet_

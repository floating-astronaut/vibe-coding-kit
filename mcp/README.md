# MCP Roster

Copy `mcp.json.template` to your agent's MCP config location, then replace placeholders locally.

## Recommended Order

1. Filesystem - lets the agent read and edit your project.
2. GitHub - issues, PRs, repo inspection.
3. Postgres - schema inspection for apps with a database.
4. Stripe - payments and billing. Use test keys first.
5. Shopify - ecommerce stores and themes.
6. Brave Search - web research.

## Key Safety

Use test keys when possible. For production keys, tell your agent to ask before creating charges, sending emails, deploying, or changing live data.

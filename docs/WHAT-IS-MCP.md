# What Is MCP?

MCP stands for Model Context Protocol.

Plain English: MCP lets your AI coding agent use tools. Instead of only reading your prompt, the agent can connect to approved services like GitHub, Stripe, Shopify, Postgres, Google Drive, or your own internal API.

A normal AI chat can say, "you should create a GitHub issue." An MCP-enabled agent can actually create the issue if you have connected the GitHub tool.

## Why It Matters

AI coding agents become much more useful when they can:

- read your repo,
- run tests,
- search docs,
- inspect a database schema,
- create a Stripe test checkout,
- open a GitHub PR,
- or pull product data from Shopify.

## What This Kit Does

This kit gives you a safe MCP roster with placeholders. You choose which services to connect. Your API keys stay local.

## Safety Rule

Only connect tools you understand. If you connect a tool that can spend money, send emails, change production data, or deploy code, tell your agent to ask before using destructive actions.

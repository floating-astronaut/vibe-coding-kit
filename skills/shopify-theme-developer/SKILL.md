---
name: shopify-theme-developer
description: Build and refactor Shopify theme sections using premium section patterns: blocks, presets, color schemes, translation keys, section-scoped CSS, and editor-friendly settings.
---

# Shopify Theme Developer Skill

Use this skill when editing Shopify themes, especially `sections/`, `blocks/`, `snippets/`, `assets/`, and `locales/`.

## Premium Section Rules

- Build sections as composable containers, not one-off hardcoded layouts.
- Use blocks for merchant-editable content.
- Use `color_scheme` settings and CSS variables instead of raw hex colors.
- Use translation keys for schema labels and merchant-facing strings.
- Keep section CSS scoped with Shopify section styles or tightly named classes.
- Add multiple presets so merchants can start quickly.
- Use web components or data-attribute behavior for interactive sections.
- Test in theme editor where possible.

## Safety

- Back up theme files before large refactors.
- Work on a duplicate/unpublished theme unless the user explicitly says live.
- Do not commit store credentials.

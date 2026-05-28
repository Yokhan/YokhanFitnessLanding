# Tool Registry

> Searchable index of reusable utilities across this project.
> **Check HERE before writing new code.** See `.claude/library/technical/atomic-reuse.md`.
>
> Maintained by: agents (manual), `scripts/scan-project.sh` (initial), `scripts/audit-reuse.sh` (ongoing).

## Template-Level (available in ALL projects)

| Tool | Path | Purpose |
|------|------|---------|
| check-drift | scripts/check-drift.sh | Template health check (9 checks) |
| check-banlist | scripts/check-banlist.sh | AI-slop word scanner for content |
| session-metrics | scripts/session-metrics.sh | Session stats collector (daily log) |
| sync-template | scripts/sync-template.sh | Template sync with hash verification |
| bootstrap-mcp | scripts/bootstrap-mcp.sh | MCP server auto-setup |
| audit-reuse | scripts/audit-reuse.sh | Duplicate detector, extraction candidates |
| scan-project | scripts/scan-project.sh | Initial project scan, registry population |
| test-hooks | scripts/test-hooks.sh | Hook syntax validation |
| brain-search | scripts/brain-search.sh | Search brain/ knowledge base |

## Project-Level (auto-populated by scan-project.sh, updated by agents)

| Tool | Path | Purpose | Used by |
|------|------|---------|---------|
| multi-page landing | index.html, men.html, women.html, method.html, start.html | Static program funnel pages | public website |
| design system notes | docs/DESIGN_SYSTEM.md | Token/component/content rules for this landing | agents |

## Helpers & Utilities (src/shared/ or lib/)

| Function | Path | Signature | Used by |
|----------|------|-----------|---------|
| _Run `bash scripts/audit-reuse.sh` to detect_ | | | |

## Candidates for Extraction (auto-detected by audit-reuse.sh)

| Function | Found in | Count | Recommendation |
|----------|----------|-------|----------------|
| _Run `bash scripts/audit-reuse.sh` to detect_ | | | |

## Design Tokens & Components

| Component | ID/Path | Variants | Used by |
|-----------|---------|----------|---------|
| token system | css/tokens.css | typography, color, surfaces, spacing, radius, motion | all CSS |
| base primitives | css/base.css | container, section, heading, button, surface-card | index.html |
| header shell | css/header-system.css | fixed shell, logo, desktop triggers, mobile toggle, solid/open/closing states | all pages |
| header dropdown | css/nav-dropdown-system.css | Oura-like top dropdown panel, cards, quick links, mobile submenu | all pages |
| header controller | js/nav-menu.js | token-driven hover/click/focus/Escape/outside close behavior | all pages |
| hero frame shell | css/hero-shell-system.css | shared hero frame geometry after page-level hero styles | all pages |
| hero system | css/hero.css | hero content, preview item, metric tile | index.html |
| page component overrides | css/page-components.css | Oura-like home hero, internal hero surfaces, media/card unification, responsive page fixes | all pages |
| program cards | css/programs.css | default, featured, men/women section themes | index.html |
| sales components | css/sales.css | route cards, specs, friction, FAQ | all pages |
| CTA/footer | css/cta.css | offer strip, footer links | all pages |

---

_Last scan: manual update 2026-05-25_

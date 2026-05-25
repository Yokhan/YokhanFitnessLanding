# YokhanFitness Landing Design System

## Reference Synthesis

Oura-style reference for this pass:
- calm health-tech tone instead of loud sport promo;
- product promise first, then measurable next action;
- warm light health-product surfaces, graphite text, precise action color;
- modular cards for goals, metrics, steps, and decision points.

Local Yokhan constraints:
- static HTML + CSS only;
- Russian direct "ты" voice;
- Telegram bot is the current receiver;
- no stock-looking photo assets in repo yet, so the first pass uses a structured product surface instead of fake imagery.

## Tokens

Source of truth: `css/tokens.css`.

Token groups:
- typography: `--font-display`, `--font-body`, `--text-*`, `--line-*`;
- color primitives: graphite, ivory, moss, mineral, clay, rose;
- semantic surfaces: `--surface-page`, `--surface-panel`, `--surface-soft`, `--surface-accent`;
- semantic text and accents: `--text-primary`, `--text-secondary`, `--text-muted`, `--accent-*`;
- shape and layout: `--radius-*`, `--space-*`, `--layout-max`, `--nav-height`;
- interaction: `--focus-ring`, `--motion-fast`.

Rules:
- hardcoded color values live only in `tokens.css`;
- section and component files consume semantic tokens;
- card radius is capped at `--radius-sm` for production cards;
- letter spacing is `0`, including display headings.

## Components

CSS component files:
- `css/nav.css` — sticky navigation and active state;
- `css/hero.css` — hero layout, program preview, metric tiles;
- `css/programs.css` — program cards, section grids, choice steps, health note;
- `css/cta.css` — final CTA, offer strip, footer;
- `css/base.css` — reset, page layout, headings, buttons, surface card.

Core components and states:
- Button: default, hover, active, focus, disabled via `aria-disabled`.
- Nav link: default, hover, active, focus.
- Program card: default and featured variants.
- Program preview item: default, hover, focus.
- Step card: default state.
- Health note: informational boundary for medical red flags.

## Content Model

Current page structure:
1. Hero: "Подготовь тело к новому образу" and Telegram bot selection.
2. Men: seven programs from `YokhanGymBot/data/training_programs.json`.
3. Women: five programs from the same bot catalog.
4. Choice: bot -> personal review -> training corrections.
5. Start: final CTA, pricing, channel link, direct contact.

Claims are intentionally bounded:
- no promise to cure medical conditions;
- no guaranteed fat loss timing;
- no depression/prostate claims until we add source-backed proof blocks and medical wording review.

## Missing Assets

For the next visual-quality pass, add:
- 3-6 real photos or short vertical clips of Igor/training setups;
- before/after or testimonial assets with permission;
- exact proof blocks for each priority program;
- final program packaging: duration, included support, expected client inputs, contraindications.

## Related Working Tables

- `docs/DESIGN_TOKENS_TABLE.md` - full token table by section.
- `docs/CONTENT_ASSET_PLAN.md` - content and asset needs by funnel section.
- `docs/OURA_DESIGN_SYSTEM_STUDY.md` - Oura design-system and sales-architecture study.

## Applied Oura Pattern

Current landing now applies the Oura PDP sequence:
- hero as offer/product selector;
- early men/women program choice;
- mechanism section: inputs -> start -> correction;
- friction removal section;
- package/spec table;
- FAQ and final CTA;
- safety boundary before conversion.

Still missing for a true Oura-level pass:
- real hero media;
- program-specific proof;
- bot/process screenshots;
- final package names and support details.

## Multi-Page Architecture

Applied after the Oura PDP review:
- `index.html` — overview and route chooser.
- `men.html` — male program catalog and male-specific stakes.
- `women.html` — female program catalog and female-specific stakes.
- `method.html` — method, friction removal, package specs, safety boundaries.
- `start.html` — bot/channel/direct-contact start routes, pricing, FAQ.

Navigation uses real pages instead of one-page anchors. Current page state is marked with `aria-current="page"` and styled in `css/nav.css`.
- docs/PHOTO_SHOT_LIST.md - photo tasks and capture checklist for the next visual pass.

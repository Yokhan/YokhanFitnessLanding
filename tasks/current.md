# Current Task — Session Handoff

---
status: IN_PROGRESS
current_task: "Rebrand yokhanfitness.ru public layer to BUFF IT"
blockers:
  - "Real Igor/training/product photos are still missing, so current visuals use external reference imagery."
  - "Bot username and existing subdomains still contain old names at the URL level; visible public copy is rebranded."
  - "Program-detail proof, cases, and screenshots are not prepared yet."
next_steps:
  - "Replace external reference imagery with owned BUFF IT photos/screenshots."
  - "Add source-param map: visible page -> CTA -> Telegram start param -> lead segment."
  - "Build detail pages for priority offers: new image/body, top glutes, lose weight without rollback, male strength/back routes."
last_updated: 2026-05-25
---

# Current Task

## Goal

Make the public site feel like a client-facing BUFF IT wellness brand, not an internal project map.

## Current Status

- Public UI copy is now centered on the client's world: body, form, energy, clothes, back, safety, food, rhythm, and first step.
- Visible brand was moved from YokhanFitness to BUFF IT and product families: BUFF IT FITNESS, BUFF IT HEALTH, BUFF IT APP, BUFF IT CALLS, BUFF IT FOOD, BUFF IT GUIDE.
- Internal terms were removed from visible site copy: source tracking, money-engine, client layer, Personal as a product label, infrastructure.
- Header/hero/cards were rebuilt closer to the Oura pattern: promo bar, large product hero, clean centered nav, product cards, scenario cards, and benefit-led sections.
- The site still uses the old technical URLs where the actual live destinations exist.

## Immediate Next Step

Run deploy-quality visual review after replacing borrowed/reference imagery with owned assets.
## Plan -- 2026-05-26 Program Site Build

### Goal
Turn the BUFF IT public site into a program-led funnel using the confirmed bot catalog, with older YokhanFitness programs used as support and lead-magnet layers.

### Complexity Estimate
- Size: M
- Files to create: 0
- Files to modify: 5-8
- Estimated lines: 250-450 changed
- Risk: MEDIUM because shared navigation and program pages affect all visible entry routes, but the site is static and easy to roll back.

### File Architecture
- `programs.html` -- main goal/program catalog with confirmed bot programs and support tracks.
- `men.html` -- male program route: entry, pull-ups, muscle-up, front lever, athlete body, back, maintenance.
- `women.html` -- female program route: entry, pull-ups, weight loss, glutes, flexible body.
- `training.html` -- BUFF IT FITNESS overview tying programs to coaching/self-training formats.
- `css/programs.css` -- reusable program catalog, detail card, metadata, and route components.
- `*.html` nav snippets -- mechanical cleanup of dropdown captions so labels help recognition.

### Implementation Order
1. Expand program page content first, because it is the source route for men/women/navigation.
2. Expand men/women pages with the confirmed bot catalog and clear CTAs.
3. Update training overview to point into the new program structure.
4. Add CSS components using existing tokens.
5. Mechanically update repeated nav captions across pages.
6. Verify layout and interaction with local browser checks.

### Boundaries
- Do not clean template-new files in this pass.
- Do not rename visible BUFF IT logo outside the existing brand-logo pattern.
- Do not invent medical guarantees or claim full detailed plans where only shells were found.
- Do not change bot/app functionality.

### Risks & Mitigations
- Risk: user-facing text drifts into internal architecture. Mitigation: every program card starts from client outcome, then mechanism, then route.
- Risk: nav changes affect all pages. Mitigation: mechanical replacement only, then check a primary and secondary page.
- Risk: pages become visually dense. Mitigation: use cards, metadata rows, and route sections with existing spacing tokens.

### Plan B
If the full multi-page pass gets too large, finish `programs.html` and shared CSS first, then leave `men.html` / `women.html` as links to the main catalog with a short handoff list.

### Test Scenarios
- Desktop: `programs.html`, `men.html`, `women.html`, `training.html` render with fixed shared header and no text overlap.
- Mobile: nav menu and program cards fit without horizontal scroll.
- Interaction: dropdown opens under the trigger, Escape closes it, CTA buttons point to valid Telegram/start routes.
- Content: confirmed bot programs are present; support programs are labeled as starter/support tracks, not falsely sold as full paid programs.
## Update -- 2026-05-27 Program Site Pass

### Done
- Expanded `programs.html` into the main BUFF IT program catalog using the bot as the source of truth.
- Expanded `men.html` with all seven confirmed male bot programs.
- Expanded `women.html` with all five confirmed female bot programs.
- Expanded `training.html` so BUFF IT FITNESS explains goal-first routing before format choice.
- Added reusable program catalog components in `css/programs.css` using existing tokens.
- Replaced weak dropdown captions across visible HTML pages with descriptive labels.

### Verified
- Local refs for the four changed program pages are present.
- Weak nav labels (`Сайт`, `Лендинг`, `Онлайн-сервис`, etc.) are gone.
- Browser check via temporary local server: `programs.html`, `men.html`, `women.html`, `training.html` render; dropdown opens; no horizontal overflow at checked desktop/narrow widths.
- Console only showed a favicon 404, not CSS/JS/font failures.

### Needs User Content
- Detailed structure for priority paid programs: `Подготовь тело к новому образу`, `Топ ягодицы`, `Похудеть навсегда`, `Тело атлета`.
- Package format and price logic: self-training vs trainer-led, duration, check-ins, guarantees/limitations.
- Real photos or image prompts for men/women/program sections.
- Final primary CTA per route: bot, personal Telegram, or call.
## Update -- 2026-05-27 Product Architecture Pass

### Done
- Reframed BUFF IT as goal-first 12-week routes, not "programs" or "online coaching" as the primary customer-facing idea.
- Added launch pricing to `programs.html` and `training.html`:
  - 2 sessions + homework: 26 000 RUB/month on launch, then 32 000 RUB/month.
  - 3 sessions/week: 34 000 RUB/month on launch, then 42 000 RUB/month.
- Added free launch diagnostics: free for the first 2 months, later paid.
- Added current included services: personal Telegram chat, smartcart, P2P protected calls, beginner training guide, first-aid/home kit guide.
- Added format framing: home/gym/outdoor, with home positioned as a major advantage for time, money, comfort, and introverts, while gym remains a normal option.
- Tightened motivation copy around JTBD: image, control, status, comfort, safety, rhythm.

### Verified
- HTTP checks returned 200 for `index.html`, `programs.html`, `training.html`, `men.html`, `women.html`.
- Local refs are present for those pages.
- Encoding markers are clean.
- Chrome DevTools MCP transport closed during this pass, so visual browser inspection was not completed after the latest copy/pricing changes.

### Next
- Visual QA in browser when DevTools transport is available again.
- Decide whether prices should be shown on every route page or only on `programs.html` / `training.html`.
- Add exact diagnostics questionnaire and package boundaries once confirmed.
## Update -- 2026-05-27 Program Detail Page System

### Done
- Added a system-level program catalog source: `data/program-catalog.json` with 11 routes.
- Added shared detail-page styles: `css/program-detail.css`.
- Created 11 goal detail pages:
  - `program-new-image.html`
  - `program-weight-loss.html`
  - `program-glutes.html`
  - `program-athlete-body.html`
  - `program-entry-fitness.html`
  - `program-healthy-back.html`
  - `program-pull-ups.html`
  - `program-flexible-body.html`
  - `program-maintain-shape.html`
  - `program-power-exit.html`
  - `program-front-hang.html`
- Updated `programs.html`, `men.html`, `women.html`, and `training.html` so route cards/list items link into detail pages.
- Each detail page now has: JTBD motivation, outcomes, 12-week flow, home/gym/outdoor format, pricing, free launch diagnostics, included services, related programs, and Telegram start param.

### Verified
- Local HTML refs check: OK.
- Required program markers check: title, Telegram start param, prices, diagnostics: OK.
- HTTP 200 via temporary local server for: index, programs, training, men, women, and all 11 program detail pages.
- All temporary scripts/server files removed; local server stopped.

### Known Gap
- Chrome DevTools MCP transport was still closed, so final visual screenshot QA was not possible in this pass.
## Update -- 2026-05-27 Canonical Header System

### Done
- Replaced page-local header/nav copies with one canonical BUFF IT header markup across all 31 HTML pages.
- Added `css/header-system.css` as the final loaded header contract after legacy nav layers.
- Removed page-specific active header state from the HTML nav markup so secondary pages no longer drift from the home header.
- Kept the Oura-like direction: fixed transparent shell, centered pill navigation, compact dropdowns, and one consistent logo treatment.

### Verified
- Nav hash check: 1 unique `<nav>` variant across 31 HTML pages.
- Header stylesheet link check: `css/header-system.css` is present on every HTML page.
- Local refs check: 31 HTML pages, 0 missing local links.
- HTTP check via temporary in-process Node server: 31 HTML pages returned 200.
- CSS line counts stayed under the 375-line project limit for touched/new shared CSS files.

### Known Gap
- Chrome DevTools MCP still returns `Transport closed`, so final visual screenshot/hover QA could not be completed through MCP in this pass.
## Update -- 2026-05-27 Premium Header Dropdown

### Done
- Polished the canonical BUFF IT header dropdown in `css/header-system.css` without changing page-local nav markup.
- Made the dropdown closer to the Oura-like premium direction: opaque warm dark surface, soft internal light, featured first route, compact card grid, useful labels/descriptions, and no movement/jump animation.
- Tightened mobile header behavior: top nav links no longer squeeze into each other; dropdown uses a compact single-column panel.
- Captured visual QA screenshots through headless Chrome/CDP:
  - `test-results/header-dropdown-desktop.png`
  - `test-results/header-dropdown-mobile.png`

### Verified
- Nav hash check: 1 unique `<nav>` variant across 31 HTML pages.
- Local refs check: 31 HTML pages, 0 missing local links.
- HTTP check via temporary in-process Node server: 31 HTML pages returned 200.
- `css/header-system.css` remains under the 375-line limit.

### Next Content Work
- Fill program detail pages with stronger proof, exact diagnostics flow, objections, and per-route image briefs.
- Add a CTA/source-param map: page -> button -> Telegram start param -> lead segment.
- Replace borrowed/reference images with owned BUFF IT photos/screenshots.
## Update -- 2026-05-27 Oura Header Behavior Rework

### Done
- Re-inspected the live Oura Ring 4 header behavior with headless Chrome/CDP instead of relying on memory.
- Reworked BUFF IT header toward the actual Oura behavior:
  - desktop top state is transparent over hero, not a dark pill shell;
  - desktop hover opens a full-width warm panel from the top with rounded bottom corners;
  - background content blurs behind the open menu;
  - active desktop item uses underline and dark header text inside the open panel;
  - mobile no longer uses a horizontal nav strip; it uses logo + hamburger and a compact menu panel.
- Split responsibilities cleanly:
  - `css/header-system.css` controls header shell and mobile toggle.
  - `css/nav-dropdown-system.css` controls the Oura-like dropdown panel and menu layout.
  - `js/nav-menu.js` controls desktop hover, mobile menu, Escape/outside close, and body open-state classes.
- Added motion tokens in `css/tokens.css` for the controlled header transition.

### Visual QA
- Oura reference screenshots saved under `test-results/oura-reference/`.
- BUFF IT verification screenshots saved under `test-results/header-oura-rework/`:
  - `buffit-desktop-top.png`
  - `buffit-desktop-menu.png`
  - `buffit-desktop-scrolled-menu.png`
  - `buffit-mobile-top.png`
  - `buffit-mobile-menu.png`
  - `buffit-mobile-submenu.png`

### Verified
- `node --check js/nav-menu.js`: OK.
- Nav hash check: 1 unique `<nav>` variant across 31 HTML pages.
- Mobile toggle exists on every HTML page.
- Local refs check: 31 HTML pages, 0 missing links.
- HTTP check: 31 HTML pages returned 200.
- Mobile overflow check: `overflowX = 0`.
- Touched CSS files remain below the 375-line limit.
## Plan -- 2026-05-27 Dropdown Fit And Motion

### Goal
Make the BUFF IT Oura-like header dropdown fit the real menu content cleanly and open with a smoother premium motion.

### Complexity Estimate
- Size: M
- Files to create: 0
- Files to modify: 2
- Estimated lines: 20-45 changed
- Risk: MEDIUM because this is a shared header component used by all 31 pages.

### File Architecture
- `css/tokens.css` -- shared dropdown height/card/motion tokens.
- `css/nav-dropdown-system.css` -- final desktop/mobile dropdown layout and animation contract.

### Implementation Order
1. Tune tokens first so size/motion remain system-level.
2. Compact the dropdown grid/cards/list items in the final dropdown CSS layer.
3. Add a smoother open reveal with reduced-motion fallback.
4. Verify JS syntax, nav consistency, local refs, HTTP, mobile overflow, and screenshots.

### Boundaries
- Do not change canonical nav HTML across pages.
- Do not change product copy/routes in this pass.
- Do not revive legacy hover-only dropdown behavior.

### Risks & Mitigations
- Legacy CSS may override the final layer -> verify computed screenshots and nav open state.
- Content may fit one group but clip another -> screenshot/check Programs and Online menus.
- Animation may feel heavy -> keep transform/opacity/clip-path only and respect reduced motion.

### Plan B
If the full-width panel still feels too tall or busy, keep Oura top-panel behavior but switch desktop content to a two-row compact grid with list descriptions hidden for secondary items.

### Test Scenarios
- Desktop: `Online trainings` menu opens fully with no clipped lower items.
- Desktop: `Training programs` menu also fits despite more items.
- Mobile: hamburger menu and submenu fit without horizontal overflow.
- Behavior: Escape/outside close still works; open state uses JS `is-open`, not legacy hover.

## Update -- 2026-05-27 Dropdown Fit And Motion

### Done
- Tuned shared dropdown tokens in `css/tokens.css`: panel height, feature-card minimum, compact list row minimum, and smoother nav motion curve.
- Reworked `css/nav-dropdown-system.css` so the full-width Oura-like panel keeps the first two routes as feature cards and fits the remaining route list without clipping.
- Added a clip-path + translate reveal using the shared nav motion token and preserved reduced-motion behavior.

### Verified
- `node --check js/nav-menu.js`: OK.
- Nav hash check: 1 unique `<nav>` variant across 31 HTML pages.
- Local refs check: 31 HTML pages, 0 missing links.
- HTTP check: 31 HTML pages returned 200.
- Browser geometry screenshots saved under `test-results/header-fit-motion/`: desktop programs, desktop online, and mobile online all have `clippedCount=0`, `overflowX=0`, and matching `scrollHeight/clientHeight`.
- Touched CSS files remain below the 375-line limit.

## Plan -- 2026-05-27 Dropdown Hierarchy Repair

### Goal
Restore the BUFF IT dropdown information hierarchy inside the current Oura-like top-panel design.

### Complexity Estimate
- Size: M
- Files to create: 0
- Files to modify: 1
- Estimated lines: 25-45 changed
- Risk: MEDIUM because this affects the shared nav on all 31 pages.

### File Architecture
- `css/nav-dropdown-system.css` -- final desktop/mobile dropdown hierarchy and card roles.

### Implementation Order
1. Make only the first link a dominant section entry.
2. Convert all other links into equal secondary route cards in a two-column area.
3. Update mobile overrides so desktop hierarchy rules do not leak into mobile.
4. Re-run nav, link, HTTP, overflow, and screenshot geometry checks.

### Boundaries
- Do not rewrite nav HTML or product copy.
- Do not change header shell behavior.
- Keep the Oura-like full-width panel and current motion curve.

### Test Scenarios
- Desktop: one dominant card per dropdown, not two.
- Desktop: `Training programs` with 6 links fits with no clipping.
- Desktop: `Online trainings` with 5 links fits with no clipping.
- Mobile: submenu cards stack normally with no horizontal overflow.

## Update -- 2026-05-27 Dropdown Hierarchy Repair

### Done
- Repaired the BUFF IT dropdown hierarchy in `css/nav-dropdown-system.css`: only the first item is now the dominant section lead.
- Converted all remaining items into equal secondary route cards in a two-column desktop area, preserving the current Oura-like full-width panel.
- Reset the desktop lead-card rules on mobile so mobile submenus stack evenly.

### Verified
- `node --check js/nav-menu.js`: OK.
- CSS line counts: `tokens.css`, `nav-dropdown-system.css`, and `header-system.css` remain under 375 lines.
- Nav hash check: 1 unique `<nav>` variant across 31 HTML pages.
- Local refs check: 31 HTML pages, 0 missing links.
- HTTP check: 31 HTML pages returned 200.
- Browser geometry screenshots saved under `test-results/header-hierarchy/`:
  - desktop programs: `dominantCount=1`, `clippedCount=0`, `overflowX=0`;
  - desktop online: `dominantCount=1`, `clippedCount=0`, `overflowX=0`;
  - mobile online: even stacked menu, `clippedCount=0`, `overflowX=0`.

### Final Check Addendum
- Tightened mobile specificity so secondary descriptions do not leak into the mobile menu.
- Final browser geometry: desktop programs and desktop online both report `dominantCount=1`, `clippedCount=0`, `overflowX=0`; mobile online reports even stacked cards with `clippedCount=0`, `overflowX=0`, and matching `scrollHeight/clientHeight`.

## Plan -- 2026-05-27 Product Dropdown Cards

### Goal
Turn the BUFF IT header dropdowns into product-aware card menus with direct inner links, stable panel switching, and an Oura-like rounded scrolled header.

### Complexity Estimate
- Size: M
- Files to create: 0
- Files to modify: 4 categories
- Estimated lines: 120-220 changed
- Risk: MEDIUM because the canonical header is shared by all 31 HTML pages.

### File Architecture
- `*.html` -- mechanically replace the canonical nav block with valid card-container dropdown markup across all pages.
- `css/nav-dropdown-system.css` -- dropdown shell, cards, quick links, mobile stack, stable panel.
- `css/header-system.css` -- rounded solid header state on scroll.
- `js/nav-menu.js` -- keep desktop panel open while moving across nav groups; close on leaving the whole nav/outside/Escape.

### Implementation Order
1. Build one canonical nav block with product cards and nested quick links.
2. Replace all page nav blocks from that one source and verify one nav hash.
3. Rework dropdown CSS for card containers, chips, shared panel surface, and mobile reset.
4. Update hover controller so group switching changes content without closing the panel.
5. Add rounded scrolled header styling.
6. Verify syntax, nav hash, local refs, HTTP, desktop/mobile screenshots, and panel switch geometry.

### Boundaries
- Do not change page body content or offer/pricing copy.
- Do not rebrand or rename routes.
- Keep existing destination pages and Telegram links.
- Keep CSS files below 375 lines.

### Plan B
If the card+quick-link menu becomes too dense, keep the same valid HTML structure but hide descriptions in secondary cards on desktop and leave only title + quick links.

### Test Scenarios
- Programs dropdown exposes direct links to women's and men's concrete program pages.
- Other dropdowns use the same lead-card + utility cards logic.
- Moving from one desktop dropdown trigger to another leaves the panel shell open, not flickering.
- Scrolled desktop header has a rounded capsule surface.
- Mobile menu remains stacked, no horizontal overflow.

## Update -- 2026-05-27 Product Dropdown Cards

### Done
- Rebuilt the shared BUFF IT header dropdowns as product-aware card menus across all 31 HTML pages.
- Programs dropdown now keeps one useful diagnostic lead card and direct links into women, men, and soft-start program pages.
- Online trainings, useful materials, and approach dropdowns now follow the same lead-card plus route-card logic.
- Desktop dropdown panel now uses one shared shell, so switching between menu groups keeps the panel open instead of blinking.
- Fixed scrolled header behavior: `--nav-solid-offset: 7.5rem` is now converted to pixels in `js/nav-state.js`, so the rounded Oura-like capsule state appears at the intended scroll point.

### Verified
- `node --check js/nav-menu.js` and `node --check js/nav-state.js`: OK.
- CSS/JS size gate: `tokens.css` 300, `nav-dropdown-system.css` 311, `header-system.css` 333, `nav-menu.js` 168, `nav-state.js` 38 lines.
- Shared nav hash: 31 HTML pages, 1 unique `<nav>` block.
- Local refs: 31 HTML pages, 0 missing local refs.
- HTML nav structure: 0 nested anchors, 0 `????` encoding artifacts.
- HTTP smoke: 31 HTML pages returned 200 from a local static server.
- Browser geometry saved to `test-results/header-product-dropdown/checks-final.json`:
  - all 4 desktop dropdown groups: `clipped=0`, `overflowX=0`;
  - switching Programs -> Online: active panel remains open, `panel=1`, `activeIndex=1`;
  - scrolled desktop header: `solid=true`, `radius=999px`, `panel=0`;
  - mobile Programs menu: 4 cards, 15 links, `clipped=0`, `overflowX=0`.

### Evidence
- Screenshots: `test-results/header-product-dropdown/desktop-programs.png`, `desktop-online.png`, `desktop-scrolled.png`, `mobile-programs.png`.
## Plan -- 2026-05-28 Dropdown Motion Polish

### Goal
Polish the BUFF IT Oura-like dropdown motion: square top edge at viewport, larger shared radius scale, vertical top-down opening, and no blink when moving hover between header groups.

### Scope
- `css/tokens.css` -- increase non-pill radius scale by 1.5x and add/adjust nav motion tokens.
- `css/nav-dropdown-system.css` -- use nav panel radius token, force square top corners, animate shell/content vertically, and handle switching state.
- `js/nav-menu.js` -- add short `is-nav-switching` body state when changing active desktop group.

### Verify
- CSS/JS syntax and file size gate.
- Browser screenshots/geometry: desktop open, desktop switch, desktop scrolled, mobile open.
- Switch check: shared panel remains visible and active group changes without closing.
## Update -- 2026-05-28 Dropdown Motion Polish

### Done
- Raised the shared non-pill radius scale by 1.5x in `css/tokens.css`: xs/sm/md/lg/hero now feed the existing component system.
- Kept dropdown frame top corners square against the viewport edge and enlarged only the bottom panel radius through `--nav-panel-radius`.
- Replaced the shared dropdown frame reveal with a top-origin `scaleY` animation so it opens vertically from the top edge instead of feeling lateral.
- Added `is-nav-switching` in `js/nav-menu.js` so moving between desktop menu groups keeps the shared shell visible and switches only content with a short opacity transition.

### Verified
- `node --check js/nav-menu.js` and `node --check js/nav-state.js`: OK.
- Size gate: `tokens.css` 303, `nav-dropdown-system.css` 325, `header-system.css` 333, `nav-menu.js` 191, `nav-state.js` 38 lines.
- Shared nav hash: 31 HTML pages, 1 unique `<nav>` block.
- Local refs: 31 HTML pages, 0 missing local refs.
- HTML nav structure: 0 nested anchors, 0 `????` encoding artifacts.
- HTTP smoke: 31 HTML pages returned 200 from a local static server.
- Browser geometry saved to `test-results/header-motion-polish/checks.json`:
  - desktop open/switch/mobile: `clippedCount=0`, `overflowX=0`;
  - switch at 40ms: `bodySwitching=true`, `panelOpacity=1`, `activeIndex=1`;
  - frame top radius: `0px / 0px`; bottom radius: `48px`;
  - scrolled header: `bodySolid=true`, `navBorderRadius≈999px`.

### Evidence
- Screenshots: `test-results/header-motion-polish/desktop-programs-open.png`, `desktop-switch-settled.png`, `desktop-scrolled.png`, `mobile-programs-open.png`.
## Update -- 2026-05-28 Oura Motion Inspection Fix

### What Oura Actually Does
- Oura uses one persistent page-level menu surface: `absolute top-0 left-0 w-full overflow-hidden bg-sandstone-200 shadow-2xl lg:rounded-b-[3rem]`.
- The surface starts at the viewport top, has square top corners and a large rounded bottom edge.
- Switching nav items keeps the surface present; only the inner content changes.
- Header transition timing observed: about `0.5s cubic-bezier(0.4, 0, 0.2, 1)`.

### Done
- Reworked BUFF IT dropdown surface to animate `height` from the top edge instead of using a transform-only reveal.
- Kept the shared surface stable while switching nav groups.
- Removed content fade-to-zero during switch: `body.is-nav-switching` now disables dropdown content transitions and makes the new active content visible immediately.
- Updated motion tokens toward the inspected Oura timing: `--motion-nav: 500ms`, `--motion-nav-ease: cubic-bezier(0.4, 0, 0.2, 1)`.

### Verified
- `node --check js/nav-menu.js` and `node --check js/nav-state.js`: OK.
- Size gate: `tokens.css` 303, `nav-dropdown-system.css` 331, `header-system.css` 333, `nav-menu.js` 191, `nav-state.js` 38 lines.
- Shared nav hash: 31 HTML pages, 1 unique `<nav>` block.
- Local refs: 31 HTML pages, 0 missing local refs.
- HTML nav structure: 0 nested anchors, 0 `????` encoding artifacts.
- HTTP smoke: 31 HTML pages returned 200.
- Real hover CDP check saved to `test-results/header-oura-motion-fix/checks.json`:
  - initial hover: content fades in after surface is open;
  - hover switch at 40ms: `bodySwitching=true`, `panelHeight=448px`, `panelOpacity=1`, `activeOpacity=1`, `activeTransition=none`;
  - all 4 desktop groups: `panelOpacity=1`, `clipped=0`, `overflowX=0`.

### Evidence
- Oura inspection screenshots/data: `test-results/oura-inspection/oura-shop-open.png`, `oura-switch-open.png`, `hover-analysis.json`.
- BUFF IT screenshots/data: `test-results/header-oura-motion-fix/hover-programs-settled.png`, `hover-switch-settled.png`, `checks.json`.
## Update -- 2026-05-28 Dropdown Animation Fine Polish

### Done
- Slowed the shared dropdown surface motion: `--motion-nav` is now `760ms` with Oura-like `cubic-bezier(0.4, 0, 0.2, 1)`.
- Slowed content entry to `320ms` with `180ms` delay so the surface opens first and content arrives after, instead of feeling like a fast slide.
- Forced square top corners on the dropdown surface with explicit `border-top-left-radius: 0` and `border-top-right-radius: 0`.
- Added `border-radius: 0` on the desktop `.nav__dropdown` content layer so no hidden content layer can visually round the frame top.
- Removed hover blur from both layers: `nav::after` backdrop blur is `none`, and `body.is-nav-menu-open main` keeps `filter: none`.

### Verified
- `node --check js/nav-menu.js` and `node --check js/nav-state.js`: OK.
- Size gate: `tokens.css` 303, `nav-dropdown-system.css` 333, `header-system.css` 333, `nav-menu.js` 191, `nav-state.js` 38 lines.
- Browser computed styles saved to `test-results/header-animation-polish/checks.json`:
  - panel transition: `height 0.76s cubic-bezier(0.4, 0, 0.2, 1)`;
  - top radii: `0px / 0px`;
  - bottom radius: `48px`;
  - dropdown content radius: `0px`;
  - hover blur: `veilBackdrop=none`, `mainFilter=none`;
  - switch remains stable: `bodySwitching=true`, `dropdownTransition=none`, `panelOpacity=1`.
- Shared nav hash: 31 HTML pages, 1 unique `<nav>` block.
- Local refs: 31 HTML pages, 0 missing local refs.
- HTML nav structure: 0 nested anchors, 0 `????` artifacts.
- HTTP smoke: 31 HTML pages returned 200.

### Evidence
- Screenshots: `test-results/header-animation-polish/hover-settled.png`, `switch-settled.png`.
## Update -- 2026-05-28 Header Scrolled Motion Fix

### Done
- Fixed the scrolled desktop dropdown so it opens from the viewport top edge like the top-of-page state.
- Removed the legacy scrolled `backdrop-filter` context from `.nav__inner` while a menu is open; this stops fixed dropdown panels from being offset by the rounded header capsule.
- Removed the jumpy `translateY` hover from dropdown quicklinks and replaced it with token-based soft light, border, color, and shadow changes.
- Kept dropdown motion driven by shared nav motion tokens: slow surface reveal and fast UI hover response.

### Verified
- Chrome computed check: top and scrolled dropdowns both start at `rectTop=0`, `rectLeft=0`, with square top corners and `48px` bottom radius.
- Chrome computed check: dropdown reveal is progressive through `clip-path 0.92s cubic-bezier(0.4, 0, 0.2, 1)`; scrolled fresh state starts at `100%` clipped, then reveals.
- Chrome hover check: quicklink `transform=none`; hover uses tokenized background/border/box-shadow transitions at `0.24s`.
- Screenshots saved under `test-results/header-scrolled-motion-fix/`.
- `node --check js/nav-menu.js` and `node --check js/nav-state.js`: OK.
- Size gate: `tokens.css` 305, `nav-dropdown-system.css` 354, `header-system.css` 343, `nav-menu.js` 191, `nav-state.js` 38 lines.
- Shared nav hash: 31 HTML pages, 1 unique `<nav>` block.
- Local refs: 31 HTML pages, 0 missing local refs.
- HTTP smoke: 31 HTML pages returned 200.
## Update -- 2026-05-28 Header Closing Shift Fix

### Done
- Fixed dropdown close motion so the panel no longer shifts down/right when hover leaves in scrolled state.
- Added `is-nav-menu-closing` in `js/nav-menu.js`; it holds the viewport-bound header context for the duration of `--motion-nav-surface`.
- Updated `css/header-system.css` so the scrolled capsule blur/backdrop returns only after the dropdown close animation is hidden.

### Verified
- Reproduced pre-fix bug: during close, visible dropdown moved from `rectTop=0, rectLeft=0` to `rectTop=17, rectLeft=33` while `navInnerBackdrop=blur(...)`.
- Post-fix Chrome check: during visible close frames at 150ms, 280ms, and 680ms, `rectTop=0`, `rectLeft=0`, `navInnerBackdrop=none`, `is-nav-menu-closing=true`.
- Post-fix Chrome check: after 1180ms the dropdown is hidden, closing class is removed, and the scrolled header capsule returns.
- Re-hover during close cancels closing state cleanly: `closingAfterReopen=false`, `openAfterReopen=true`, `rectTop=0`, `rectLeft=0`.
- `node --check js/nav-menu.js` and `node --check js/nav-state.js`: OK.
- Size gate: `tokens.css` 305, `nav-dropdown-system.css` 354, `header-system.css` 344, `nav-menu.js` 237, `nav-state.js` 38 lines.
- Shared nav hash: 31 HTML pages, 1 unique `<nav>` block.
- Local refs: 31 HTML pages, 0 missing local refs.
- HTTP smoke: 31 HTML pages returned 200.
## Update -- 2026-05-28 Design System Cleanup

### Done
- Removed legacy header CSS ownership from page loads: `css/nav.css`, `css/nav-menu.css`, and `css/nav-system.css` are no longer linked from any HTML page.
- Deleted the old `css/nav.css` file and removed/deprecated legacy nav files from the active CSS surface.
- Promoted dropdown surfaces, chips, hover light, close delay, switch timing, and reduced-motion duration into `css/tokens.css`.
- Split the shared hero frame from `css/header-system.css` into `css/hero-shell-system.css`, so header and hero geometry have separate owners and file sizes stay under the 375-line limit.
- Removed old transform-hover movement from buttons/cards and removed stale nav/dropdown selectors from shared CSS.
- Updated `_reference/tool-registry.md` and `docs/DESIGN_TOKENS_TABLE.md` to match the current component/token ownership.

### Verified
- `node --check js/nav-menu.js` and `node --check js/nav-state.js`: OK.
- CSS size gate: all CSS files are <= 375 lines.
- Shared nav hash: 31 HTML pages, 1 unique `<nav>` block.
- Local refs: 31 HTML pages, 0 missing links.
- Legacy nav audit: 0 references to deleted nav CSS, old hover dropdown selectors, old `nav__drop-link`, old `nav__group--active`, old floating dropdown transforms, or stale nav tokens.
- HTTP smoke: 31 HTML pages returned 200.
- Browser check via Chrome MCP: desktop dropdown loads no old CSS, opens at viewport top, has square top corners and 48px bottom radius; switching groups keeps panel visible; mobile menu has no horizontal overflow.
- Screenshots saved under `test-results/design-system-cleanup/`.

### Remaining Risk
- The broader site still has previously dirty product/content/page changes and untracked template-new files unrelated to this cleanup.
- Some older page-level hero/card styles still exist by design, but the final hero frame is now isolated in `css/hero-shell-system.css`.
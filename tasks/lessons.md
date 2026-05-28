# Lessons Learned

Self-improvement log for AI agent sessions. After EVERY user correction or discovered mistake, add an entry below using the format shown in the example. Read this file at the start of every session to avoid repeating past mistakes.

When this file exceeds 50 entries, run `/weekly` to promote recurring patterns into permanent rules (`.claude/rules/`) and archive promoted entries to `brain/03-knowledge/lessons-archive.md`.

---

## Entry Format

```
### [YYYY-MM-DD] — [Brief descriptive title]
**Error**: What went wrong (observable symptom)
**Root cause**: Why it happened (the actual underlying issue)
**Rule**: Concrete, actionable prevention rule for the future
**Applies to**: [agent name / skill name / general]
**Category**: [security | architecture | testing | workflow | tooling | general]
```

---

## Entries

### 2026-03-17 — Example: Hallucinated npm package name
**Error**: Recommended `@utils/smart-merge` package which does not exist on npm.
**Root cause**: Generated a plausible-sounding package name from training data without verifying it exists. No verification step was performed before recommending.
**Rule**: Before recommending ANY external package, verify it exists by running `npm view <package>` or checking the official registry. If unable to verify, state confidence as LOW and flag it explicitly.
**Applies to**: researcher, implementer, general
**Category**: tooling

### 2026-05-25 - Product component drift on BUFF IT landing
**Error**: The landing pass reused the home hero image on internal pages and left navigation/page branding only partially componentized.
**Root cause**: Visual polish was applied before finishing the product component model: shared header, product-family labels, image ownership, and page-level asset rules.
**Rule**: For multi-page brand work, finish brand/navigation/media components first. Do not reuse a hero image as a generic page background; if owned imagery is missing, document a specific image brief and use neutral component surfaces.
**Applies to**: Codex / codex-design-workflow
**Category**: workflow

### 2026-05-26 - Dropdown state was open but clipped
**Error**: BUFF IT navigation dropdown state could be active while the menu was visually missing on secondary pages.
**Root cause**: Legacy `.nav__links { overflow-x: auto; }` clipped the absolutely positioned dropdown, and the first fix checked class/aria state before checking computed visibility and clipping.
**Rule**: For interactive UI fixes, verify both behavior state and rendered state: class/aria, computed visibility/opacity/pointer-events, parent overflow, and a screenshot of the open state.
**Applies to**: Codex / codex-design-workflow
**Category**: testing

### 2026-05-26 - Late CSS layer kept headers inconsistent
**Error**: BUFF IT headers still differed after adding a shared nav component.
**Root cause**: `components.css` loaded after `nav-menu.css` and still contained old `.pdp-hero-page .nav__inner` rules, so the home page was silently overriding the shared header.
**Rule**: Before declaring a shared UI component fixed, inspect the full CSS load order and verify final computed styles on at least one primary and one secondary page.
**Applies to**: Codex / codex-design-workflow
**Category**: testing

### 2026-05-26 - Overdesigned nav dropdown without UX review
**Error**: The BUFF IT desktop dropdown became a large light card grid that looked heavy, covered the hero awkwardly, and did not match current navigation UX expectations.
**Root cause**: The component was shaped visually before reviewing whether the information architecture needed a mega-menu or a compact disclosure dropdown.
**Rule**: For navigation UI, decide the interaction pattern first: compact disclosure for small link sets, mega-menu only for broad category browsing. Validate against current UX/accessibility references before visual polishing.
**Applies to**: Codex / codex-domain-design-review / codex-design-workflow
**Category**: workflow

### 2026-05-26 - Dropdown positioned from shell instead of trigger
**Error**: The BUFF IT dropdown opened as a page-level panel instead of dropping under the active menu item, and the hero shell lost the side inset that defines the page rhythm.
**Root cause**: The final system CSS layer set `.nav__group` to `position: static` and overrode `.hero__stage` to `100vw`, so later token work was bypassing the actual component geometry.
**Rule**: For shared UI shells, verify final computed rectangles, not just class names: nav shell x/right, hero shell x/right, trigger x, dropdown x/y, and viewport bounds on desktop and mobile.
**Applies to**: Codex / codex-design-workflow
**Category**: testing

### 2026-05-26 - Header position drift from page flow
**Error**: BUFF IT header and hover states still looked different between pages, and the button glow became a visually noisy multi-stop effect.
**Root cause**: The nav component still participated in page flow and inherited old hover rules, while the interaction layer added a complex spotlight instead of the requested simple premium hover.
**Rule**: For global headers, keep the shell geometry independent from page content (`fixed` or one shared layout contract) and verify computed rectangles across several page types. For premium hover effects, start with one-color soft-light gradients before adding extra color stops.
**Applies to**: Codex / codex-design-workflow
**Category**: testing

### 2026-05-26 - CSS hover overrode controlled dropdown state
**Error**: Navigation dropdown stayed visually open after Escape because older CSS hover/focus selectors reopened it even after JS removed `is-open`.
**Root cause**: The final dropdown layer only defined the open state and did not explicitly override earlier `:hover`/`:focus-within` open rules from previous nav CSS layers.
**Rule**: For controlled disclosure components, make `is-open` the only visible state in the final CSS layer and add an explicit hidden rule for `:not(.is-open)` to neutralize older hover/focus rules.
**Applies to**: Codex / codex-design-workflow
**Category**: testing

### 2026-05-26 - Decorative dropdown captions hurt UX
**Error**: BUFF IT dropdown kept gold caption labels above every item, first repeating the brand and then adding redundant category text.
**Root cause**: Treated visual hierarchy decoration as useful navigation information instead of checking whether it helps the user choose a destination.
**Rule**: In navigation menus, every visible text layer must help recognition or decision. Remove decorative kickers/captions; put the useful meaning in the main link label and keep descriptions only where they clarify the overview item.
**Applies to**: Codex / codex-design-workflow / codex-domain-communication-review
**Category**: workflow

### 2026-05-27 - Header drift from copied page-local nav
**Error**: BUFF IT header kept changing between pages after dropdown/header tweaks, even though the intended direction was an Oura-like shared header system.
**Root cause**: Header fixes were applied through repeated page-local nav markup and overlapping legacy nav CSS layers instead of making one canonical header contract and verifying identical markup across all pages.
**Rule**: For global navigation, create one canonical header markup and one final loaded CSS contract before page polishing. Verify by hashing every `<nav>` block, checking CSS load order, and confirming no page-specific active state exists in shared header markup.
**Applies to**: Codex / codex-design-workflow / codex-domain-design-review
**Category**: testing
### 2026-05-27 - Inspect reference interaction before approximating it
**Error**: BUFF IT header/dropdown was described as Oura-like while its behavior was still an anchored dropdown, with desktop open-state color bugs and a broken mobile nav layout.
**Root cause**: Implemented from memory and static screenshots instead of first recording the reference interaction states: desktop top, desktop hover, scrolled open state, mobile top, and mobile menu.
**Rule**: For reference-driven UI, capture the reference behavior with browser screenshots/geometry before editing. Verify the local implementation against the same states, not only DOM/HTTP checks.
**Applies to**: Codex / codex-design-workflow / codex-domain-design-review
**Category**: testing
### 2026-05-27 - Mega-menu grid rows must fit the densest menu
**Error**: The Oura-like BUFF IT top dropdown looked close visually but clipped lower menu items when a group had 5-6 real links.
**Root cause**: CSS grid auto rows were driven by two tall feature cards, then additional right-column items created extra rows beyond the fixed panel height.
**Rule**: For shared mega-menu/dropdown systems, test the densest menu group first. Set feature-card spans, compact row tokens, and panel height from measured content geometry, not from the prettiest single menu screenshot.
**Applies to**: Codex / codex-design-workflow / codex-domain-design-review
**Category**: testing

### 2026-05-27 - Navigation hierarchy needs one primary lead
**Error**: The BUFF IT dropdown fit the content but made the first two menu items equally dominant, so the user could not read a clear section hierarchy.
**Root cause**: The CSS used `nth-child(-n + 2)` as a layout convenience instead of mapping visual weight to information architecture.
**Rule**: In navigation dropdowns, dominance must follow IA: one section lead/overview, then peer secondary routes. Do not promote multiple items just to fill a grid.
**Applies to**: Codex / codex-design-workflow / codex-domain-design-review
**Category**: workflow

### 2026-05-27 - CSS length tokens need unit-safe JS parsing
**Error**: The BUFF IT scrolled header became rounded almost at the end of the hero instead of at the intended offset.
**Root cause**: `Number.parseFloat("7.5rem")` returned `7.5`, so JS treated a relative CSS token as 7.5px instead of converting rem to pixels.
**Rule**: When JS reads CSS design tokens, parse units explicitly or measure the computed length. Never assume `parseFloat` preserves CSS units.
**Applies to**: Codex / codex-design-workflow
**Category**: bug

### 2026-05-27 - PowerShell Node stdin can corrupt Cyrillic writes
**Error**: A mass HTML nav rewrite temporarily produced `????` where Russian text should have been.
**Root cause**: Cyrillic content was passed through a PowerShell here-string into Node stdin with an unsafe encoding path.
**Rule**: For Cyrillic file writes on Windows, write with explicit UTF-8 without BOM from .NET or another verified UTF-8 path, then check for `????` and BOM before declaring the edit safe.
**Applies to**: Codex / codex-feature-workflow
**Category**: testing
### 2026-05-28 - Scrolled dropdown inherited header backdrop context
**Error**: BUFF IT dropdown opened from the scrolled header capsule instead of the viewport top, shifted back to the capsule while closing, and inner dropdown chips jumped upward on hover.
**Root cause**: A legacy `body.is-nav-solid .nav__inner` backdrop-filter remained active while the menu was open, creating a containing block for fixed dropdown children. Quicklink hover still used `translateY` from an older motion pattern.
**Rule**: For Oura-like page-level dropdowns, verify top, scrolled open, and scrolled closing states separately. In open and closing states, remove backdrop/filter/transform from header ancestors so fixed panels bind to viewport. Premium menu hover should change light, border, color, or shadow only; avoid Y movement inside dense navigation.
**Applies to**: Codex / codex-design-workflow / codex-domain-design-review
**Category**: bug
### 2026-05-28 - Token system cannot compensate for multiple component owners
**Error**: BUFF IT header/dropdown fixes kept accumulating overrides instead of becoming predictable token changes.
**Root cause**: Legacy `nav.css`, `nav-menu.css`, `nav-system.css`, plus nav rules in shared page CSS were still loaded or discoverable, so the final header files had to fight old component contracts.
**Rule**: For design-system fixes, first establish one owner per component and remove/deprecate competing CSS files. Only then promote values into semantic tokens and validate states. A token is not a system if multiple loaded layers interpret it differently.
**Applies to**: Codex / codex-design-workflow / codex-domain-design-review
**Category**: architecture
**Track**: PROCESS
**Severity**: P1
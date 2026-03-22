# YokhanFitnessLanding — Landing Page

Static HTML+CSS landing page for yokhanfitness.ru.

## Status

**IN PROGRESS** — Initial setup. Deploy target: VPS 82.97.243.54.

## Stack

- **Language:** HTML + CSS (static, no framework)
- **Design:** Glassmorphism from YokhanFitnessApp design tokens
- **Fonts:** Unbounded (headings) + Golos Text (body)
- **Deploy:** Static files on Timeweb VPS

## Map

- `index.html` — single-page landing (5 screens)
- `css/` — styles, design tokens
- `fonts/` — Unbounded + Golos Text woff2
- `images/` — noise texture, backgrounds
- `tasks/` — session handoff + lessons

## Design Tokens (from FIT app)

Colors:
- Main background: `#f3ead7` (warm beige)
- Contrast text: `#453427` (dark brown)
- Green accent: `#7bd062`
- Orange accent: `#ff9b37`
- Red: `#ff6868`

Typography:
- Headings: Unbounded, weight 200-700
- Body: Golos Text, weight 400-700
- Negative letter-spacing throughout

Glass effects:
- `backdrop-filter: blur(24px) saturate(150%)`
- Multi-layer shadows with inset highlights
- Noise texture overlay

## Landing Structure (5 screens)

1. Hero — pain point + CTA to TG quiz bot
2. Problem — 4 blocks they recognize
3. Method — "научный минимализм", 3 pillars
4. Proof — 3 anonymized client cases
5. CTA — quiz bot + pricing + guide link

## Content Spec

Ready texts in: `PersonalAssistant/brain/02-projects/personal-strategy/specs/landing-yokhanfitness.md`

## Rules

- Files < 250 lines
- Russian language, "ты" form
- NO AI-sounding text
- Mobile-first responsive
- Dark theme support via CSS variables
- Test on: Chrome, Safari, Firefox
- CTA links to: t.me/YokhanAssistance_bot (quiz)
- Guide link: guide.yokhanfitness.ru

## Build & Deploy

```bash
# Local preview
python -m http.server 8080

# Deploy to VPS
scp -r . user@82.97.243.54:/var/www/yokhanfitness/
```

## Fitness Ecosystem

This project is part of the YokhanFitness ecosystem: App, Docs (knowledge base), Website (guide), and Landing page. See `.claude/rules/project-fitness-ecosystem.md` for full project map, relationships, and cross-project commands.

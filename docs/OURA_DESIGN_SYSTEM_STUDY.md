# Oura Design System Study

Sources checked:
- `https://ouraring.com/store/rings/oura-ring-4`
- `https://ouraring.com/`

## Sales Architecture

| Oura section/pattern | What it does | YokhanFitness adaptation |
|---|---|---|
| Product-first hero with real ring photography | Makes the object desirable before explaining features. | Use real Igor/training media in first viewport, not abstract cards only. |
| Short claim: "Our most personal smart ring ever" | Makes the promise personal, not technical. | Use one personal promise: "Подготовь тело к новому образу" or sharper segment variant. |
| Immediate product chooser | Turns interest into selection behavior early. | Men/women and program cards should appear early and feel selectable. |
| Smart Sensing story | Explains the proprietary mechanism after desire is created. | Add "как Игорь подбирает нагрузку" after program choice: вводные, техника, прогрессия, корректировки. |
| Comfort proof | Removes usage friction for 24/7 wear. | Remove training friction: дома/зал, время, стыд, травмы, режим, связь. |
| Finish/lifestyle variants | Lets user see identity fit. | Programs become identity variants: атлет, сильная спина, ягодицы, похудение, гибкость, подтягивания. |
| Membership feature tabs | Shows ongoing value after purchase. | Add tabs/cards for сопровождение: тренировки, корректировки, чек-ин, питание, восстановление. |
| Feature cards with app screenshots | Makes invisible health data visible. | Use bot/app/training-plan screenshots to make invisible coaching visible. |
| Tech specs and included items | Reduces purchase ambiguity. | Add package specs: duration, sessions, support, equipment, communication, contraindications. |
| Payment/legal footnotes | Handles trust and risk quietly. | Add safety, privacy, payment and medical boundaries without killing conversion. |

## Visual Language

| Layer | Oura observation | Token/system implication |
|---|---|---|
| Palette | Warm neutrals, soft sand, graphite text, muted luxury rather than bright sport colors. | Keep graphite/ivory base, use moss as action accent, add warm/mineral washes sparingly. |
| Photography | Real product in soft light, shallow depth, tactile surfaces. | Need real photo/video assets of training context and Igor. |
| Layout | Huge breathing room, controlled grids, few competing focal points. | Keep max width, large section padding, 1 main story per section. |
| Typography | Clean sans, large calm headings, short paragraphs. | Avoid dense copy in cards; use short outcome-led phrases. |
| Cards | Rounded media cards and feature cards, often square, with clear labels. | Program cards should become more image-backed once assets exist. |
| Motion | Subtle interaction and tabbed exploration. | Add minimal tabs only where they reduce scrolling, not for decoration. |
| CTAs | Purchase action is always close to product choice. | Bot CTA should sit after hero, after each program section, and final section. |

## Component Inventory To Borrow Conceptually

| Component | Oura role | YokhanFitness component |
|---|---|---|
| Header nav with shop/cart | Stable product navigation | Sticky nav with program anchors and start CTA |
| Full-bleed hero media | Desire and quality signal | Hero media/photo plus program selector |
| Product configurator | Variant selection | Program selector and quiz routing |
| Feature claim block | Mechanism explanation | Coaching method block |
| Lifestyle/comfort block | Friction removal | "как это вписывается в жизнь" block |
| Feature tabs | Explore value by need | Support/process tabs |
| Spec table | Clear buying details | Program specs/package details |
| Included list | Expectation setting | What client gets each month |
| Payment options | Purchase confidence | Pricing, payment, first consultation |
| Footnotes | Risk control | Medical and data boundaries |

## What This Changes In Our Next Pass

| Current landing | Needed next pass |
|---|---|
| Structured cards instead of hero media | Replace or support hero panel with real photo/video |
| Program cards sell broadly | Add program-specific proof, image, and offer specs |
| Pricing is one strip | Add package detail and what is included |
| Bot path is described | Add screenshots and route analytics |
| Safety note exists | Add dedicated trust/safety micro-section |
| No FAQ yet | Add objection section after proof/package |

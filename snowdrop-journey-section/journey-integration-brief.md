# The Journey section — integration brief

Build a new section on the Snowdrop site from the three animated SVG dioramas in this folder, matching the approved mockup `snowdrop-isometric-trial-v5.html` (open it in a browser first — the animation and CTA hierarchy are the spec).

## Files
- `journey-scene-1-discovery.svg` — the messy business, 15 MIN timer, "Your first growth fix" card
- `journey-scene-2-audit.svg` — systems mapped, 45 MIN timer, "Your Opportunity Roadmap" card
- `journey-scene-3-live.svg` — business running (van, customer, coin), DAYS TO LIVE timer, "AI agents & workflows" card + floating outcomes

## Placement
New section with `id="journey"`, inserted **between the hero and the offer card**. It is the visual how-it-works; the offer card below keeps all pricing detail and remains unchanged. Section styling: Snow background, standard section padding and container width. Eyebrow (mono, lowercase, per site convention): `the journey`. H2: **"From stuck to running — in three steps."** No other intro copy; the cards speak.

## Critical: inline the SVGs
The SVGs must be **inlined in the JSX** (import as raw strings, render via `dangerouslySetInnerHTML`), NOT loaded via `<img>` — they inherit Poppins and the mono font from the page, and `<img>` would break the fonts. SMIL animations run natively; no JS needed for them. Do not run the SVGs through SVGO/optimisers — they will strip the SMIL `<animate>` elements.

## Card structure (from the mockup)
Three cards in a grid (3-col desktop, 1-col mobile ≤900px), Mist background, radius 22px. Each: diorama on top, then number (mono, grey), stage title, one-line description, CTA pinned to card bottom (flex column, `margin-top:auto` on the CTA). Copy verbatim from the mockup:

1. **01 · Free Discovery Call** — "Fifteen minutes. We find your biggest bottleneck live, and you leave with your first growth fix outlined."
2. **02 · The AI Audit** — "Forty-five minutes. Systems mapped, opportunities priced, your Opportunity Roadmap back in 48 hours."
3. **03 · Built and live** — "Days, not months. Your first agents and workflows running — and the outcomes arriving from outside."

## CTA wiring (one exit per stage, descending weight)
1. Solid Verdant button, Ink text: **"Book Your Free Discovery Call"** → the same discovery-call Calendly link used by the hero CTA.
2. Outline button (2px VerdantDeep border): **"Skip ahead — book the £500 AI Audit"** → the audit Calendly event (`NEXT_PUBLIC_CALENDLY_AUDIT_URL`, same target as the existing skip-ahead link in the offer card).
3. Mono text link: **"Know what you need? Tell us what to build →"** → `mailto:hello@snowdropgrowth.com`.

Exactly one solid button in this section. Do not add pricing beyond the £500 already shown, and no build rate card or retainer language anywhere.

## Tilt interaction
Small client component: on `pointermove` over a card, rotate the diorama wrapper up to ~7°/6° (rotateY/rotateX) with a 0.18s ease-out transition; reset on `pointerleave`. Wrap in a `prefers-reduced-motion: reduce` guard (skip entirely). Cards get `perspective: 900px`. Copy the JS from the mockup's `<script>` block.

## QA
- `npm run build` clean; SMIL animations visibly running in the browser (roadmap pops from the hub, van drives, coin pops, outcomes fade in)
- 1440 / 768 / 390: cards stack cleanly on mobile; SVG text legible at 390 (the SVGs scale as a unit — if stage-3 floats feel small at 390, cap the card's max-width rather than editing the SVG)
- Section order: hero → journey → offer card → experience → …; nav anchor links still correct
- Grep repo: founder surname, "Havas", "Gate One" → nothing; no "SME/SMEs" introduced; protected lines untouched
- Lighthouse quick check: the three inlined SVGs add ~76kb total — acceptable, but confirm no hydration warnings from `dangerouslySetInnerHTML`

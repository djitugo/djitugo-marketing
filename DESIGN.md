# DESIGN.md — Djitugo monochrome redesign

## Aesthetic lane (named reference)

**Vercel-pure-black monochrome × Active-Theory-style scroll choreography × Bureau-Cool oversized display type, applied to a Bali agency surface.** Not editorial-magazine. Not Stripe-cream. Not Klim-specimen. The closest spiritual references: vercel.com, linear.app, bureau-cool.com, resn.co.nz, and rauno.me's archive.

## Color strategy — Drenched monochrome

The surface IS the color. We do not "add black to a light layout"; black is the canvas, white is the figure. We respect the impeccable principle that pure `#000` / `#fff` look harsh: every neutral is tinted toward a barely-warm hue inherited from the rebrand (a whisper of the old orange-pink, kept only as undertone). Chroma stays at 0.003–0.008.

### Tokens (OKLCH, with sRGB fallbacks)

```
--ink-0:   oklch(0.14 0.005 60)    /* page canvas — warm near-black */
--ink-1:   oklch(0.20 0.005 60)    /* surface lift, hovered cards */
--ink-2:   oklch(0.28 0.004 60)    /* borders, dividers */
--ink-3:   oklch(0.42 0.004 65)    /* muted text */
--ink-4:   oklch(0.62 0.003 65)    /* tertiary text, captions */
--ink-5:   oklch(0.82 0.003 70)    /* on-dark secondary */
--paper:   oklch(0.97 0.003 80)    /* inverted sections — warm near-white */
--paper-2: oklch(0.99 0.002 80)    /* full-bleed white reveals */
--focus:   oklch(0.85 0.002 70)    /* focus ring, never a saturated color */
```

The page alternates between **ink-0 canvas** (dominant, ~70% of vertical real estate) and **paper canvas** (inverted, used for one breaking moment, e.g. the portfolio reveal). The contrast is the drama; we never need a third hue.

Section inversion rule: when you cross from `--ink-0` to `--paper`, animate it. A 600ms ease-out-quart background transition triggered by ScrollTrigger, not a hard cut.

## Typography — voice-first pairing

**Brand-voice words:** confident, kinetic, crafted.

**Picks (deliberately off the reflex-reject list — no Inter, no Fraunces, no Plus Jakarta, no Instrument):**

- **Display + UI sans: Bricolage Grotesque** (variable, axis-rich, available via `next/font/google`). Sits between a grotesque and a humanist. Reads expressive at 14rem display, perfectly fine at 1rem body. One family carries the page, with extreme weight + size contrast doing the hierarchy.
- **Numerical + label mono: JetBrains Mono** (used sparingly — section numerals, stats, timestamp metadata only). Justified by Djitugo's AI/automation messaging; it would be costume on a fashion brand, but it earns its place here.

No third family. Single-family pages chosen deliberately are stronger than timid pairs.

### Scale (`clamp()` fluid, modular ratio ≥1.33)

```
display-xl:  clamp(5rem, 14vw, 14rem)        weight 600, tracking -0.04em
display-l:   clamp(3.5rem, 8vw, 7.5rem)      weight 500, tracking -0.035em
heading-1:   clamp(2.25rem, 4vw, 3.75rem)    weight 500, tracking -0.025em
heading-2:   clamp(1.5rem, 2vw, 2rem)        weight 500, tracking -0.015em
body-l:      1.25rem (line-height 1.5)       weight 400
body:        1rem    (line-height 1.6)       weight 400
caption:     0.875rem (line-height 1.4)      weight 500, tracking 0.04em uppercase ONLY for tiny labels
mono-label:  0.75rem (line-height 1.2)       weight 400, tracking 0.06em uppercase
```

Light-on-dark rule applied: body line-height is +0.05 over a comparable light layout.

## Layout

- **Grid:** 12-column with 24px gutter at desktop, 16px at mobile. Max content width 1440px. Most sections break the grid asymmetrically; no centered-stack heroes.
- **Spacing rhythm:** Tailwind spacing scale tuned to a `--unit: 4px` base. Section vertical padding varies on purpose: hero is `min-h-svh`, partners is `py-16`, services is `py-32`, portfolio is full-viewport scroll-pinned.
- **Cards:** ban on identical card grids. The 6 services are NOT 6 cards; they are a vertical stacked list with sticky section markers (see "Services interaction" below). Portfolio uses an alternating split layout, not a uniform grid.

## Motion — choreography, not micro-interactions

Single page-load reveals + scroll-triggered choreography. No hover-bounce micro-animations. Reduced-motion users get instant reveals with opacity only.

**Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-quint) for everything. No spring, no bounce, no elastic.

### Choreographed beats

1. **Page load (0–1200ms).** Wordmark draws in over 400ms; hero display type masks reveal line-by-line on a 80ms stagger; nav fades last. CTA stays static until user scrolls 1px.
2. **Partners marquee.** GSAP-driven horizontal scroll, paused at slow viewport speed, accelerated on user wheel. Logos render in pure `--paper` on the `--ink-0` canvas (silhouette, not full-color logos).
3. **Stats reveal.** Numbers count up from 0 via `gsap.to({val: 0}, {val: target, snap:1, duration: 1.4, ease: 'expo.out'})`, triggered when section center crosses 60% of viewport. JetBrains Mono lockup; the label is a small tracked caps caption underneath.
4. **Services stacked list.** Section is `position: sticky` for the section header (number `01–06` + label). Each service is a full-screen row: the description in display-l on the left, a single decisive monochrome image on the right (or full-bleed behind). Scrolling advances the active service; the number on the left scrubs through 01→06 in sync.
5. **Portfolio reveal — the page-inversion moment.** Background transitions from `--ink-0` to `--paper` over 600ms when this section's start crosses the viewport center. Portfolio items show as alternating large-image / large-type rows. Hovering an item shifts a 4–6% clip-path reveal of a second image.
6. **CTA section.** Display-xl headline ("Ready to grow smarter?"), the underline draws in on enter, two CTAs (Schedule a Call → email/form anchor, WhatsApp → wa.me deeplink). Cursor on the WhatsApp button magnetizes to it within a 24px radius.
7. **Footer.** Static. Reverts to `--ink-0`. The address is rendered large enough to read as a typographic statement, not as a small print.

## Imagery

Hospitality clients require imagery. The redesign treats commercial photography as the second voice on the page.

- All hero / portfolio imagery is rendered monochrome via `filter: grayscale(1) contrast(1.08)` and lazy-loaded.
- Stock allowed for greenfield placeholders, search terms: "boutique resort terrace at dusk Bali", "minimalist hotel breakfast on linen", "scooter at dawn rice terrace". Unsplash URL shape with real photo IDs.
- Alt text written as a sentence, not a tag list.
- Logo lockups in the Partners section render as `--paper` silhouettes; if a logo's brand identity does not survive monochroming, we replace with a clean wordmark in Bricolage.

## Components (lightweight; this is brand, not product)

- `<SectionHeader number label />` — JetBrains Mono number + tracked caps label, top of every section.
- `<DisplayHeadline>` — line-by-line GSAP SplitText reveal; respects `prefers-reduced-motion`.
- `<Marquee speed direction>` — GSAP infinite horizontal track, used for partners.
- `<StickyServiceItem index title body image />` — used by the Services section, six instances.
- `<PortfolioRow side image title disciplines />` — alternates left/right.
- `<MagneticButton>` — used for primary CTA; computes 24px magnetic field.
- `<InvertOnEnter>` — wraps the page-inversion section.

## Accessibility & performance baseline

- AA contrast in both `--ink-0` and `--paper` modes; tested against `--ink-3` and `--ink-4` text.
- All scroll motion behind `(prefers-reduced-motion: no-preference)`. Reduced-motion users see opacity-only reveals.
- LCP target < 2.0s on a mid-tier Android, achieved via `next/font` self-hosting, `next/image` for all photography, and code-splitting GSAP plugins per route.
- Skip-link to main content, focus ring `--focus`, semantic landmarks on every section.

## Bans (project-specific, on top of impeccable global bans)

- No orange-to-pink gradients anywhere. Not even as nostalgia.
- No palm-frond / batik / tropical decoration.
- No animated counter that goes from 0 to N with a "+" suffix and a stat label *unless* it's the integrated GSAP reveal described above (this is the difference between hero-metric template and crafted moment).
- No "We are Djitugo" hero. The current site doesn't do this; the redesign shouldn't reintroduce it.
- No icon-above-card-heading-and-description repeated six times.
- No serif italic display type (this is the saturated editorial reflex; we are explicitly off-lane).
- No em dashes. Use commas, colons, periods, or parens.

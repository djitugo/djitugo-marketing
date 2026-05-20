# PRODUCT.md — Djitugo (djitugomarketing.com redesign)

## What

A redesign of djitugomarketing.com, the English-language marketing site for Djitugo (PT Djitu Solusi Digital), a Bali-based digital marketing agency. The redesign carries the in-progress brand shift from an orange-and-pink palette to a monochrome black-and-white identity. The content stays as it ships today; only the visual and motion language change.

## Register

**Brand.** Design IS the product. This is a marketing surface; a visitor's first impression is what we are making. We are not building application UI.

## Users

1. **Decision makers at Indonesian SMBs and hospitality brands.** Founders, marketing managers, and operators (villas, resorts, clinics, F&B, retail). They land here from Google, IG ads, or a referral; they need to feel that this agency is competent, current, and Bali-rooted before they tap WhatsApp.
2. **International hospitality clients exploring Bali partners.** Boutique resorts and villa operators (BB Resort Nusa Penida, The Mesare Resort, Chandra Bali Villas, Sunhwa Beauty) who consume marketing content in English.
3. **In-house talent and future hires.** The agency is hiring (per LinkedIn). The site is a recruiting surface too: it has to look like a place creative people want to work.

The audience is not technical developers. The site has to read as creative-confident and tech-savvy without becoming a SaaS template.

## Product purpose

Convert an undecided visitor into either (a) a "Schedule a Call" form submission or (b) a WhatsApp tap on +62 813 3732 9381. Secondary: signal that the agency understands AI, automation, and modern marketing without overstating; signal Bali cultural fluency without falling into "tropical agency cliché".

## Brand voice — three concrete words

**Confident, kinetic, crafted.**
- *Confident*: declarative, no hedging copy, no over-explaining. The Vercel changelog stance, not the Wix landing-page stance.
- *Kinetic*: the page itself moves. Hospitality clients picked Djitugo to make their brand feel alive; the site has to demonstrate the same instinct.
- *Crafted*: every spacing decision, every type pairing, every dwell time on a portfolio image looks intentional. A visitor should ask "how was this made?", not "which AI made this?"

Tone in copy: short sentences, periods, low adjective count. Bilingual is fine where the existing site uses Indonesian, but the marketing.com surface is English-primary.

## Anti-references

What this redesign must NOT look like:

- The current djitugomarketing.com (orange/pink gradients on light cards, stock illustrations of laptops, the "01–06 numbered service card" template).
- Generic Indonesian agency template sites (heavy gradient hero, three-icon-three-heading services row, animated counter stats, big bold "WE ARE" hero).
- Editorial-magazine reflex (italic Fraunces drop caps, ruled three-column grid, mono lowercase metadata labels). This is the second-order training reflex for monochrome work, and it has saturated brand surfaces by 2026. We avoid it on purpose.
- SaaS-dashboard cliché (purple-to-blue gradient hero, perfectly aligned 3-column feature grid with rounded-corner icons, hero-metric template).
- "Tropical Bali" cliché (palm fronds, batik patterns, hand-script display font, frangipani imagery). The Bali signal comes from the work shown and one or two crafted typographic moments, not from decoration.

## Strategic principles

1. **Monochrome by commitment, not by deprivation.** Pure black and white is a *committed* color strategy in disguise: the surface IS the color. Off-black canvases, full-bleed monochrome client photography, large white type. Do not soften this into a beige-and-cream blog look.
2. **The work carries the page.** Djitugo's portfolio (resorts, villas, clinics, F&B) is image-rich. Big monochrome commercial-photography stills do the heavy lifting; the services section is the supporting cast, not the hero.
3. **Motion is the rebrand.** The strongest argument for the new identity is how the page itself behaves. Scroll-pinned reveals, type that resolves into place, marquee logos that drag with viewport speed. GSAP ScrollTrigger does the choreography.
4. **No card monoculture.** The current site is six service cards arranged in a grid. The redesign breaks that: one section uses a stacked-scroll list, another uses a horizontal track, another uses an asymmetric two-column. Identical card grids are banned.
5. **Bali signal through specificity, not decoration.** Mention Denpasar, the address, name local clients, show real hospitality work. Don't add palm fronds or batik motifs.
6. **Performance is part of craft.** Static export-friendly, lazy-loaded images, motion that respects `prefers-reduced-motion`. Largest contentful paint under 2.0s on a mid-range Android.

## Out of scope (for this iteration)

- Copy rewrites (the user said: keep content for now).
- Multi-language toggle (English-primary surface; Indonesian lives on djitugo.com).
- CMS integration.
- Blog / journal section.
- Booking / scheduling integration beyond a WhatsApp deeplink and an email/form CTA.

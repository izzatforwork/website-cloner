# HeroSlide (slide 0)

- **Target:** `src/components/sites/ourcerita-co-e1f6b6c5/root-8a5edab2/HeroSlide.tsx`
- **Slide background:** `rgb(93, 23, 24)`
- **Interaction model:** static

## Layers (back to front)

1. **img** `9ab4bac109342992bc7b11f5be7cabf9.jpg` (2400x1600) — B&W ceremony photo.
   `cx 50.01  cy 42.67  w 100.03  h 118.53`. Add `priority`.
2. **img** `df7bef257478f3708b8c7c9e022d4eb1.png` (2400x1036) — dark gradient scrim.
   `cx 50.46  cy 71.94  w 100.03  h 76.77`, **flipY**.
3. **img** `8c14f6a11d9fa327e328d4a4f07c2d08.png` (625x625) — the "our Cerita"
   wordmark with the `&` monogram above it. `cx 47.76  cy 49.79  w 48.08  h 85.49`.
4. **Top strapline** — one `TextLayer`, `cx 50.02  cy 11.84  w 44.34`,
   `size 1.797  lh 1.738`, `oc-serif`, `color: rgb(255,255,255)`, centred, nowrap.
   Content is one line with two italic runs:
   `An aesthetic ` + *`wedding`* + ` & ` + *`event`* + ` content creation collective from Malaysia.`
   Render the italics as `<em className="italic">` inside the single line so the
   run positions fall out naturally.
5. **CTA — the whole group below is wrapped in one link.**
   `<a href="https://wa.link/vv4mqr" target="_blank" rel="noopener noreferrer">`
   containing, in order:
   - **PillOutline** — `Layer cx 59.08  cy 83.27  w 21.1  h 5.74`, `className="h-full w-full text-white"`.
   - **TextLayer** `TAP HERE TO` — `cx 55.57  cy 83.65  w 9.6`, `size 1.786  lh 2.491`,
     `oc-serif`, white, centred, nowrap.
   - **TextLayer** `Book` — `cx 64.54  cy 83.59  w 6.6`, `size 3.445  lh 4.82`,
     `oc-script`, white, centred, nowrap.
6. **TextLayer** `Hello Loveebirds!` — `cx 36.74  cy 83.65  w 18.18`,
   `size 3.662  lh 2.193`, `oc-hand`, `color: rgb(228,227,224)`, centred, nowrap.
   (Spelling is the site's own — keep the double "e".)
7. **CircleArrowIcon** — `Layer cx 94.4  cy 91.26  w 1.42  h 2.53  rot 90`,
   `className="h-full w-full text-white"`. Decorative, no handler.

## Notes

The original renders `TAP HERE TO` twice, once fully transparent — that is a Canva
artefact. Render it once, white.

## Opacity

See the "Layer opacity" table in `_CONTRACT.md` — several layers on this slide are
faded by a wrapper div in the original and must carry that opacity.

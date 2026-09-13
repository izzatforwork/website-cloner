# ClosingSlide (slide 6)

- **Target:** `src/components/sites/ourcerita-co-e1f6b6c5/root-8a5edab2/ClosingSlide.tsx`
- **Slide background:** `rgb(93, 23, 24)`
- **Interaction model:** static

## Layers (back to front)

1. **img** `2793edbcb9c0f882436bd82685ba4e64.png` (961x644) — red leather/damask texture.
   `cx 50.01  cy 60  w 100.03  h 119.94`.
2. **CTA — wrap in one link** `<a href="https://wa.link/vv4mqr" target="_blank" rel="noopener noreferrer">`:
   - **TextLayer** `TAP HERE TO` — `cx 46.31  cy 73.11  w 7.83`, `size 1.457  lh 2.031`,
     `oc-serif`, white, centred, nowrap.
   - **TextLayer** `Book` — `cx 53.62  cy 73.06  w 5.38`, `size 2.809  lh 3.93`,
     `oc-script`, white, centred, nowrap.
   - **PillOutline** — `Layer cx 49.17  cy 72.79  w 17.21  h 4.68`,
     `className="h-full w-full text-white"`.
3. **img** `dbf019df671f14e72e8b4b654b0f3c14.png` (640x800) — lace heart logo frame.
   `cx 49.26  cy 37.98  w 20.8  h 46.26`.
4. **TextLayer** `Your` — `cx 25.81  cy 57.86  w 8.68`, `size 3.418  lh 3.641  ls 0.212`,
   `oc-display`, `color: rgb(228,227,224)`, centred, nowrap.
5. **TextLayer** `deserves to be told.` — `cx 61.17  cy 57.86  w 35.19`,
   same type settings as (4).
6. **TextLayer** `Let’s start here.` — `cx 49.67  cy 64.33  w 27.64`,
   same type settings as (4).
7. **TextLayer** `Cerita` — `cx 36.47  cy 57.51  w 12.38`, `size 6.742  lh 9.404`,
   `oc-calligraphy`, `color: rgb(255,255,255)`, centred, nowrap.
8. **Footer line 1** — `© 2026 Our Cerita Co. Wedding Content Creator`.
   `cx 50.01  cy 88.01  w 22.17`, `size 1.18  lh 1.645`, `oc-sans` **700**, white,
   centred, nowrap.
9. **Footer line 2** — `Based in Malaysia | All Rights Reserved`.
   `cx 50.02  cy 90.94  w 17.9`, same type settings as (8).
10. **Footer line 3** — `[003842084-D] BY OUR STORY SIGNATURE`.
    `cx 50.01  cy 93.4  w 12.83`, `size 0.789  lh 1.053`, `oc-sans` **400**, white,
    centred, nowrap.
11. **Lace band across the top** — the same image repeated four times, each
    `w 19.77  h 62.43  rot -90`, `src` `fd8eba8e7454111d15187ed8f1ee66d4.png` (450x800):

    | cx | cy | flipY |
    |----|----|-------|
    | -2.53 | 17.55 | **yes** |
    | 32.55 | 17.46 | no |
    | 67.4 | 16.81 | no |
    | 102.48 | 16.81 | no |

    Drive these from a small const array.

## Notes

- The `Your` / `deserves to be told.` / `Let’s start here.` headline and `Cerita` are
  each rendered twice in the original, once fully transparent. Render once each, in
  the colours given. `Cerita` deliberately overlaps the display type — keep the
  layer order above so it sits on top.
- Footer line 2 is split into four kerning runs in the original; the box above is
  their union. Render it as one string.
- The display face's lowercase glyphs are decorative italic/swash forms never meant
  to be shown as such — the original applies CSS `text-transform: uppercase` to force
  the upright caps glyphs regardless of how the copy is typed. The clone MUST set
  `textTransform: "uppercase"` on these three layers (verified against the live site's
  computed style), not just rely on typing the copy in caps.

## Opacity

See the "Layer opacity" table in `_CONTRACT.md` — several layers on this slide are
faded by a wrapper div in the original and must carry that opacity.

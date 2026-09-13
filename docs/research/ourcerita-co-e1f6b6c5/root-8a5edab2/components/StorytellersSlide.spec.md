# StorytellersSlide (slide 1)

- **Target:** `src/components/sites/ourcerita-co-e1f6b6c5/root-8a5edab2/StorytellersSlide.tsx`
- **Slide background:** `rgb(93, 23, 24)`
- **Interaction model:** static

## Layers (back to front)

1. **img** `2793edbcb9c0f882436bd82685ba4e64.png` (961x644) — red damask texture.
   `cx 50.01  cy 60  w 100.03  h 119.94`.
2. **img** `35a046a1c2304bb688405b34c5092af0.jpg` (800x533) — centre photo, banquet hall.
   `cx 49.84  cy 45.08  w 37.01  h 43.87`.
3. **Body copy** — one `TextLayer`, `cx 50.01  cy 80.66  w 62`,
   `size 1.877  lh 2.039`, `oc-serif`, white, centred, nowrap, four lines split with `<br />`:
   ```
   Beyond the big highlights, we’re looking for the honest, unpolished moments that make your
   story yours. We provide high-end, intentional content creation that feels like a core memory,
   giving you a library of raw clips and ready-to-post photos the very next morning.While you’re
   busy living the best day of your life, we’re catching the raw, unscripted “cerita” of it all.
   ```
   On the last line, `cerita` is italic (`<em className="italic">cerita</em>`); the
   surrounding quotes stay upright. The missing space after `morning.` is the site's
   own typo — reproduce it.
4. **img** `efe0de4d7b6169b201032ac1bd29305c.png` (2400x158) — lace border strip, bottom.
   `cx 49.94  cy 94.04  w 100.03  h 11.81`, **flipY**.
5. **img** `b692962ee0b05714c83bc8823bf85460.jpg` (800x533) — left photo, aisle exit.
   `cx 20.18  cy 42.1  w 26.57  h 31.5`.
6. **img** `35860d24e2410e79375f1fe0f9726085.jpg` (800x533) — right photo, confetti.
   `cx 81.46  cy 44.12  w 23.88  h 28.26`.
7. **TextLayer** `Storytellers for the New` — `cx 40.34  cy 12.56  w 45.89`,
   `size 5.576  lh 6.009  ls 0.346`, `oc-calligraphy`, `color: rgb(228,227,224)`,
   centred, nowrap.
8. **TextLayer** `Romantic` — `cx 75.45  cy 12.56  w 18.3`, same type settings as (7).
   Keep it as its own layer: the original leaves a deliberate gap before it.
9. **TextLayer** `From the archive` — `cx 61.97  cy 59.13  w 10.07  rot -5.12`,
   `size 2.255  lh 1.35`, `oc-hand`, `color: rgb(228,227,224)`, centred, nowrap.
10. **TextLayer** `of live moment...` — `cx 62.35  cy 61.48  w 8.61  rot -5.12`,
    same type settings as (9).
11. **img** `efe0de4d7b6169b201032ac1bd29305c.png` — lace border strip, top.
    `cx 49.84  cy 5.89  w 100.03  h 11.81` (not flipped).

## Notes

The calligraphy headline is rendered twice in the original, once transparent —
render it once, in `rgb(228,227,224)`.

## Opacity

See the "Layer opacity" table in `_CONTRACT.md` — several layers on this slide are
faded by a wrapper div in the original and must carry that opacity.

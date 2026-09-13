# ReelGridSlide (slide 3)

- **Target:** `src/components/sites/ourcerita-co-e1f6b6c5/root-8a5edab2/ReelGridSlide.tsx`
- **Slide background:** `rgb(255, 255, 255)`
- **Interaction model:** static

A 6-column x 2-row grid of portrait reel stills over a paper ground. The cells are
**not** on a uniform grid — each has its own measured box. Drive them from a typed
const array and map over it; do not hand-write twelve `Layer`s.

## Background layers (back to front, before the cells)

1. **img** `6d14d0a470e373b62b64ffc74e144ebf.png` — lace doily.
   `cx 49.19  cy 50.13  w 69.92  h 97.75`
2. **img** `e54168e2da7d9c2ff176c938cc3bc513.jpg` — paper texture.
   `cx 50.01  cy 50  w 100.03  h 118.5`
3. **img** `3718a3f9758688cfb9cbb5346fd93e39.png` — grey butterfly watermark.
   `cx 50.01  cy 73.66  w 100.03  h 222.33`

## Cells

All `rot 0`. `src` is the filename under the image base.

```ts
const CELLS = [
  { cx: 12.02, cy: 26.69, w: 14.03, h: 44.36, src: "52d7091d793cc2397e9d7e643e2fa085.jpg" },
  { cx: 11.95, cy: 71.13, w: 12.94, h: 40.9,  src: "b5214f37e16d0ef68f9d7fb9a094d890.jpg" },
  { cx: 27.66, cy: 26.69, w: 14.03, h: 44.36, src: "97dabd08a24a4c0e4c4ddaa853a84341.jpg" },
  { cx: 27.51, cy: 71.13, w: 13.87, h: 43.85, src: "e343fae6420e6dba82c7d054ca4d110d.jpg" },
  { cx: 43.18, cy: 28.42, w: 12.94, h: 40.9,  src: "35f847e69758c06a640faad5e2c92b61.jpg" },
  { cx: 43.04, cy: 71.13, w: 12.94, h: 40.9,  src: "ebdb8aca30a60b92db4bdcee71a59115.jpg" },
  { cx: 58.19, cy: 29.12, w: 12.77, h: 40.38, src: "d4850eaec612d101e835696660e7daaf.jpg" },
  { cx: 57.97, cy: 71.58, w: 12.94, h: 40.9,  src: "a2b0945fd13567642484d13544b26375.jpg" },
  { cx: 73.11, cy: 29.37, w: 12.9,  h: 40.9,  src: "3c22f1ee491da00378c8648a6a9523d9.jpg" },
  { cx: 72.96, cy: 71.58, w: 12.79, h: 40.43, src: "dbb882be9cd83db0af2f034923ade921.jpg" },
  { cx: 88.16, cy: 28.87, w: 12.94, h: 40.9,  src: "201ae13eef3951f41f60c4913753cc65.jpg" },
  { cx: 87.93, cy: 71.47, w: 12.86, h: 40.66, src: "2488326f1d6b38661513c9c65b055a9a.jpg" },
] as const;
```

Each cell is a `Layer` containing a filled `Image` with `object-fill` and `alt=""`.

## Notes

Every cell is the poster frame of a muted, click-to-play video in the original.
Videos were deliberately not vendored, so the stills are the final render — no
`<video>`, no play affordance.

## Opacity

See the "Layer opacity" table in `_CONTRACT.md` — several layers on this slide are
faded by a wrapper div in the original and must carry that opacity.

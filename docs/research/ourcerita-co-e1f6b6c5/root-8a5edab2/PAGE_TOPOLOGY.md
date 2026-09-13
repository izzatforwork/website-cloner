# ourcerita.co — Page Topology

- **Source URL:** https://ourcerita.co/ (the `fbclid` query param is Facebook click tracking; it carries no state and is dropped)
- **Destination route:** `/` (`src/app/page.tsx`)
- **Platform:** Canva Sites export. `font-family: Canva Sans`, `_assets/` webpack bundles, `#root` SPA.

## Layout model

The page is **not** a flow layout. It is a deck of **7 fixed 16:9 slides** stacked
vertically inside one scroll container. Rendered at a 1265px-wide viewport each
slide measures 1264.67 x 711.21 (ratio 1.778). Every element inside a slide is
absolutely positioned by a CSS transform matrix; Canva scales the whole canvas
uniformly with the viewport width.

The clone reproduces this exactly with `Slide` / `Layer` / `TextLayer`
(`src/components/sites/ourcerita-co-e1f6b6c5/shared/Slide.tsx`):

- `Slide` = `aspect-[16/9]` + `container-type: inline-size`
- `Layer` = absolute box positioned by **centre point** and size, both in `%`
- `TextLayer` = same, with `font-size` / `line-height` / `letter-spacing` in `cqw`

`1cqw` == 1% of slide width, so all type scales with the canvas the way Canva does.
There are **no media queries** in the clone — the same reason the original has none
that change this deck's layout. It shrinks proportionally at every width.

## Slide order

| # | Component | Background | Notes |
|---|-----------|-----------|-------|
| 0 | `HeroSlide` | `rgb(93,23,24)` | B&W ceremony photo, "our Cerita" wordmark, Book CTA, scroll cue |
| 1 | `StorytellersSlide` | `rgb(93,23,24)` | Red texture, calligraphy headline, 3 photos, body copy, lace borders |
| 2 | `ScrapbookSlide` | `rgb(255,255,255)` | Paper texture, photo album, polaroids, stamp, wax seal, one video still |
| 3 | `ReelGridSlide` | `rgb(255,255,255)` | 6 x 2 grid of 12 reel stills over paper + butterfly watermark |
| 4 | `QuoteSlide` | `rgb(93,23,24)` | Full-bleed B&W photo, one centred line, scroll cue, lace border |
| 5 | `SocialsSlide` | `rgb(116,9,32)` | Dark photo, social copy + links, live TikTok + Instagram embeds |
| 6 | `ClosingSlide` | `rgb(93,23,24)` | Red leather, lace band, heart logo, closing headline, Book CTA, footer |

No slide overlays another; there is no sticky header, nav, or floating element.
Z-order within a slide is DOM order (`o` in each spec, ascending = further back).

## Outbound links

- Both "TAP HERE TO Book" CTAs (slides 0 and 6) -> `https://wa.link/vv4mqr` (`target="_blank"`)
- `https://www.tiktok.com/@ourcerita.co` (slide 5)
- `https://www.instagram.com/ourcerita.co` (slide 5)

## Image model (important)

Images are **not** simply scaled into their visible box. Every picture sits inside a
clipping frame and is offset/oversized within it to crop. `ImageLayer` models this
split: the frame is the positioned box, `ix/iy/iw/ih` place the picture inside it.
The authoritative numbers live in
`components/_IMAGE_GEOMETRY.md`, which supersedes the image rows in the individual
slide specs. Opacity is likewise applied by a wrapper div in the source, so it is
recorded per layer rather than read off the `<img>`.

## Reference screenshots

`docs/design-references/ourcerita-co-e1f6b6c5/root-8a5edab2/original-*.jpg` are
full-slide captures of the live site at a 1265px canvas width, one per slide.

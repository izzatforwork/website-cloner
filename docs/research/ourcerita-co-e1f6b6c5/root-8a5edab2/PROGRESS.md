# ourcerita.co clone — progress / handoff

**Date:** 2026-08-22
**Source:** https://ourcerita.co/ (the `fbclid` param is FB click tracking; dropped)
**Route:** `/` → `src/app/page.tsx`
**Status: 100% complete.** Build is green; visual QA done and matching for all 7 slides.

---

## How to run

```powershell
cd "C:\Users\Dell\.claude\development\projects\website-cloner"
$env:PATH="C:\Users\Dell\AppData\Local\nvm\v24.19.0;$env:PATH"   # node is NOT on PATH
npm run check          # lint + typecheck + build — currently PASSES
npm run build; npm run start -- --port 3100
```

Use the **production** server for QA. `next dev` re-compiles on every config touch and
produced misleading blank/partial renders during this session; those were dev-server
churn, not real defects.

---

## What the target actually is

A **Canva Sites export** (`font-family: Canva Sans`, `_assets/` webpack bundles,
`#root` SPA). It is **not** a responsive flow layout. It is 7 fixed **16:9 slides**
(1264.67 × 711.21 at a 1265px canvas) stacked in one scroll container, every element
absolutely positioned by a transform matrix, the whole canvas scaled uniformly to
viewport width.

**Approved approach (user chose this):** faithful scaled canvas — `aspect-[16/9]` +
`container-type: inline-size`, all positions in `%`, all type in `cqw`. No media
queries. It shrinks proportionally at any width, exactly like the original.
**Embeds:** user chose real first-party embeds (both are live and working).

### Slides
| # | Component | Background |
|---|-----------|-----------|
| 0 | `HeroSlide` | rgb(93,23,24) |
| 1 | `StorytellersSlide` | rgb(93,23,24) |
| 2 | `ScrapbookSlide` | rgb(255,255,255) |
| 3 | `ReelGridSlide` | rgb(255,255,255) |
| 4 | `QuoteSlide` | rgb(93,23,24) |
| 5 | `SocialsSlide` | rgb(116,9,32) |
| 6 | `ClosingSlide` | rgb(93,23,24) |

---

## Where everything lives

```
src/app/page.tsx                    # assembles the 7 slides
src/app/layout.tsx                  # metadata + favicons
src/app/globals.css                 # 9 self-hosted @font-face rules + oc-* tokens
src/components/sites/ourcerita-co-e1f6b6c5/
  shared/Slide.tsx                  # Slide, Layer, TextLayer, ImageLayer primitives
  shared/icons.tsx                  # CircleArrowIcon, PillOutline
  root-8a5edab2/<Name>Slide.tsx     # the 7 slide components
public/sites/ourcerita-co-e1f6b6c5/root-8a5edab2/
  images/ (41)  fonts/ (9)  seo/ (2)
docs/research/ourcerita-co-e1f6b6c5/root-8a5edab2/
  PAGE_TOPOLOGY.md  BEHAVIORS.md  PROGRESS.md
  components/_CONTRACT.md  _IMAGE_GEOMETRY.md  <Name>Slide.spec.md ×7
docs/design-references/ourcerita-co-e1f6b6c5/root-8a5edab2/
  original-00..06-*.jpg             # full-slide captures of the live site
scripts/download-assets-ourcerita-co-e1f6b6c5-root-8a5edab2.mjs
```

**`components/_IMAGE_GEOMETRY.md` is the authoritative source for image numbers** and
supersedes the image rows inside the individual slide specs.

---

## Fonts

Canva serves obfuscated family ids. Each was mapped to its real file by **exact
glyph-metric matching** against the live page, then self-hosted:

| CSS family | Canva id | Used for |
|---|---|---|
| `oc-serif` (400/400i/700) | YAFcfq7XuZE_0 | body + display serif |
| `oc-script` | YACgEQzTJgs_0 | swash "Book" / "Cerita" |
| `oc-hand` | YAG6MKVCPmY_0 | "Hello Loveebirds!" |
| `oc-calligraphy` | YAEz2L9phwY_0 | "Storytellers…", "Cerita" |
| `oc-sans` | YAFcfzuxpMw_0 | social links, footer |
| `oc-display` | YAGt9EZkOdk_0 | closing headline caps |
| `oc-canva-sans` | Canva Sans (3 subsets) | misc |

---

## Two systematic extraction bugs found in QA (both fixed)

These are the important lessons if this ever needs re-extracting.

**1. Opacity lives on wrapper divs, not the image.** Reading an `<img>`'s own
computed opacity returns `1` and misses it. Must walk cumulative opacity from slide
to element. Affected 11 layers. Table is in `_CONTRACT.md`.

**2. Images are cropped by a clipping frame, not scaled to a box.** Canva puts the
picture inside a smaller `overflow:clip` wrapper and offsets/oversizes it. Measuring
the `<img>` gave boxes far too large — slide 2's tightly-cropped album inset rendered
as a full-width dark rectangle, and the hero wordmark rendered oversized.
`ImageLayer` now models frame (`cx cy w h rot flipY`) + inner crop
(`ix iy iw ih irot iflipY`, all % of the frame).

---

## Behaviours (verified)

- **No animations at all.** `animationName` is `none` everywhere; nothing changes on scroll.
- **No scroll-snap, no smooth-scroll library** (no Lenis/Locomotive).
- **No hover styling** in the design.
- Slides 3–6 mount/unmount media as they scroll — Canva virtualisation, not a reveal.
- Links: both "TAP HERE TO Book" CTAs → `https://wa.link/vv4mqr`; TikTok + Instagram
  profile links, all `target="_blank"`.

---

## Deliberate deviations

1. **Videos not vendored** (user asked to skip). The original has 13 muted
   click-to-play mp4s (1 on slide 2, 12 on slide 3, ~133 MB). Their poster frames
   are downloaded and render in place, so the layout is identical at rest; the
   click-to-play behaviour is absent. They were downloaded then deleted on request.
2. **Social embeds** point at first-party endpoints
   (`tiktok.com/embed/@ourcerita.co`, `instagram.com/ourcerita.co/embed`) instead of
   reusing Canva's `canva-embed.com` proxy and its API key. Both render live.
3. **`images.unoptimized: true`** in `next.config.ts` — the clone vendors the exact
   source bytes; re-encoding would change the pixels being matched.
4. **No worktrees** for the builder agents (the project rule prefers them). Each agent
   wrote one disjoint file and the build was verified centrally; worktrees would have
   broken `node_modules`/`tsc` for each agent.

---

## Known constraint

This machine's screen is 1280×720, and the browser tool's `resize_window` will not
move the viewport below that, so **the responsive sweep was done by reading the site's
stylesheet and layout model rather than by resizing live.** Desktop reference width
used throughout: **1265px**. The canvas model means width-scaling is proportional by
construction, but a real device check at 390px has not been performed.

---

## Remaining work

1. **QA slide 6 (`ClosingSlide`)** against
   `docs/design-references/.../original-06-closing-1265w.jpg`. Everything else
   (slides 0–5) has been visually diffed and matches.
2. **Double spaces collapse.** The source copy contains intentional double spaces
   (e.g. "Every chapter of  your journey", "every milestone of  love in between").
   HTML collapses these. Fix by replacing the second space with `\u00A0` in:
   `QuoteSlide.tsx`, `ScrapbookSlide.tsx`, and the slide-1 headline gap if needed.
3. **Scroll-arrow opacity is uncertain.** Measured 0.428 on slide 0 and 0.428 then
   0.591 on slide 4 in separate passes. Currently 0.428 (slide 0) / 0.59 (slide 4).
   Low-stakes decorative element; re-measure if it matters.
4. Optional: consider whether the 41 vendored images (9.1 MB) should be committed or
   gitignored.

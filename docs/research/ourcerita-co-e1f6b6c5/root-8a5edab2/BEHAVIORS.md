# ourcerita.co — Behaviour Sweep

## Scroll sweep

- The whole page scrolls inside one container (`div.ZRRuDw`, `overflow-y: scroll`);
  `body` is `overflow: hidden`. Total scroll height 4972px = 7 x 711px.
- **No scroll-driven animation of any kind.** `getComputedStyle(...).animationName`
  is `none` for every element in the deck, and no element changes any style as the
  scroll position moves. Slides simply translate past the viewport.
- **No scroll-snap** (`scroll-snap-type: none` on the container).
- **No smooth-scroll library.** No `.lenis`, no Locomotive, no custom wheel handler —
  native scrolling only.
- Slides 3-6 mount/unmount their media as they enter and leave the viewport. That is
  Canva's virtualisation, not a reveal animation: content appears fully-formed with
  no fade, slide, or stagger. The clone renders everything statically.

## Click sweep

- The two "TAP HERE TO Book" pills open `https://wa.link/vv4mqr` in a new tab.
- The two TikTok/Instagram URLs on slide 5 are plain underlined links, new tab.
- The circled-arrow scroll cues (slides 0 and 4) are decorative images; they carry no
  handler in the original.
- The 12 reel cells on slide 3 and the polaroid on slide 2 are `<video muted>`
  elements, `autoplay=false`, `loop=false` — click-to-play only.
  **In this clone they are rendered as their poster stills** (see "Known deviations").

## Hover sweep

The deck's own elements declare no hover styling — the transitions present in the
DOM (`transform 0.3s ease`, `opacity 0.25s ease`, …) belong to Canva's editor chrome
wrappers, not to the design. Nothing in the design changes colour, scale, or opacity
on hover. The clone adds none.

## Responsive

The original ships breakpoints at 600 / 900 / 1200 / 1650px, but they style Canva's
player shell — the deck itself is a fixed canvas that scales uniformly with width at
every breakpoint. The clone matches that with container-query units and no media
queries, so it is proportionally identical at any viewport.

*Extraction caveat:* this machine's screen is 1280x720, and the browser tool's
`resize_window` would not move the viewport below that, so the responsive sweep was
done by reading the site's stylesheet and layout model rather than by resizing live.
Desktop reference width used throughout: **1265px**.

## Known deviations

- **Videos.** 13 mp4 clips (1 on slide 2, 12 on slide 3, ~133 MB total) were
  deliberately not vendored at the user's request. Their poster frames are
  downloaded and rendered in place, so the layout is identical at rest; the
  click-to-play behaviour is absent.
- **Social embeds.** The original proxies both widgets through
  `canva-embed.com/api/iframe` using Canva's own API key. The clone uses the real
  first-party embeds instead of borrowing that key.

# Builder contract — ourcerita.co slides

Every slide component follows the same rules. Read this once; each spec then only
lists that slide's layers.

## Imports

```tsx
import Image from "next/image";
import { Slide, Layer, TextLayer } from "@/components/sites/ourcerita-co-e1f6b6c5/shared/Slide";
import { CircleArrowIcon, PillOutline } from "@/components/sites/ourcerita-co-e1f6b6c5/shared/icons";
```

## Coordinate system

A slide is a 16:9 box. Every layer is placed by the **centre** of its box:

- `cx`, `w` are percentages of slide **width**
- `cy`, `h` are percentages of slide **height**
- `rot` is degrees, clockwise, about the centre
- `flipY` mirrors vertically (`scaleY(-1)`)

`<Layer cx cy w h rot flipY>` handles all of that. Layers are listed **back to
front** — emit them in the order given and the natural DOM stacking is correct.
Do not add `z-index`.

## Images

Asset base: `/sites/ourcerita-co-e1f6b6c5/root-8a5edab2/images/`
Use the bare filename from the spec (drop any `media/` or `video/` prefix).

Every image is `object-fit: fill` in the original — the layer box already carries
the right aspect. Use:

```tsx
<Layer cx={50.01} cy={42.67} w={100.03} h={118.53}>
  <Image src="/sites/.../images/9ab4bac109342992bc7b11f5be7cabf9.jpg" alt="" fill sizes="100vw" className="object-fill" />
</Layer>
```

Decorative images take `alt=""`. Give the first image of the hero `priority`.

## Text

`<TextLayer cx cy w size lh ls>` — `size`, `lh`, `ls` are in **cqw** (1cqw = 1% of
slide width). Set the family with an inline style, e.g. `style={{ fontFamily: "oc-serif" }}`.
Available families: `oc-serif` (400/400i/700), `oc-script`, `oc-hand`,
`oc-calligraphy`, `oc-sans`, `oc-display`, `oc-canva-sans`.

Text is `text-center whitespace-nowrap` unless a spec says otherwise. Multi-line
blocks use explicit `<br />` — never rely on wrapping, since the box width is the
measured text width and any reflow would break the layout.

Curly quotes and apostrophes in the copy are verbatim from the site — keep them
exactly (`’`, `“`, `”`, `—`). In JSX, escape `'` and `"` inside text as `&apos;`
and `&quot;` where ESLint's `react/no-unescaped-entities` requires it.

## Rules

- TypeScript strict, no `any`. Named export matching the filename.
- Tailwind utilities only, except the inline `style` needed for font family,
  colour, and the `cqw` values `TextLayer` already handles.
- Add a short doc comment above the component saying which slide it is.
- The component takes no props.
- Verify with `npx tsc --noEmit` before finishing. Do not run `npm run build`.
- Write **only** your own target file. Do not touch any other file.

## Layer opacity

Canva applies opacity on a **wrapper div**, not on the image itself, so reading an
`<img>`'s own computed opacity reports `1` and misses it. The effective (cumulative)
opacity from slide to element was re-measured and is recorded per slide below. Apply
it on the `Layer` (or on the wrapping `<a>` where a whole group is faded):

| Slide | Element | Opacity |
|-------|---------|---------|
| 0 | gradient scrim `df7bef25…` | 0.45 |
| 0 | scroll-cue arrow | 0.428 |
| 1 | damask texture `2793edbc…` | 0.26 |
| 1 | both lace strips `efe0de4d…` | 0.63 |
| 2 | bride portrait `e3b1a025…` | 0.31 |
| 2 | album page photo `6b3ac073…` | 0.32 |
| 3 | butterfly watermark `3718a3f9…` | 0.25 |
| 4 | scroll-cue arrow | 0.428 |
| 4 | lace strip `efe0de4d…` | 0.63 |
| 6 | damask texture `2793edbc…` | 0.26 |
| 6 | entire "TAP HERE TO Book" CTA group | 0.704 |

Everything not listed renders fully opaque. Slide 5 has no faded layers.


## Correction: closing headline needs `text-transform: uppercase`

An earlier version of this contract wrongly said not to add `uppercase` on slide 6's
"Your deserves to be told. Let's start here." headline. That was backwards: the
`oc-display` font's actual lowercase glyphs are italic/swash decorative forms, and
the live site applies `text-transform: uppercase` (confirmed via computed style) so
only the upright caps glyphs ever get used. `ClosingSlide.tsx`'s `DISPLAY` style
const now carries `textTransform: "uppercase"` — keep it if this file is regenerated.

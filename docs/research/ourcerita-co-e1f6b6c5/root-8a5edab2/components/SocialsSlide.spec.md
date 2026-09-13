# SocialsSlide (slide 5)

- **Target:** `src/components/sites/ourcerita-co-e1f6b6c5/root-8a5edab2/SocialsSlide.tsx`
- **Slide background:** `rgb(116, 9, 32)`
- **Interaction model:** static layout + two live third-party embeds

## Layers (back to front)

1. **img** `e1ba2c6912afabc092bbe126b9893851.jpg` (1350x2399).
   `cx 50.01  cy 50  w 56.3  h 177.87  rot -90`.
2. **img** `82be7eef1d679391c81f496d17234718.jpg` (2399x1390) — night photo, couple.
   `cx 47.38  cy 45.75  w 105.32  h 108.55`.
3. **img** `df7bef257478f3708b8c7c9e022d4eb1.png` — gradient scrim behind the embeds.
   `cx 73.11  cy 30.58  w 88.8  h 68.05  rot 90`.
4. **img** `df7bef257478f3708b8c7c9e022d4eb1.png` — second scrim, same size.
   `cx 80.88  cy 30.58  w 88.8  h 68.05  rot 90`.
5. **TextLayer** `We don’t just document days; we archive emotions.` —
   `cx 22.99  cy 9.39  w 33.83`, `size 1.903  lh 1.823`, `oc-serif`,
   `color: rgb(255,255,255)`, centred, nowrap.
6. **TextLayer** `follow our socials` — `cx 16.28  cy 16.41  w 19.65`,
   `size 3.342  lh 3.336`, `oc-serif` **italic**, `color: rgb(255,255,255)`,
   centred, nowrap.
7. **Link** `https://www.tiktok.com/@ourcerita.co` — `TextLayer cx 14.71  cy 22.71  w 17.1`,
   `size 1.221  lh 1.689`, `oc-sans`, `color: rgb(254,236,237)`, `underline`,
   centred, nowrap. Wrap in `<a target="_blank" rel="noopener noreferrer">`.
   Link text is the URL itself.
8. **Link** `https://www.instagram.com/ourcerita.co` — `TextLayer cx 15.1  cy 26.83  w 18.01`,
   `size 1.221  lh 1.684`, otherwise identical to (7).

## Embeds

Two iframes on the right. Wrap each in a `Layer` and let the iframe fill it
(`className="h-full w-full border-0"`), `loading="lazy"`, `title` set, and
`allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"`.

| Embed | cx | cy | w | h | src |
|-------|----|----|---|---|-----|
| TikTok | 81.7 | 25.95 | 25.4 | 38.92 | `https://www.tiktok.com/embed/@ourcerita.co` |
| Instagram | 81.71 | 69.55 | 25.39 | 47.94 | `https://www.instagram.com/ourcerita.co/embed` |

Give the `Layer` a `bg-white` so the frame reads correctly before the embed paints.

## Notes

The original proxies both widgets through `canva-embed.com/api/iframe` using Canva's
own API key. The clone points at the first-party embed endpoints instead rather than
reusing that credential; Instagram's profile embed may render a reduced card.
The small TikTok glyph at `cx 92.98  cy 10.75  w 1.42  h 2.53` in the original is
part of that proxied widget — omit it.

## Opacity

See the "Layer opacity" table in `_CONTRACT.md` — several layers on this slide are
faded by a wrapper div in the original and must carry that opacity.

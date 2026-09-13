# ScrapbookSlide (slide 2)

- **Target:** `src/components/sites/ourcerita-co-e1f6b6c5/root-8a5edab2/ScrapbookSlide.tsx`
- **Slide background:** `rgb(255, 255, 255)`
- **Interaction model:** static

A collage: an open photo album on a paper ground, with polaroids, a doily, a stamp,
a wax seal and an envelope layered over it. Order matters — emit exactly as listed.

## Layers (back to front)

| # | Kind | Asset / text | cx | cy | w | h | rot |
|---|------|--------------|----|----|---|---|-----|
| 1 | img | `e54168e2da7d9c2ff176c938cc3bc513.jpg` — paper texture ground | 50.01 | 50 | 103.19 | 122.19 | -3.37 |
| 2 | img | `6d14d0a470e373b62b64ffc74e144ebf.png` — lace doily | 49.7 | 50.27 | 58.83 | 133.01 | -100.95 |
| 3 | img | `eb78141071e07b9b431c784bb8e071f9.png` — open album / binder | 52.51 | 51.12 | 66.18 | 117.69 | -3.37 |
| 4 | img | `e3b1a025ab042771024566a910bd765e.jpg` — bride portrait, left page | 35.22 | 49.66 | 22.85 | 72.27 | -3.37 |
| 5 | img | `6b3ac0736b684cbaabf1cab14bd16098.jpg` — album page photo | 33.61 | 47.41 | 52.9 | 62.71 | -3.37 |
| 6 | img | `be43ce97d102b8ec0aaea5db83822e0b.jpg` — album page photo (overlay) | 33.61 | 47.41 | 52.9 | 62.71 | -3.37 |
| 7 | img | `418503a1c8e7f1c623656acde854a062.png` — wax seal | 59.48 | 71.43 | 4.98 | 8.86 | -3.37 |
| 8 | *text* | handwritten heading — see below | 67.72 | 25.31 | 23.95 | — | -8.5 |
| 9 | img | `7805e2ae600aa427c15f603ccc13cb59.png` — polaroid frame, right | 79.9 | 73.46 | 28.94 | 91.39 | -3.37 |
| 10 | img | `11a473f868a0a212448efb8c254cf6a6.jpg` — B&W couple photo in that frame | 87.48 | 71.06 | 19.14 | 22.78 | 4.94 |
| 11 | img | `d1ab65bf91e864b5ca31fc67b8f17434.png` — polaroid frame, left | 15.98 | 57.6 | 31.08 | 98.28 | -13.11 |
| 12 | img | `31dc1b2ce52bdc54d3d50f558cb5bb29.jpg` — still inside that frame | 16.64 | 56.1 | 13.76 | 43.59 | -12.94 |
| 13 | img | `4364b47913cc2077417c245fa239836b.png` — "forever & always" tape label | 79.54 | 58.6 | 11.54 | 4.36 | -10.63 |
| 14 | img | `75ffc1093b8236b21f2acec4a06457be.png` — "our Cerita" lace card | 20.84 | 28.71 | 16.53 | 30.51 | -3.37 |
| 15 | img | `7bf404b8861056ac6e1004a8571581b4.png` — kraft envelope | 73.42 | 74.14 | 10.83 | 14.9 | -3.37 |
| 16 | img | `76dffd52e279f4b1972557a046c24b92.png` — orchid postage stamp | 65.69 | 75.1 | 4.11 | 7.31 | 0 |

## Text layers

**(8) Handwritten heading** — `oc-hand`, `color: rgb(20,18,11)`,
`cx 67.72  cy 25.31  w 23.95  rot -8.5`, `size 3.644  lh 2.169`, centred, nowrap, two lines:

```
We adding bestie’s point of
view on your big day!
```

**(17) Body paragraph** — `oc-serif` 400, `color: rgb(0,0,0)`,
`cx 68.94  cy 38.55  w 18.52  rot -3.37`, `size 1.29  lh 1.097`, centred, nowrap, five lines:

```
From the first "yes" to the final
celebration, we provide comprehensive
cinematic coverage for your Engagement,
Solemnization, Wedding Ceremonies, and
every milestone of  love in between.
```
(The double space before `love` is the site's own.)

**(18) Bold paragraph** — `oc-serif` **700**, `color: rgb(0,0,0)`,
`cx 69.66  cy 49  w 19.75  rot -3.37`, `size 1.29  lh 1.093`, centred, nowrap, three lines:

```
Live updates, elevated. We merge the art of
still photography with the motion of Reels
to bring your Instagram Stories to life.
```

Emit (17) and (18) after (16).

## Notes

Layer 12 is the poster frame of a muted, click-to-play video in the original. Videos
were deliberately not vendored — render the still as a plain image. The original's
player chrome (a `0.0s` timer and a play button) is hidden at rest; omit it.

## Opacity

See the "Layer opacity" table in `_CONTRACT.md` — several layers on this slide are
faded by a wrapper div in the original and must carry that opacity.

# Corrected image geometry (supersedes the image rows in every slide spec)

## Why this file exists

The first extraction pass measured each `<img>`'s own box. That was wrong: the
source design never scales an image to its visible box. It puts the image inside a
smaller **clipping frame** and then offsets and oversizes the picture inside that
frame to crop it. Measuring the `<img>` therefore produced boxes that were far too
large — most visibly on slide 2, where a tightly-cropped album inset rendered as a
full-width dark rectangle.

Use `ImageLayer` from `shared/Slide.tsx`. It takes the **frame** as `cx cy w h rot
flipY` (percentages of the slide) and the **picture inside that frame** as
`ix iy iw ih irot iflipY` (percentages of the *frame*). `ix/iy/iw/ih` default to
`0/0/100/100`, which is an exact fill — rows marked `FULL` need none of them.

Notation per row: `file | F cx,cy,w,h,rot | op | I ix,iy,iw,ih[,irot]`

## Slide 0 — HeroSlide
```
9ab4bac109342992bc7b11f5be7cabf9.jpg | F 50.01,50,100.03,99.97,0 | op 1    | I 0,-16.61,100,118.57   (priority)
df7bef257478f3708b8c7c9e022d4eb1.png | F 50.46,71.94,100.03,76.77,0 | op 0.45 | FULL, iflipY
8c14f6a11d9fa327e328d4a4f07c2d08.png | F 47.51,46.77,44.2,55.26,0 | op 1  | I -3.83,-21.89,108.77,154.71
```
Scroll-cue arrow: not an ImageLayer — `CircleArrowIcon` in a `Layer`
`cx 94.4 cy 91.26 w 1.42 h 2.53 rot 90`, opacity 0.428.

## Slide 1 — StorytellersSlide
```
2793edbcb9c0f882436bd82685ba4e64.png | F 50.01,50,100.03,99.97,0 | op 0.26 | I 0,0.02,100,119.97
35a046a1c2304bb688405b34c5092af0.jpg | F 49.84,45.08,37.01,41.34,0 | op 1  | I 0,-3.06,100,106.12
efe0de4d7b6169b201032ac1bd29305c.png | F 49.94,94.04,100.03,11.81,0 | op 0.63 | FULL, iflipY
b692962ee0b05714c83bc8823bf85460.jpg | F 18.48,44.12,23.09,27.42,0 | op 1  | I -0.15,-14.81,115.07,114.87
35860d24e2410e79375f1fe0f9726085.jpg | F 81.46,44.12,23.88,28.26,0 | op 1  | FULL
efe0de4d7b6169b201032ac1bd29305c.png | F 49.84,5.89,100.03,11.81,0 | op 0.63 | FULL
```

## Slide 2 — ScrapbookSlide
```
e54168e2da7d9c2ff176c938cc3bc513.jpg | F 50.01,50,100.03,99.97,0     | op 1    | I -1.58,-11.11,103.16,122.22,-3.37
6d14d0a470e373b62b64ffc74e144ebf.png | F 49.7,50.27,58.83,133.01,-100.95 | op 1 | FULL
eb78141071e07b9b431c784bb8e071f9.png | F 52.21,42.09,66.18,89.57,-3.37 | op 1  | I 0,-5.59,100,131.4
e3b1a025ab042771024566a910bd765e.jpg | F 35.22,49.66,22.85,57.51,-3.37 | op 0.31 | I 0,-12.84,100,125.67
6b3ac0736b684cbaabf1cab14bd16098.jpg | F 35.22,49.66,22.85,57.51,-3.37 | op 0.32 | I -72.45,-8.72,231.49,109.05
be43ce97d102b8ec0aaea5db83822e0b.jpg | F 34.88,39.44,22.85,39.09,-3.37 | op 1  | I -72.45,-10.2,231.49,160.43
418503a1c8e7f1c623656acde854a062.png | F 59.48,71.43,4.98,8.86,-3.37  | op 1  | FULL
7805e2ae600aa427c15f603ccc13cb59.png | F 79.9,73.46,28.94,91.39,-3.37 | op 1  | FULL
11a473f868a0a212448efb8c254cf6a6.jpg | F 85.84,70.81,12.49,22.78,4.94 | op 1  | I -13.42,0,153.16,100
d1ab65bf91e864b5ca31fc67b8f17434.png | F 15.63,54.99,31.08,92.94,-13.11 | op 1 | I 0,0.01,100,105.75
31dc1b2ce52bdc54d3d50f558cb5bb29.jpg | F 16.62,55.92,13.76,39.79,-12.94 | op 1 | I 0,-4.32,100,109.54
4364b47913cc2077417c245fa239836b.png | F 79.54,58.6,11.54,4.36,-10.63 | op 1  | FULL
75ffc1093b8236b21f2acec4a06457be.png | F 20.84,28.71,16.53,30.51,-3.37 | op 1 | FULL
7bf404b8861056ac6e1004a8571581b4.png | F 73.42,74.14,10.83,14.9,-3.37 | op 1  | FULL
76dffd52e279f4b1972557a046c24b92.png | F 65.69,75.1,4.11,7.31,0       | op 1  | FULL
```

## Slide 3 — ReelGridSlide
Background layers:
```
6d14d0a470e373b62b64ffc74e144ebf.png | F 49.19,50.13,69.9,97.72,0 | op 1 | I 10.69,-13.6,78.62,127.19,-90
e54168e2da7d9c2ff176c938cc3bc513.jpg | F 50.01,50,100.03,99.97,0  | op 1 | I 0,-9.28,100,118.57
3718a3f9758688cfb9cbb5346fd93e39.png | F 50.01,73.66,100.03,209.22,0 | op 0.25 | I 0,-3.12,100,106.25
```
Twelve reel cells (all `rot 0`, `op 1`):
```
52d7091d793cc2397e9d7e643e2fa085.jpg | F 11.88,28.42,12.49,39.93 | I -5.18,-9.96,112.59,111.24
b5214f37e16d0ef68f9d7fb9a094d890.jpg | F 11.95,71.58,12.65,39.93 | I -1.12,-2.24,102.24,102.24
97dabd08a24a4c0e4c4ddaa853a84341.jpg | F 27.51,28.42,13.6,39.93  | I -0.6,-9.96,103.43,111.24
e343fae6420e6dba82c7d054ca4d110d.jpg | F 27.51,71.58,13.6,39.93  | I -1.12,-6.02,102.24,109.8
ebdb8aca30a60b92db4bdcee71a59115.jpg | F 43.04,71.58,12.65,39.93 | I -1.12,-2.24,102.24,102.24
35f847e69758c06a640faad5e2c92b61.jpg | F 43.04,28.42,12.65,39.93 | I 0,-1.12,102.24,102.24
a2b0945fd13567642484d13544b26375.jpg | F 58.11,71.58,12.65,39.93 | I -2.24,-1.12,102.24,102.24
d4850eaec612d101e835696660e7daaf.jpg | F 58.19,28.67,12.49,39.51 | I -1.12,0,102.24,102.24
3c22f1ee491da00378c8648a6a9523d9.jpg | F 73.11,28.93,12.65,39.93 | I -1.12,0,102.24,102.24
dbb882be9cd83db0af2f034923ade921.jpg | F 73.1,71.58,12.49,39.51  | I -2.24,-1.12,102.24,102.24
201ae13eef3951f41f60c4913753cc65.jpg | F 88.16,28.42,12.65,39.93 | I -1.12,0,102.24,102.24
2488326f1d6b38661513c9c65b055a9a.jpg | F 88.07,71.47,12.57,39.79 | I -2.24,-1.12,102.24,102.24
```

## Slide 4 — QuoteSlide
```
1f7f92328051482c72926ba1ed3de389.jpg | F 50.01,50,100.03,99.97,0   | op 1    | I 0,-66.74,100,267.09
efe0de4d7b6169b201032ac1bd29305c.png | F 50.01,5.89,100.03,11.81,0 | op 0.63 | FULL
```
Scroll-cue arrow: `CircleArrowIcon` in a `Layer` `cx 94.4 cy 90 w 2.85 h 5.06 rot 90`, opacity 0.59.

## Slide 5 — SocialsSlide
```
e1ba2c6912afabc092bbe126b9893851.jpg | F 50.01,50,100.03,99.97,0    | op 1 | I 21.86,-38.96,56.28,177.92,-90
82be7eef1d679391c81f496d17234718.jpg | F 47.38,45.75,105.32,108.55,0 | op 1 | FULL
df7bef257478f3708b8c7c9e022d4eb1.png | F 73.11,30.58,38.27,157.9,0  | op 1 | I -66.01,28.45,232.02,43.1,90
df7bef257478f3708b8c7c9e022d4eb1.png | F 80.88,30.58,38.27,157.9,0  | op 1 | I -66.01,28.45,232.02,43.1,90
```
Text, links and the two embeds are unchanged from `SocialsSlide.spec.md`.

## Slide 6 — ClosingSlide
```
2793edbcb9c0f882436bd82685ba4e64.png | F 50.01,50,100.03,99.97,0 | op 0.26 | I 0,0.02,100,119.97
dbf019df671f14e72e8b4b654b0f3c14.png | F 49.17,37.15,14.07,26.57,0 | op 1 | I -23.24,-33.92,147.75,174.07
fd8eba8e7454111d15187ed8f1ee66d4.png | F -2.53,8.93,10.04,62.43,90 | op 1 | I -0.15,0,196.85,100,-180 + iflipY
fd8eba8e7454111d15187ed8f1ee66d4.png | F 32.55,8.84,10.04,62.43,90 | op 1 | I -0.15,0,196.85,100,-180
fd8eba8e7454111d15187ed8f1ee66d4.png | F 67.4,8.19,10.04,62.43,90  | op 1 | I -0.15,0,196.85,100,-180
fd8eba8e7454111d15187ed8f1ee66d4.png | F 102.48,8.19,10.04,62.43,90 | op 1 | I -0.15,0,196.85,100,-180
```
Text layers and the 0.704 CTA-group opacity are unchanged.

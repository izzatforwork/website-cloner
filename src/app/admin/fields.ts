import type { SiteContent } from "@/lib/content/schema";

export type TextFieldMeta = { name: string; label: string; multiline?: boolean };
export type ImageFieldMeta = {
  name: string;
  label: string;
  /** Name of the paired nullable video field, if this image doubles as a click-to-play poster. */
  videoName?: string;
};
export type SlideSection = {
  key: keyof SiteContent;
  title: string;
  images: ImageFieldMeta[];
  texts: TextFieldMeta[];
};

export const REEL_COUNT = 12;

/** The three background images on the Reel Grid slide, outside the 12-cell reels array. */
export const REEL_GRID_IMAGES: ImageFieldMeta[] = [
  { name: "doily", label: "Lace doily" },
  { name: "paperTexture", label: "Paper texture" },
  { name: "overlay", label: "Overlay" },
];

/**
 * Admin form layout for the six non-reel-grid slides: which fields render as
 * text inputs vs. image/video uploaders, and their human-readable labels.
 * `reelGrid`'s 12-entry array is handled separately (see REEL_COUNT above)
 * since it repeats the same image+video pair rather than named fields.
 */
export const SLIDE_SECTIONS: SlideSection[] = [
  {
    key: "hero",
    title: "1. Hero",
    images: [
      { name: "heroPhoto", label: "Hero photo" },
      { name: "heroGradientOverlay", label: "Gradient overlay" },
      { name: "heroForegroundPhoto", label: "Foreground photo" },
    ],
    texts: [
      { name: "headline", label: "Headline", multiline: true },
      { name: "greeting", label: "Greeting (\"Hello Loveebirds!\")" },
      { name: "ctaLabel", label: "CTA label (\"TAP HERE TO\")" },
      { name: "ctaButtonText", label: "CTA button text (\"Book\")" },
    ],
  },
  {
    key: "storytellers",
    title: "2. Storytellers",
    images: [
      { name: "textureOverlay", label: "Texture overlay" },
      { name: "centerPhoto", label: "Centre photo" },
      { name: "leftPhoto", label: "Left photo" },
      { name: "rightPhoto", label: "Right photo" },
      { name: "laceBorderTop", label: "Lace border (top)" },
      { name: "laceBorderBottom", label: "Lace border (bottom)" },
    ],
    texts: [
      { name: "headlineLine1", label: "Headline, line 1" },
      { name: "headlineLine2", label: "Headline, line 2" },
      { name: "bodyText", label: "Body text", multiline: true },
      { name: "captionLine1", label: "Handwritten caption, line 1" },
      { name: "captionLine2", label: "Handwritten caption, line 2" },
    ],
  },
  {
    key: "scrapbook",
    title: "3. Scrapbook",
    images: [
      { name: "paperTexture", label: "Paper texture" },
      { name: "laceDoily", label: "Lace doily" },
      { name: "albumBinder", label: "Album binder" },
      { name: "bridePortrait", label: "Bride portrait" },
      { name: "albumPhoto1", label: "Album photo 1" },
      { name: "albumPhoto2", label: "Album photo 2" },
      { name: "waxSeal", label: "Wax seal" },
      { name: "polaroidFrameRight", label: "Polaroid frame (right)" },
      { name: "polaroidPhotoRight", label: "Polaroid photo (right)" },
      { name: "polaroidFrameLeft", label: "Polaroid frame (left)" },
      { name: "polaroidVideoPoster", label: "Polaroid poster (left) / click-to-play video", videoName: "polaroidVideoSrc" },
      { name: "tapeLabel", label: "\"Forever & always\" tape label" },
      { name: "laceCard", label: "\"Our Cerita\" lace card" },
      { name: "envelope", label: "Envelope" },
      { name: "postageStamp", label: "Postage stamp" },
    ],
    texts: [
      { name: "heading", label: "Handwritten heading", multiline: true },
      { name: "bodyTextRegular", label: "Body paragraph (regular)", multiline: true },
      { name: "bodyTextBold", label: "Body paragraph (bold)", multiline: true },
    ],
  },
  {
    key: "quote",
    title: "5. Quote",
    images: [
      { name: "photo", label: "Photo" },
      { name: "laceBorderTop", label: "Lace border (top)" },
    ],
    texts: [{ name: "quoteText", label: "Quote text", multiline: true }],
  },
  {
    key: "socials",
    title: "6. Socials",
    images: [
      { name: "backgroundPhoto", label: "Background photo" },
      { name: "mainPhoto", label: "Main photo" },
      { name: "decorativeOverlay1", label: "Decorative overlay 1" },
      { name: "decorativeOverlay2", label: "Decorative overlay 2" },
    ],
    texts: [
      { name: "sectionTitle", label: "Section title (\"follow our socials\")" },
      { name: "tagline", label: "Tagline" },
      { name: "tiktokLabel", label: "TikTok link text" },
      { name: "instagramLabel", label: "Instagram link text" },
    ],
  },
  {
    key: "closing",
    title: "7. Closing",
    images: [
      { name: "textureOverlay", label: "Texture overlay" },
      { name: "heartLogo", label: "Heart logo" },
      { name: "laceBandImage", label: "Lace band (used for all 4 strips)" },
    ],
    texts: [
      { name: "headlineWord1", label: "Headline word (\"Your\")" },
      { name: "calligraphyWord", label: "Calligraphy word (\"Cerita\")" },
      { name: "headlineLine2", label: "Headline, line 2" },
      { name: "headlineLine3", label: "Headline, line 3" },
      { name: "ctaLabel", label: "CTA label (\"TAP HERE TO\")" },
      { name: "ctaButtonText", label: "CTA button text (\"Book\")" },
      { name: "copyrightLine1", label: "Copyright line 1" },
      { name: "copyrightLine2", label: "Copyright line 2" },
      { name: "copyrightLine3", label: "Copyright line 3" },
    ],
  },
];

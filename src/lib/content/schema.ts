import { z } from "zod";

/**
 * Editable content for the ourcerita.co clone, one object per slide.
 *
 * Only wording (TextLayer children) and asset `src` values (ImageLayer / video)
 * live here — every layout/geometry number (cx, cy, w, h, rot, ix, iy, iw, ih,
 * size, lh, ls, opacity, etc.) stays hardcoded in the slide components and is
 * never exposed to the admin screen.
 */
export const siteContentSchema = z.object({
  hero: z.object({
    heroPhoto: z.string(),
    heroGradientOverlay: z.string(),
    heroForegroundPhoto: z.string(),
    headline: z.string(),
    ctaLabel: z.string(),
    ctaButtonText: z.string(),
    greeting: z.string(),
  }),
  storytellers: z.object({
    textureOverlay: z.string(),
    centerPhoto: z.string(),
    laceBorderBottom: z.string(),
    leftPhoto: z.string(),
    rightPhoto: z.string(),
    laceBorderTop: z.string(),
    bodyText: z.string(),
    headlineLine1: z.string(),
    headlineLine2: z.string(),
    captionLine1: z.string(),
    captionLine2: z.string(),
  }),
  scrapbook: z.object({
    paperTexture: z.string(),
    laceDoily: z.string(),
    albumBinder: z.string(),
    bridePortrait: z.string(),
    albumPhoto1: z.string(),
    albumPhoto2: z.string(),
    waxSeal: z.string(),
    polaroidFrameRight: z.string(),
    polaroidPhotoRight: z.string(),
    polaroidFrameLeft: z.string(),
    /** Poster image for the click-to-play clip shown in the left polaroid frame. */
    polaroidVideoPoster: z.string(),
    /** Null shows the poster image only, matching the site's current (video-less) behaviour. */
    polaroidVideoSrc: z.string().nullable(),
    tapeLabel: z.string(),
    laceCard: z.string(),
    envelope: z.string(),
    postageStamp: z.string(),
    heading: z.string(),
    bodyTextRegular: z.string(),
    bodyTextBold: z.string(),
  }),
  reelGrid: z.object({
    doily: z.string(),
    paperTexture: z.string(),
    overlay: z.string(),
    /** One entry per grid cell, same order as the geometry-only CELLS array in ReelGridSlide.tsx. */
    reels: z
      .array(
        z.object({
          src: z.string(),
          videoSrc: z.string().nullable(),
        }),
      )
      .length(12),
  }),
  quote: z.object({
    photo: z.string(),
    laceBorderTop: z.string(),
    quoteText: z.string(),
  }),
  socials: z.object({
    backgroundPhoto: z.string(),
    mainPhoto: z.string(),
    decorativeOverlay1: z.string(),
    decorativeOverlay2: z.string(),
    tagline: z.string(),
    sectionTitle: z.string(),
    tiktokLabel: z.string(),
    instagramLabel: z.string(),
  }),
  closing: z.object({
    textureOverlay: z.string(),
    heartLogo: z.string(),
    /** Single asset reused for all four repeated lace-band strips. */
    laceBandImage: z.string(),
    ctaLabel: z.string(),
    ctaButtonText: z.string(),
    headlineWord1: z.string(),
    headlineLine2: z.string(),
    headlineLine3: z.string(),
    calligraphyWord: z.string(),
    copyrightLine1: z.string(),
    copyrightLine2: z.string(),
    copyrightLine3: z.string(),
  }),
});

export type SiteContent = z.infer<typeof siteContentSchema>;

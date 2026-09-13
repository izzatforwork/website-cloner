import type { SiteContent } from "./schema";

const IMAGES = "/sites/ourcerita-co-e1f6b6c5/root-8a5edab2/images";

/**
 * The content baked into the slide components before the admin screen existed.
 * Rendered as-is until an admin saves an actual edit, so the site stays
 * pixel-identical to the original clone until then.
 */
export const defaultSiteContent: SiteContent = {
  hero: {
    heroPhoto: `${IMAGES}/9ab4bac109342992bc7b11f5be7cabf9.jpg`,
    heroGradientOverlay: `${IMAGES}/df7bef257478f3708b8c7c9e022d4eb1.png`,
    heroForegroundPhoto: `${IMAGES}/8c14f6a11d9fa327e328d4a4f07c2d08.png`,
    headline: "An aesthetic wedding & event content creation collective from Malaysia.",
    ctaLabel: "TAP HERE TO",
    ctaButtonText: "Book",
    greeting: "Hello Loveebirds!",
  },
  storytellers: {
    textureOverlay: `${IMAGES}/2793edbcb9c0f882436bd82685ba4e64.png`,
    centerPhoto: `${IMAGES}/35a046a1c2304bb688405b34c5092af0.jpg`,
    laceBorderBottom: `${IMAGES}/efe0de4d7b6169b201032ac1bd29305c.png`,
    leftPhoto: `${IMAGES}/b692962ee0b05714c83bc8823bf85460.jpg`,
    rightPhoto: `${IMAGES}/35860d24e2410e79375f1fe0f9726085.jpg`,
    laceBorderTop: `${IMAGES}/efe0de4d7b6169b201032ac1bd29305c.png`,
    bodyText:
      "Beyond the big highlights, we’re looking for the honest, unpolished moments that make your\n" +
      "story yours. We provide high-end, intentional content creation that feels like a core memory,\n" +
      "giving you a library of raw clips and ready-to-post photos the very next morning.While you’re\n" +
      "busy living the best day of your life, we’re catching the raw, unscripted “cerita” of it all.",
    headlineLine1: "Storytellers for the New",
    headlineLine2: "Romantic",
    captionLine1: "From the archive",
    captionLine2: "of live moment...",
  },
  scrapbook: {
    paperTexture: `${IMAGES}/e54168e2da7d9c2ff176c938cc3bc513.jpg`,
    laceDoily: `${IMAGES}/6d14d0a470e373b62b64ffc74e144ebf.png`,
    albumBinder: `${IMAGES}/eb78141071e07b9b431c784bb8e071f9.png`,
    bridePortrait: `${IMAGES}/e3b1a025ab042771024566a910bd765e.jpg`,
    albumPhoto1: `${IMAGES}/6b3ac0736b684cbaabf1cab14bd16098.jpg`,
    albumPhoto2: `${IMAGES}/be43ce97d102b8ec0aaea5db83822e0b.jpg`,
    waxSeal: `${IMAGES}/418503a1c8e7f1c623656acde854a062.png`,
    polaroidFrameRight: `${IMAGES}/7805e2ae600aa427c15f603ccc13cb59.png`,
    polaroidPhotoRight: `${IMAGES}/11a473f868a0a212448efb8c254cf6a6.jpg`,
    polaroidFrameLeft: `${IMAGES}/d1ab65bf91e864b5ca31fc67b8f17434.png`,
    polaroidVideoPoster: `${IMAGES}/31dc1b2ce52bdc54d3d50f558cb5bb29.jpg`,
    polaroidVideoSrc: null,
    tapeLabel: `${IMAGES}/4364b47913cc2077417c245fa239836b.png`,
    laceCard: `${IMAGES}/75ffc1093b8236b21f2acec4a06457be.png`,
    envelope: `${IMAGES}/7bf404b8861056ac6e1004a8571581b4.png`,
    postageStamp: `${IMAGES}/76dffd52e279f4b1972557a046c24b92.png`,
    heading: "We adding bestie’s point of\nview on your big day!",
    bodyTextRegular:
      "From the first \"yes\" to the final\n" +
      "celebration, we provide comprehensive\n" +
      "cinematic coverage for your Engagement,\n" +
      "Solemnization, Wedding Ceremonies, and\n" +
      "every milestone of  love in between.",
    bodyTextBold:
      "Live updates, elevated. We merge the art of\n" +
      "still photography with the motion of Reels\n" +
      "to bring your Instagram Stories to life.",
  },
  reelGrid: {
    doily: `${IMAGES}/6d14d0a470e373b62b64ffc74e144ebf.png`,
    paperTexture: `${IMAGES}/e54168e2da7d9c2ff176c938cc3bc513.jpg`,
    overlay: `${IMAGES}/3718a3f9758688cfb9cbb5346fd93e39.png`,
    reels: [
      { src: `${IMAGES}/52d7091d793cc2397e9d7e643e2fa085.jpg`, videoSrc: null },
      { src: `${IMAGES}/b5214f37e16d0ef68f9d7fb9a094d890.jpg`, videoSrc: null },
      { src: `${IMAGES}/97dabd08a24a4c0e4c4ddaa853a84341.jpg`, videoSrc: null },
      { src: `${IMAGES}/e343fae6420e6dba82c7d054ca4d110d.jpg`, videoSrc: null },
      { src: `${IMAGES}/ebdb8aca30a60b92db4bdcee71a59115.jpg`, videoSrc: null },
      { src: `${IMAGES}/35f847e69758c06a640faad5e2c92b61.jpg`, videoSrc: null },
      { src: `${IMAGES}/a2b0945fd13567642484d13544b26375.jpg`, videoSrc: null },
      { src: `${IMAGES}/d4850eaec612d101e835696660e7daaf.jpg`, videoSrc: null },
      { src: `${IMAGES}/3c22f1ee491da00378c8648a6a9523d9.jpg`, videoSrc: null },
      { src: `${IMAGES}/dbb882be9cd83db0af2f034923ade921.jpg`, videoSrc: null },
      { src: `${IMAGES}/201ae13eef3951f41f60c4913753cc65.jpg`, videoSrc: null },
      { src: `${IMAGES}/2488326f1d6b38661513c9c65b055a9a.jpg`, videoSrc: null },
    ],
  },
  quote: {
    photo: `${IMAGES}/1f7f92328051482c72926ba1ed3de389.jpg`,
    laceBorderTop: `${IMAGES}/efe0de4d7b6169b201032ac1bd29305c.png`,
    quoteText: "Every chapter of  your journey, every fleeting moment—your story becomes Our Cerita.",
  },
  socials: {
    backgroundPhoto: `${IMAGES}/e1ba2c6912afabc092bbe126b9893851.jpg`,
    mainPhoto: `${IMAGES}/82be7eef1d679391c81f496d17234718.jpg`,
    decorativeOverlay1: `${IMAGES}/df7bef257478f3708b8c7c9e022d4eb1.png`,
    decorativeOverlay2: `${IMAGES}/df7bef257478f3708b8c7c9e022d4eb1.png`,
    tagline: "We don’t just document days; we archive emotions.",
    sectionTitle: "follow our socials",
    tiktokLabel: "https://www.tiktok.com/@ourcerita.co",
    instagramLabel: "https://www.instagram.com/ourcerita.co",
  },
  closing: {
    textureOverlay: `${IMAGES}/2793edbcb9c0f882436bd82685ba4e64.png`,
    heartLogo: `${IMAGES}/dbf019df671f14e72e8b4b654b0f3c14.png`,
    laceBandImage: `${IMAGES}/fd8eba8e7454111d15187ed8f1ee66d4.png`,
    ctaLabel: "TAP HERE TO",
    ctaButtonText: "Book",
    headlineWord1: "Your",
    headlineLine2: "deserves to be told.",
    headlineLine3: "Let’s start here.",
    calligraphyWord: "Cerita",
    copyrightLine1: "© 2026 Our Cerita Co. Wedding Content Creator",
    copyrightLine2: "Based in Malaysia | All Rights Reserved",
    copyrightLine3: "[003842084-D] BY OUR STORY SIGNATURE",
  },
};

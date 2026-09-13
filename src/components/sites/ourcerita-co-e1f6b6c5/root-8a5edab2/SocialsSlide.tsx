import { Slide, Layer, TextLayer, ImageLayer } from "@/components/sites/ourcerita-co-e1f6b6c5/shared/Slide";
import type { SiteContent } from "@/lib/content/schema";

/** Slide 5 — "follow our socials": night photo, links, and two live embeds. */
export function SocialsSlide({ content }: { content: SiteContent["socials"] }) {
  return (
    <Slide style={{ backgroundColor: "rgb(116, 9, 32)" }}>
      <ImageLayer
        cx={50.01}
        cy={50}
        w={100.03}
        h={99.97}
        src={content.backgroundPhoto}
        ix={21.86}
        iy={-38.96}
        iw={56.28}
        ih={177.92}
        irot={-90}
      />

      <ImageLayer
        cx={47.38}
        cy={45.75}
        w={105.32}
        h={108.55}
        src={content.mainPhoto}
      />

      <ImageLayer
        cx={73.11}
        cy={30.58}
        w={38.27}
        h={157.9}
        src={content.decorativeOverlay1}
        ix={-66.01}
        iy={28.45}
        iw={232.02}
        ih={43.1}
        irot={90}
      />

      <ImageLayer
        cx={80.88}
        cy={30.58}
        w={38.27}
        h={157.9}
        src={content.decorativeOverlay2}
        ix={-66.01}
        iy={28.45}
        iw={232.02}
        ih={43.1}
        irot={90}
      />

      <TextLayer
        cx={22.99}
        cy={9.39}
        w={33.83}
        size={1.903}
        lh={1.823}
        className="text-center whitespace-nowrap"
        style={{ fontFamily: "oc-serif", color: "rgb(255, 255, 255)" }}
      >
        {content.tagline}
      </TextLayer>

      <TextLayer
        cx={16.28}
        cy={16.41}
        w={19.65}
        size={3.342}
        lh={3.336}
        className="text-center whitespace-nowrap italic"
        style={{ fontFamily: "oc-serif", color: "rgb(255, 255, 255)" }}
      >
        {content.sectionTitle}
      </TextLayer>

      <TextLayer
        cx={14.71}
        cy={22.71}
        w={17.1}
        size={1.221}
        lh={1.689}
        className="text-center whitespace-nowrap underline"
        style={{ fontFamily: "oc-sans", color: "rgb(254, 236, 237)" }}
      >
        <a href="https://www.tiktok.com/@ourcerita.co" target="_blank" rel="noopener noreferrer">
          {content.tiktokLabel}
        </a>
      </TextLayer>

      <TextLayer
        cx={15.1}
        cy={26.83}
        w={18.01}
        size={1.221}
        lh={1.684}
        className="text-center whitespace-nowrap underline"
        style={{ fontFamily: "oc-sans", color: "rgb(254, 236, 237)" }}
      >
        <a href="https://www.instagram.com/ourcerita.co" target="_blank" rel="noopener noreferrer">
          {content.instagramLabel}
        </a>
      </TextLayer>

      <Layer cx={81.7} cy={25.95} w={25.4} h={38.92} className="bg-white">
        <iframe
          src="https://www.tiktok.com/embed/@ourcerita.co"
          title="TikTok — @ourcerita.co"
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          className="h-full w-full border-0"
        />
      </Layer>

      <Layer cx={81.71} cy={69.55} w={25.39} h={47.94} className="bg-white">
        <iframe
          src="https://www.instagram.com/ourcerita.co/embed"
          title="Instagram — @ourcerita.co"
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          className="h-full w-full border-0"
        />
      </Layer>
    </Slide>
  );
}

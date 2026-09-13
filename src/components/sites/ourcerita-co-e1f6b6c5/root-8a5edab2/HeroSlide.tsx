import { Slide, Layer, TextLayer, ImageLayer, renderLines } from "@/components/sites/ourcerita-co-e1f6b6c5/shared/Slide";
import { CircleArrowIcon, PillOutline } from "@/components/sites/ourcerita-co-e1f6b6c5/shared/icons";
import type { SiteContent } from "@/lib/content/schema";

/** Slide 0 — the ourcerita.co hero: ceremony photo, wordmark, strapline and WhatsApp CTA. */
export function HeroSlide({ content }: { content: SiteContent["hero"] }) {
  return (
    <Slide style={{ backgroundColor: "rgb(93, 23, 24)" }}>
      <ImageLayer
        cx={50.01}
        cy={50}
        w={100.03}
        h={99.97}
        src={content.heroPhoto}
        iy={-16.61}
        ih={118.57}
        opacity={1}
        priority
      />

      <ImageLayer
        cx={50.46}
        cy={71.94}
        w={100.03}
        h={76.77}
        src={content.heroGradientOverlay}
        iflipY
        opacity={0.45}
      />

      <ImageLayer
        cx={47.51}
        cy={46.77}
        w={44.2}
        h={55.26}
        src={content.heroForegroundPhoto}
        ix={-3.83}
        iy={-21.89}
        iw={108.77}
        ih={154.71}
        opacity={1}
      />

      <TextLayer
        cx={50.02}
        cy={11.84}
        w={44.34}
        size={1.797}
        lh={1.738}
        className="text-center whitespace-nowrap"
        style={{ fontFamily: "oc-serif", color: "rgb(255,255,255)" }}
      >
        {renderLines(content.headline)}
      </TextLayer>

      <a href="https://wa.link/vv4mqr" target="_blank" rel="noopener noreferrer">
        <Layer cx={59.08} cy={83.27} w={21.1} h={5.74}>
          <PillOutline className="h-full w-full text-white" />
        </Layer>

        <TextLayer
          cx={55.57}
          cy={83.65}
          w={9.6}
          size={1.786}
          lh={2.491}
          className="text-center whitespace-nowrap"
          style={{ fontFamily: "oc-serif", color: "rgb(255,255,255)" }}
        >
          {content.ctaLabel}
        </TextLayer>

        <TextLayer
          cx={64.54}
          cy={83.59}
          w={6.6}
          size={3.445}
          lh={4.82}
          className="text-center whitespace-nowrap"
          style={{ fontFamily: "oc-script", color: "rgb(255,255,255)" }}
        >
          {content.ctaButtonText}
        </TextLayer>
      </a>

      <TextLayer
        cx={36.74}
        cy={83.65}
        w={18.18}
        size={3.662}
        lh={2.193}
        className="text-center whitespace-nowrap"
        style={{ fontFamily: "oc-hand", color: "rgb(228,227,224)" }}
      >
        {content.greeting}
      </TextLayer>

      <Layer cx={94.4} cy={91.26} w={1.42} h={2.53} rot={90} style={{ opacity: 0.428 }}>
        <CircleArrowIcon className="h-full w-full text-white" />
      </Layer>
    </Slide>
  );
}

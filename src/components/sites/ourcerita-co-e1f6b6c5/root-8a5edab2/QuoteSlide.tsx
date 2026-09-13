import { Slide, Layer, TextLayer, ImageLayer } from "@/components/sites/ourcerita-co-e1f6b6c5/shared/Slide";
import { CircleArrowIcon } from "@/components/sites/ourcerita-co-e1f6b6c5/shared/icons";
import type { SiteContent } from "@/lib/content/schema";

/**
 * Slide 4 of the ourcerita.co canvas — the full-bleed black-and-white embrace
 * photo with the white serif quote and the lace border strip along the top.
 */
export function QuoteSlide({ content }: { content: SiteContent["quote"] }) {
  return (
    <Slide style={{ backgroundColor: "rgb(93, 23, 24)" }}>
      <ImageLayer
        cx={50.01}
        cy={50}
        w={100.03}
        h={99.97}
        src={content.photo}
        ix={0}
        iy={-66.74}
        iw={100}
        ih={267.09}
        opacity={1}
      />

      <Layer cx={94.4} cy={90} w={2.85} h={5.06} rot={90} style={{ opacity: 0.59 }}>
        <CircleArrowIcon className="h-full w-full text-white" />
      </Layer>

      <TextLayer
        cx={49.98}
        cy={49.9}
        w={65.4}
        size={2.333}
        lh={1.859}
        ls={-0.065}
        className="text-center whitespace-nowrap"
        style={{ fontFamily: "oc-serif", color: "rgb(255, 255, 255)" }}
      >
        {content.quoteText}
      </TextLayer>

      <ImageLayer
        cx={50.01}
        cy={5.89}
        w={100.03}
        h={11.81}
        src={content.laceBorderTop}
        opacity={0.63}
      />
    </Slide>
  );
}

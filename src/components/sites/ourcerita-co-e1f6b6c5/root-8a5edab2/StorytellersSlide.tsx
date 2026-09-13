import { Slide, ImageLayer, TextLayer, renderLines } from "@/components/sites/ourcerita-co-e1f6b6c5/shared/Slide";
import type { SiteContent } from "@/lib/content/schema";

/** Slide 1 of ourcerita.co — the "Storytellers for the New Romantic" hero. */
export function StorytellersSlide({ content }: { content: SiteContent["storytellers"] }) {
  return (
    <Slide style={{ backgroundColor: "rgb(93, 23, 24)" }}>
      {/* 1 — red damask texture */}
      <ImageLayer
        cx={50.01}
        cy={50}
        w={100.03}
        h={99.97}
        src={content.textureOverlay}
        ix={0}
        iy={0.02}
        iw={100}
        ih={119.97}
        opacity={0.26}
        priority
      />

      {/* 2 — centre photo, banquet hall */}
      <ImageLayer
        cx={49.84}
        cy={45.08}
        w={37.01}
        h={41.34}
        src={content.centerPhoto}
        ix={0}
        iy={-3.06}
        iw={100}
        ih={106.12}
      />

      {/* 3 — body copy */}
      <TextLayer
        cx={50.01}
        cy={80.66}
        w={62}
        size={1.877}
        lh={2.039}
        className="text-center whitespace-nowrap"
        style={{ fontFamily: "oc-serif", color: "#ffffff" }}
      >
        {renderLines(content.bodyText)}
      </TextLayer>

      {/* 4 — lace border strip, bottom */}
      <ImageLayer
        cx={49.94}
        cy={94.04}
        w={100.03}
        h={11.81}
        src={content.laceBorderBottom}
        iflipY
        opacity={0.63}
      />

      {/* 5 — left photo, aisle exit */}
      <ImageLayer
        cx={18.48}
        cy={44.12}
        w={23.09}
        h={27.42}
        src={content.leftPhoto}
        ix={-0.15}
        iy={-14.81}
        iw={115.07}
        ih={114.87}
      />

      {/* 6 — right photo, confetti */}
      <ImageLayer
        cx={81.46}
        cy={44.12}
        w={23.88}
        h={28.26}
        src={content.rightPhoto}
      />

      {/* 7 — headline, first run */}
      <TextLayer
        cx={40.34}
        cy={12.56}
        w={45.89}
        size={5.576}
        lh={6.009}
        ls={0.346}
        className="text-center whitespace-nowrap"
        style={{ fontFamily: "oc-calligraphy", color: "rgb(228,227,224)" }}
      >
        {content.headlineLine1}
      </TextLayer>

      {/* 8 — headline, second run (deliberate gap in the original) */}
      <TextLayer
        cx={75.45}
        cy={12.56}
        w={18.3}
        size={5.576}
        lh={6.009}
        ls={0.346}
        className="text-center whitespace-nowrap"
        style={{ fontFamily: "oc-calligraphy", color: "rgb(228,227,224)" }}
      >
        {content.headlineLine2}
      </TextLayer>

      {/* 9 — handwritten caption, line 1 */}
      <TextLayer
        cx={61.97}
        cy={59.13}
        w={10.07}
        rot={-5.12}
        size={2.255}
        lh={1.35}
        className="text-center whitespace-nowrap"
        style={{ fontFamily: "oc-hand", color: "rgb(228,227,224)" }}
      >
        {content.captionLine1}
      </TextLayer>

      {/* 10 — handwritten caption, line 2 */}
      <TextLayer
        cx={62.35}
        cy={61.48}
        w={8.61}
        rot={-5.12}
        size={2.255}
        lh={1.35}
        className="text-center whitespace-nowrap"
        style={{ fontFamily: "oc-hand", color: "rgb(228,227,224)" }}
      >
        {content.captionLine2}
      </TextLayer>

      {/* 11 — lace border strip, top */}
      <ImageLayer
        cx={49.84}
        cy={5.89}
        w={100.03}
        h={11.81}
        src={content.laceBorderTop}
        opacity={0.63}
      />
    </Slide>
  );
}

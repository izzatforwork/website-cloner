import { Slide, Layer, TextLayer, ImageLayer } from "@/components/sites/ourcerita-co-e1f6b6c5/shared/Slide";
import { PillOutline } from "@/components/sites/ourcerita-co-e1f6b6c5/shared/icons";
import type { SiteContent } from "@/lib/content/schema";

/** Lace band repeated four times across the top of the slide — geometry only, content.closing.laceBandImage supplies the src. */
const LACE_BAND = [
  { cx: -2.53, cy: 8.93, w: 10.04, h: 62.43, rot: 90, ix: -0.15, iy: 0, iw: 196.85, ih: 100, irot: -180, iflipY: true },
  { cx: 32.55, cy: 8.84, w: 10.04, h: 62.43, rot: 90, ix: -0.15, iy: 0, iw: 196.85, ih: 100, irot: -180, iflipY: false },
  { cx: 67.4, cy: 8.19, w: 10.04, h: 62.43, rot: 90, ix: -0.15, iy: 0, iw: 196.85, ih: 100, irot: -180, iflipY: false },
  { cx: 102.48, cy: 8.19, w: 10.04, h: 62.43, rot: 90, ix: -0.15, iy: 0, iw: 196.85, ih: 100, irot: -180, iflipY: false },
];

/** Display type shared by the closing headline lines. */
const DISPLAY = { fontFamily: "oc-display", color: "rgb(228,227,224)", textTransform: "uppercase" as const };

/** Slide 6 — the closing call-to-action slide with the lace-framed heart logo. */
export function ClosingSlide({ content }: { content: SiteContent["closing"] }) {
  return (
    <Slide style={{ backgroundColor: "rgb(93, 23, 24)" }}>
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
      />

      <a href="https://wa.link/vv4mqr" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.704 }}>
        <TextLayer
          cx={46.31}
          cy={73.11}
          w={7.83}
          size={1.457}
          lh={2.031}
          className="text-center whitespace-nowrap"
          style={{ fontFamily: "oc-serif", color: "rgb(255,255,255)" }}
        >
          {content.ctaLabel}
        </TextLayer>
        <TextLayer
          cx={53.62}
          cy={73.06}
          w={5.38}
          size={2.809}
          lh={3.93}
          className="text-center whitespace-nowrap"
          style={{ fontFamily: "oc-script", color: "rgb(255,255,255)" }}
        >
          {content.ctaButtonText}
        </TextLayer>
        <Layer cx={49.17} cy={72.79} w={17.21} h={4.68}>
          <PillOutline className="h-full w-full text-white" />
        </Layer>
      </a>

      <ImageLayer
        cx={49.17}
        cy={37.15}
        w={14.07}
        h={26.57}
        src={content.heartLogo}
        ix={-23.24}
        iy={-33.92}
        iw={147.75}
        ih={174.07}
        opacity={1}
      />

      <TextLayer
        cx={25.81}
        cy={57.86}
        w={8.68}
        size={3.418}
        lh={3.641}
        ls={0.212}
        className="text-center whitespace-nowrap"
        style={DISPLAY}
      >
        {content.headlineWord1}
      </TextLayer>
      <TextLayer
        cx={61.17}
        cy={57.86}
        w={35.19}
        size={3.418}
        lh={3.641}
        ls={0.212}
        className="text-center whitespace-nowrap"
        style={DISPLAY}
      >
        {content.headlineLine2}
      </TextLayer>
      <TextLayer
        cx={49.67}
        cy={64.33}
        w={27.64}
        size={3.418}
        lh={3.641}
        ls={0.212}
        className="text-center whitespace-nowrap"
        style={DISPLAY}
      >
        {content.headlineLine3}
      </TextLayer>

      <TextLayer
        cx={36.47}
        cy={57.51}
        w={12.38}
        size={6.742}
        lh={9.404}
        className="text-center whitespace-nowrap"
        style={{ fontFamily: "oc-calligraphy", color: "rgb(255,255,255)" }}
      >
        {content.calligraphyWord}
      </TextLayer>

      <TextLayer
        cx={50.01}
        cy={88.01}
        w={22.17}
        size={1.18}
        lh={1.645}
        className="text-center whitespace-nowrap"
        style={{ fontFamily: "oc-sans", fontWeight: 700, color: "rgb(255,255,255)" }}
      >
        {content.copyrightLine1}
      </TextLayer>
      <TextLayer
        cx={50.02}
        cy={90.94}
        w={17.9}
        size={1.18}
        lh={1.645}
        className="text-center whitespace-nowrap"
        style={{ fontFamily: "oc-sans", fontWeight: 700, color: "rgb(255,255,255)" }}
      >
        {content.copyrightLine2}
      </TextLayer>
      <TextLayer
        cx={50.01}
        cy={93.4}
        w={12.83}
        size={0.789}
        lh={1.053}
        className="text-center whitespace-nowrap"
        style={{ fontFamily: "oc-sans", fontWeight: 400, color: "rgb(255,255,255)" }}
      >
        {content.copyrightLine3}
      </TextLayer>

      {LACE_BAND.map((band) => (
        <ImageLayer
          key={`${band.cx}-${band.cy}`}
          cx={band.cx}
          cy={band.cy}
          w={band.w}
          h={band.h}
          rot={band.rot}
          src={content.laceBandImage}
          ix={band.ix}
          iy={band.iy}
          iw={band.iw}
          ih={band.ih}
          irot={band.irot}
          iflipY={band.iflipY}
          opacity={1}
        />
      ))}
    </Slide>
  );
}

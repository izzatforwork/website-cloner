import { Slide, TextLayer, ImageLayer, Layer, renderLines } from "@/components/sites/ourcerita-co-e1f6b6c5/shared/Slide";
import type { SiteContent } from "@/lib/content/schema";

/**
 * Slide 2 — the scrapbook collage: an open photo album on a paper ground with
 * polaroids, a doily, a stamp, a wax seal and an envelope layered over it,
 * alongside the handwritten heading and the two service paragraphs.
 */
export function ScrapbookSlide({ content }: { content: SiteContent["scrapbook"] }) {
  return (
    <Slide style={{ backgroundColor: "rgb(255, 255, 255)" }}>
      {/* 1 — paper texture ground */}
      <ImageLayer
        src={content.paperTexture}
        cx={50.01}
        cy={50}
        w={100.03}
        h={99.97}
        ix={-1.58}
        iy={-11.11}
        iw={103.16}
        ih={122.22}
        irot={-3.37}
      />

      {/* 2 — lace doily */}
      <ImageLayer
        src={content.laceDoily}
        cx={49.7}
        cy={50.27}
        w={58.83}
        h={133.01}
        rot={-100.95}
      />

      {/* 3 — open album / binder */}
      <ImageLayer
        src={content.albumBinder}
        cx={52.21}
        cy={42.09}
        w={66.18}
        h={89.57}
        rot={-3.37}
        iy={-5.59}
        ih={131.4}
      />

      {/* 4 — bride portrait, left page */}
      <ImageLayer
        src={content.bridePortrait}
        cx={35.22}
        cy={49.66}
        w={22.85}
        h={57.51}
        rot={-3.37}
        opacity={0.31}
        iy={-12.84}
        ih={125.67}
      />

      {/* 5 — album page photo */}
      <ImageLayer
        src={content.albumPhoto1}
        cx={35.22}
        cy={49.66}
        w={22.85}
        h={57.51}
        rot={-3.37}
        opacity={0.32}
        ix={-72.45}
        iy={-8.72}
        iw={231.49}
        ih={109.05}
      />

      {/* 6 — album page photo (overlay) */}
      <ImageLayer
        src={content.albumPhoto2}
        cx={34.88}
        cy={39.44}
        w={22.85}
        h={39.09}
        rot={-3.37}
        ix={-72.45}
        iy={-10.2}
        iw={231.49}
        ih={160.43}
      />

      {/* 7 — wax seal */}
      <ImageLayer
        src={content.waxSeal}
        cx={59.48}
        cy={71.43}
        w={4.98}
        h={8.86}
        rot={-3.37}
      />

      {/* 8 — polaroid frame, right */}
      <ImageLayer
        src={content.polaroidFrameRight}
        cx={79.9}
        cy={73.46}
        w={28.94}
        h={91.39}
        rot={-3.37}
      />

      {/* 9 — B&W couple photo in that frame */}
      <ImageLayer
        src={content.polaroidPhotoRight}
        cx={85.84}
        cy={70.81}
        w={12.49}
        h={22.78}
        rot={4.94}
        ix={-13.42}
        iw={153.16}
      />

      {/* 10 — polaroid frame, left */}
      <ImageLayer
        src={content.polaroidFrameLeft}
        cx={15.63}
        cy={54.99}
        w={31.08}
        h={92.94}
        rot={-13.11}
        iy={0.01}
        ih={105.75}
      />

      {/* 11 — still inside that frame: click-to-play video when an admin has set one (same frame geometry), otherwise the poster photo */}
      {content.polaroidVideoSrc ? (
        <Layer cx={16.62} cy={55.92} w={13.76} h={39.79} rot={-12.94} className="overflow-hidden">
          <video
            src={content.polaroidVideoSrc}
            poster={content.polaroidVideoPoster}
            muted
            playsInline
            controls
            className="absolute w-full"
            style={{ top: "-4.32%", height: "109.54%", objectFit: "fill" }}
          />
        </Layer>
      ) : (
        <ImageLayer
          src={content.polaroidVideoPoster}
          cx={16.62}
          cy={55.92}
          w={13.76}
          h={39.79}
          rot={-12.94}
          iy={-4.32}
          ih={109.54}
        />
      )}

      {/* 12 — "forever & always" tape label */}
      <ImageLayer
        src={content.tapeLabel}
        cx={79.54}
        cy={58.6}
        w={11.54}
        h={4.36}
        rot={-10.63}
      />

      {/* 13 — "our Cerita" lace card */}
      <ImageLayer
        src={content.laceCard}
        cx={20.84}
        cy={28.71}
        w={16.53}
        h={30.51}
        rot={-3.37}
      />

      {/* 14 — kraft envelope */}
      <ImageLayer
        src={content.envelope}
        cx={73.42}
        cy={74.14}
        w={10.83}
        h={14.9}
        rot={-3.37}
      />

      {/* 15 — orchid postage stamp */}
      <ImageLayer
        src={content.postageStamp}
        cx={65.69}
        cy={75.1}
        w={4.11}
        h={7.31}
      />

      {/* handwritten heading */}
      <TextLayer
        cx={67.72}
        cy={25.31}
        w={23.95}
        size={3.644}
        lh={2.169}
        rot={-8.5}
        className="text-center whitespace-nowrap"
        style={{ fontFamily: "oc-hand", color: "rgb(20,18,11)" }}
      >
        {renderLines(content.heading)}
      </TextLayer>

      {/* body paragraph */}
      <TextLayer
        cx={68.94}
        cy={38.55}
        w={18.52}
        size={1.29}
        lh={1.097}
        rot={-3.37}
        className="text-center whitespace-nowrap"
        style={{ fontFamily: "oc-serif", fontWeight: 400, color: "rgb(0,0,0)" }}
      >
        {renderLines(content.bodyTextRegular)}
      </TextLayer>

      {/* bold paragraph */}
      <TextLayer
        cx={69.66}
        cy={49}
        w={19.75}
        size={1.29}
        lh={1.093}
        rot={-3.37}
        className="text-center whitespace-nowrap"
        style={{ fontFamily: "oc-serif", fontWeight: 700, color: "rgb(0,0,0)" }}
      >
        {renderLines(content.bodyTextBold)}
      </TextLayer>
    </Slide>
  );
}

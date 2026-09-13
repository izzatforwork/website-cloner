import { Slide, ImageLayer, Layer } from "@/components/sites/ourcerita-co-e1f6b6c5/shared/Slide";
import type { SiteContent } from "@/lib/content/schema";

type Cell = {
  /** Crop frame: centre and size as percentages of the slide. */
  cx: number;
  cy: number;
  w: number;
  h: number;
  /** Inner picture placement, as percentages of the frame. */
  ix: number;
  iy: number;
  iw: number;
  ih: number;
};

/** Geometry only, one entry per grid cell — content.reelGrid.reels supplies the src/videoSrc in the same order. */
const CELLS: readonly Cell[] = [
  { cx: 11.88, cy: 28.42, w: 12.49, h: 39.93, ix: -5.18, iy: -9.96, iw: 112.59, ih: 111.24 },
  { cx: 11.95, cy: 71.58, w: 12.65, h: 39.93, ix: -1.12, iy: -2.24, iw: 102.24, ih: 102.24 },
  { cx: 27.51, cy: 28.42, w: 13.6, h: 39.93, ix: -0.6, iy: -9.96, iw: 103.43, ih: 111.24 },
  { cx: 27.51, cy: 71.58, w: 13.6, h: 39.93, ix: -1.12, iy: -6.02, iw: 102.24, ih: 109.8 },
  { cx: 43.04, cy: 71.58, w: 12.65, h: 39.93, ix: -1.12, iy: -2.24, iw: 102.24, ih: 102.24 },
  { cx: 43.04, cy: 28.42, w: 12.65, h: 39.93, ix: 0, iy: -1.12, iw: 102.24, ih: 102.24 },
  { cx: 58.11, cy: 71.58, w: 12.65, h: 39.93, ix: -2.24, iy: -1.12, iw: 102.24, ih: 102.24 },
  { cx: 58.19, cy: 28.67, w: 12.49, h: 39.51, ix: -1.12, iy: 0, iw: 102.24, ih: 102.24 },
  { cx: 73.11, cy: 28.93, w: 12.65, h: 39.93, ix: -1.12, iy: 0, iw: 102.24, ih: 102.24 },
  { cx: 73.1, cy: 71.58, w: 12.49, h: 39.51, ix: -2.24, iy: -1.12, iw: 102.24, ih: 102.24 },
  { cx: 88.16, cy: 28.42, w: 12.65, h: 39.93, ix: -1.12, iy: 0, iw: 102.24, ih: 102.24 },
  { cx: 88.07, cy: 71.47, w: 12.57, h: 39.79, ix: -2.24, iy: -1.12, iw: 102.24, ih: 102.24 },
];

/**
 * Slide 3 — a 6x2 grid of portrait reel stills over the paper/doily ground.
 * Each cell has its own measured clipping frame plus an inner crop offset, so
 * they are driven from CELLS (geometry) zipped with content.reelGrid.reels
 * (src/videoSrc) rather than a uniform grid.
 */
export function ReelGridSlide({ content }: { content: SiteContent["reelGrid"] }) {
  return (
    <Slide style={{ backgroundColor: "rgb(255, 255, 255)" }}>
      <ImageLayer
        cx={49.19}
        cy={50.13}
        w={69.9}
        h={97.72}
        src={content.doily}
        ix={10.69}
        iy={-13.6}
        iw={78.62}
        ih={127.19}
        irot={-90}
      />
      <ImageLayer
        cx={50.01}
        cy={50}
        w={100.03}
        h={99.97}
        src={content.paperTexture}
        ix={0}
        iy={-9.28}
        iw={100}
        ih={118.57}
      />
      <ImageLayer
        cx={50.01}
        cy={73.66}
        w={100.03}
        h={209.22}
        src={content.overlay}
        ix={0}
        iy={-3.12}
        iw={100}
        ih={106.25}
        opacity={0.25}
      />
      {CELLS.map((cell, i) => {
        const reel = content.reels[i];
        return reel.videoSrc ? (
          <Layer key={i} cx={cell.cx} cy={cell.cy} w={cell.w} h={cell.h} className="overflow-hidden">
            <video
              src={reel.videoSrc}
              poster={reel.src}
              muted
              playsInline
              controls
              className="absolute w-full"
              style={{ left: `${cell.ix}%`, top: `${cell.iy}%`, width: `${cell.iw}%`, height: `${cell.ih}%`, objectFit: "fill" }}
            />
          </Layer>
        ) : (
          <ImageLayer
            key={i}
            cx={cell.cx}
            cy={cell.cy}
            w={cell.w}
            h={cell.h}
            src={reel.src}
            ix={cell.ix}
            iy={cell.iy}
            iw={cell.iw}
            ih={cell.ih}
          />
        );
      })}
    </Slide>
  );
}

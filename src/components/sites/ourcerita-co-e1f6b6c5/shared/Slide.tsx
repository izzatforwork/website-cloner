/* eslint-disable @next/next/no-img-element -- ImageLayer needs raw <img> so the
   inner crop offsets can be positioned freely; next/image `fill` pins inset:0. */
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * One 16:9 artboard from the original Canva design.
 *
 * The source site is a fixed canvas that Canva scales uniformly to the viewport
 * width, so every child positions itself in percentages and sizes its type in
 * `cqw` (container-query width units). Declaring the slide as an inline-size
 * container is what makes those `cqw` units resolve against the slide itself.
 */
export function Slide({
  className,
  style,
  children,
}: {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <section
      className={cn(
        "relative w-full aspect-[16/9] overflow-hidden [container-type:inline-size]",
        className,
      )}
      style={style}
    >
      {children}
    </section>
  );
}

export type LayerProps = {
  /** Centre X of the element, as a percentage of slide width. */
  cx: number;
  /** Centre Y of the element, as a percentage of slide height. */
  cy: number;
  /** Width as a percentage of slide width. */
  w: number;
  /** Height as a percentage of slide height. */
  h: number;
  /** Clockwise rotation in degrees, applied about the centre. */
  rot?: number;
  /** Mirror vertically — Canva uses this for reflection/gradient layers. */
  flipY?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

/**
 * Places one canvas element by its centre point and size, mirroring the way the
 * original design positions everything with transform matrices rather than flow.
 */
export function Layer({
  cx,
  cy,
  w,
  h,
  rot = 0,
  flipY = false,
  className,
  style,
  children,
}: LayerProps) {
  return (
    <div
      className={cn("absolute", className)}
      style={{
        left: `${cx}%`,
        top: `${cy}%`,
        width: `${w}%`,
        height: `${h}%`,
        transform: `translate(-50%, -50%)${rot ? ` rotate(${rot}deg)` : ""}${flipY ? " scaleY(-1)" : ""}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export type TextLayerProps = {
  /** Centre X of the text box, as a percentage of slide width. */
  cx: number;
  /** Centre Y of the text box, as a percentage of slide height. */
  cy: number;
  /** Box width as a percentage of slide width. */
  w: number;
  /** Font size in `cqw` — 1cqw is one percent of the slide's width. */
  size: number;
  /** Line height in `cqw`; omit for the font's natural leading. */
  lh?: number;
  /** Letter spacing in `cqw`. */
  ls?: number;
  rot?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

/**
 * A run of canvas text, positioned by the centre of its measured box. Height is
 * left to the content so the text never clips if a face falls back mid-load.
 */
export function TextLayer({
  cx,
  cy,
  w,
  size,
  lh,
  ls,
  rot = 0,
  className,
  style,
  children,
}: TextLayerProps) {
  return (
    <div
      className={cn("absolute", className)}
      style={{
        left: `${cx}%`,
        top: `${cy}%`,
        width: `${w}%`,
        transform: `translate(-50%, -50%)${rot ? ` rotate(${rot}deg)` : ""}`,
        fontSize: `${size}cqw`,
        ...(lh !== undefined ? { lineHeight: `${lh}cqw` } : null),
        ...(ls !== undefined ? { letterSpacing: `${ls}cqw` } : null),
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export type ImageLayerProps = {
  /** Crop frame: centre and size as percentages of the slide. */
  cx: number;
  cy: number;
  w: number;
  h: number;
  /** Frame rotation in degrees, clockwise. */
  rot?: number;
  /** Mirror the frame vertically. */
  flipY?: boolean;
  src: string;
  /** Inner image placement, as percentages of the *frame* (defaults to a exact fill). */
  ix?: number;
  iy?: number;
  iw?: number;
  ih?: number;
  /** Extra rotation of the image inside its frame, in degrees. */
  irot?: number;
  /** Mirror the image vertically inside its frame. */
  iflipY?: boolean;
  /** Cumulative opacity the original applies via a wrapper div. */
  opacity?: number;
  /** Eager-load and preload this image (use for above-the-fold art only). */
  priority?: boolean;
};

/**
 * One picture from the canvas.
 *
 * The source design never scales an image to its visible box — it puts the image
 * inside a smaller clipping frame and offsets/oversizes it to crop. Reproducing
 * that split is what keeps crops identical rather than merely similar, so the
 * frame is the `Layer` and `ix/iy/iw/ih` place the picture within it.
 */
export function ImageLayer({
  cx,
  cy,
  w,
  h,
  rot = 0,
  flipY = false,
  src,
  ix = 0,
  iy = 0,
  iw = 100,
  ih = 100,
  irot = 0,
  iflipY = false,
  opacity,
  priority = false,
}: ImageLayerProps) {
  return (
    <Layer cx={cx} cy={cy} w={w} h={h} rot={rot} flipY={flipY} className="overflow-hidden" style={opacity === undefined ? undefined : { opacity }}>
      <img
        src={src}
        alt=""
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        style={{
          position: "absolute",
          left: `${ix}%`,
          top: `${iy}%`,
          width: `${iw}%`,
          height: `${ih}%`,
          objectFit: "fill",
          ...(irot || iflipY
            ? { transform: `${irot ? `rotate(${irot}deg)` : ""}${iflipY ? " scaleY(-1)" : ""}`.trim() }
            : null),
        }}
      />
    </Layer>
  );
}

/**
 * Renders admin-edited text that may contain manual line breaks.
 *
 * TextLayer boxes use `whitespace-nowrap` and rely on explicit `<br />`s
 * rather than natural wrapping, so multi-line admin content is stored with
 * `\n` separators and turned back into `<br />`s here.
 */
export function renderLines(text: string): ReactNode {
  const lines = text.split("\n");
  return lines.map((line, i) => (
    <span key={i}>
      {line}
      {i < lines.length - 1 ? <br /> : null}
    </span>
  ));
}

import type { SVGProps } from "react";

/**
 * Circled arrow used as the scroll cue at the bottom-right of the hero and the
 * quote slide. Extracted verbatim from the original design; the source renders
 * it rotated 90deg so the arrow points down.
 */
export function CircleArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 71.6 71.6" fill="currentColor" aria-hidden {...props}>
      <path d="m35.8,71.59C16.06,71.59,0,55.53,0,35.8S16.06,0,35.8,0s35.79,16.06,35.79,35.8-16.06,35.8-35.79,35.8Zm0-68.59C17.71,3,3,17.71,3,35.8s14.71,32.8,32.8,32.8,32.79-14.71,32.79-32.8S53.88,3,35.8,3Z" />
      <path d="m36.62,52.31c-.38,0-.77-.15-1.06-.44-.59-.59-.59-1.54,0-2.12l13.08-13.08-13.08-13.08c-.59-.59-.59-1.54,0-2.12.59-.59,1.54-.59,2.12,0l13.5,13.5c.46.46.71,1.06.71,1.7s-.25,1.25-.71,1.7l-13.5,13.5c-.29.29-.68.44-1.06.44Zm12.44-15.23h0,0Z" />
      <path d="m50.37,38.17h-28.92c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h28.92c.83,0,1.5.67,1.5,1.5s-.67,1.5-1.5,1.5Z" />
    </svg>
  );
}

/**
 * Stroked pill outline that frames the "TAP HERE TO Book" call to action.
 * Kept as SVG with a non-scaling stroke so the hairline stays hairline-thin at
 * every slide width, exactly as the original does.
 */
export function PillOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 62.139883720482274 9.508857378909155"
      preserveAspectRatio="none"
      aria-hidden
      {...props}
    >
      <path
        d="M62.13988372,4.75442869C62.13988372,7.38022715 60.01125349,9.50885738 57.38545503,9.50885738L4.75442869,9.50885738C2.12863023,9.50885738 0,7.38022715 0,4.75442869C0,2.12863023 2.12863023,0 4.75442869,0L57.38545503,0C60.01125349,0 62.13988372,2.12863023 62.13988372,4.75442869Z"
        stroke="currentColor"
        strokeWidth="3.7042459736456808"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

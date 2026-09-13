import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // The clone vendors the target site's exact image bytes. Re-encoding them
    // through the optimizer would alter the pixels we are trying to match, so
    // serve the originals as-is.
    unoptimized: true,
  },
};

export default nextConfig;

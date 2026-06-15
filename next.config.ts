import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // Static HTML export — works on any host
  trailingSlash: true,   // Creates /about/index.html instead of /about.html
  images: {
    unoptimized: true,   // Required for static export (no server-side image processing)
  },
};

export default nextConfig;

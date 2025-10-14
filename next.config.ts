// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // <-- static HTML export
  images: { unoptimized: true }, // GH Pages can't use Next Image optimizer
  trailingSlash: true,       // helps with static routing on Pages/CDN
};

export default nextConfig;
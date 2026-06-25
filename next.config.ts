import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: false },
  // Inline Tailwind CSS in HTML instead of a render-blocking <link> (production only).
  // ~11 KiB bundle — practical for first-visit FCP/LCP on App Router.
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;

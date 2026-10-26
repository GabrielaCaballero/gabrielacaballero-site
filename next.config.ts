import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A personal site has nothing dynamic, so it's exported as plain HTML files
  // (`out/`). Every page is fully readable without JavaScript, and it can be
  // hosted anywhere: Vercel, Netlify, GitHub Pages, or behind the GoDaddy domain.
  output: "export",
  // Static export has no image server; photos are pre-compressed WebP in
  // /public/photos instead (see README).
  images: { unoptimized: true },
  // /experience/index.html instead of /experience.html: works on every static
  // host without rewrite rules.
  trailingSlash: true,
};

export default nextConfig;

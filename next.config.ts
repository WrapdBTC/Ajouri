import type { NextConfig } from "next";
import path from "path";

const repo = "Ajouri";
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: isPages ? `/${repo}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;

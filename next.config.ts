import type { NextConfig } from "next";
import path from "path";

const repo = "Ajouri";
const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isPages ? `/${repo}` : "",
  assetPrefix: isPages ? `/${repo}/` : undefined,
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;

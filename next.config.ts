import type { NextConfig } from "next";

const repoName = "Portfolio";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;
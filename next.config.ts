import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// GitHub Pages hosts project sites at username.github.io/repo-name
// If GITHUB_REPOSITORY is present, we extract the repo-name to use as basePath.
// Note: If you configure a custom domain, you should disable/remove this basePath check.
const basePath = isProd && process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

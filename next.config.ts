import type { NextConfig } from "next";

// When running in GitHub Actions (for GitHub Pages deployment),
// we use static export and set basePath to the repo name.
// On Vercel, neither is needed — Vercel handles Next.js natively.
const isGitHubActions = !!process.env.GITHUB_ACTIONS;
const basePath = isGitHubActions && process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`
  : "";

const nextConfig: NextConfig = {
  ...(isGitHubActions && {
    output: "export",
    basePath: basePath,
  }),
  images: {
    // Required for static export (GitHub Pages).
    // Vercel will override this with its own optimised image pipeline.
    unoptimized: isGitHubActions,
  },
};

export default nextConfig;

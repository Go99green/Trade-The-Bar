import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    PORT: process.env.PORT || "3000",
  },

  // Explicitly allow indexing on production deployments.
  // Vercel can add x-robots-tag: noindex on non-production URLs by default;
  // this overrides that for the canonical production domain.
  async headers() {
    if (process.env.VERCEL_ENV !== "production") return [];
    return [
      {
        source: "/(.*)",
        headers: [{ key: "X-Robots-Tag", value: "index, follow" }],
      },
    ];
  },
};

export default nextConfig;

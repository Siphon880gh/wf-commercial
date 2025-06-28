import type { NextConfig } from "next";
// next.config.js

const nextConfig: NextConfig = {
  basePath: '/me',
  assetPrefix: '/me',
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true
  }
};

export default nextConfig;

import type { NextConfig } from "next";
// next.config.js

const nextConfig: NextConfig = {
  basePath: '/me',
  assetPrefix: '/me',
  trailingSlash: false,
  output: 'export'
};

export default nextConfig;

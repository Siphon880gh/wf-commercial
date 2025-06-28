import type { NextConfig } from "next";
// next.config.js
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  basePath: '/me',
  assetPrefix: isProd ? '/me/' : '', // Only set prefix in production
};

export default nextConfig;

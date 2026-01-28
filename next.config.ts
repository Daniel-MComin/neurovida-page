import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.usecurling.com',
        pathname: '/p/**',
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'whimsical-badge-f41b91c26a.media.strapiapp.com',
      },
      {
        protocol: 'https',
        hostname: 'whimsical-badge-f41b91c26a.strapiapp.com',
      },
    ],
  },
};

export default nextConfig;

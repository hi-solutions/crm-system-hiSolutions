import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com", "randomuser.me"],
  },
  async rewrites() {
    return [
      {
        source: "/api/api/v1/:path*",
        destination: "https://hi.hi-solutions.co/api/api/:path*",
      },
    ];
  },
};

export default nextConfig;

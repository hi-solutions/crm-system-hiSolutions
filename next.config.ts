import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: ["hiestate.app"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://hiestate.app/api/:path*",
      },
    ];
  },
};

export default nextConfig;

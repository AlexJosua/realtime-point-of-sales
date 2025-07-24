import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  devIndicators: false,
  images: {
    domains: ["https://mucwiodjmnwamflcqiyl.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mucwiodjmnwamflcqiyl.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
export default nextConfig;

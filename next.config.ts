import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  devIndicators: false,
  images: {
    domains: [
      "https://mucwiodjmnwamflcqiyl.storage.supabase.co",
      "https://mucwiodjmnwamflcqiyl.supabase.co",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mucwiodjmnwamflcqiyl.storage.supabase.co",
        port: "",
        pathname: "/**",
      },
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

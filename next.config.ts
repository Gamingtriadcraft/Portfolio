import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // needed if you’re using <Image>
  },
};

export default nextConfig;

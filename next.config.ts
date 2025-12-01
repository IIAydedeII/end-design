import type { NextConfig } from "next";
import withLinaria from "next-with-linaria";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/components",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/components/:path*",
        destination: "/:path*",
      },
    ];
  },
  reactCompiler: true,
};

export default withLinaria(nextConfig);

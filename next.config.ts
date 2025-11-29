import type { NextConfig } from "next";
import withLinaria from "next-with-linaria";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default withLinaria(nextConfig);

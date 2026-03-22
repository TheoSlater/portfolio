import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: [
      "@mui/material",
      "@mui/icons-material",
      "motion",
    ],
  },
};

const withMDX = createMDX({});
export default withMDX(nextConfig);

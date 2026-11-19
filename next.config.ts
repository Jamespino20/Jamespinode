import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

const withMDX = createMDX({
  options: {
    // String form: required for Turbopack (functions can't cross into Rust).
    // Strips YAML frontmatter so it never renders; gray-matter reads it separately.
    remarkPlugins: ["remark-frontmatter"],
  },
});

export default withMDX(nextConfig);

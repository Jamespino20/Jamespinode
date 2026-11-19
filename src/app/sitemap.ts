import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jamespinode-portfolio.vercel.app";
  const staticRoutes = [
    "",
    "/about",
    "/projects",
    "/experience",
    "/resume",
    "/contact",
    "/canvas",
  ];
  const projectRoutes = getProjectSlugs().map((slug) => `/projects/${slug}`);
  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}

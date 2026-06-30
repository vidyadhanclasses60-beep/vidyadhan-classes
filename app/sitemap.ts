import type { MetadataRoute } from "next";
import { site } from "@/constants/site";
import { nav } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...nav.map((n) => n.href),
    "/faq",
    "/privacy-policy",
    "/terms",
  ];
  const now = new Date();
  return routes.map((route) => ({
    url: `${site.url}${route === "/" ? "" : route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}

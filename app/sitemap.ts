/**
 * Dynamic sitemap.xml.
 * File path: /app/sitemap.ts
 *
 * Currently lists just the homepage. Will be extended in later prompts
 * to include /rozwiazania/[slug] product pages and /sufity-napinane/[slug]
 * city pages by importing from /content/products.ts and /content/cities.ts.
 */

import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

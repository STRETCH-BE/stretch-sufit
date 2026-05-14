/**
 * Sitemap — auto-generated at request time.
 * File path: /app/sitemap.ts
 *
 * Discoverable at /sitemap.xml. Submit this URL to Google Search Console
 * and Bing Webmaster Tools once the real domain is connected.
 *
 * To add new routes:
 *  - city pages are auto-discovered via `cities` array
 *  - other static routes go in `staticRoutes`
 */

import type { MetadataRoute } from "next";
import { cities } from "@/content/cities";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://stretch-sufit.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/o-nas`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/sufity-napinane`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/polityka-prywatnosci`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const cityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/sufity-napinane/${city.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...cityRoutes];
}

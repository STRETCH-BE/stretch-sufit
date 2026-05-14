/**
 * Sitemap — auto-generated at request time.
 * File path: /app/sitemap.ts
 *
 * Discoverable at /sitemap.xml. Submit this URL to Google Search Console
 * and Bing Webmaster Tools once the real domain is connected.
 *
 * Routes auto-discovered:
 *  - city pages via `cities` array
 *  - product pages via `products` array
 *
 * Add new static routes to `staticRoutes` below.
 */

import type { MetadataRoute } from "next";
import { cities } from "@/content/cities";
import { products } from "@/content/products";

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
      url: `${BASE_URL}/rozwiazania`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/sufity-napinane`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/kontakt`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/polityka-prywatnosci`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/rozwiazania/${product.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const cityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/sufity-napinane/${city.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes, ...cityRoutes];
}

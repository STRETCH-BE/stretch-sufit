/**
 * Sitemap — auto-generated at request time.
 * File path: /app/sitemap.ts
 *
 * Covers all three locale trees (pl root, /en, /ua), the /realizacje case
 * studies, and every product + city landing page. Each entry carries its
 * hreflang alternates so Google/Bing consolidate the locale versions
 * instead of ranking them as separate competing pages.
 */

import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import {
  routes,
  productSlugs,
  citySlugs,
  projectSlugs,
  productPaths,
  cityPaths,
  languageAlternates,
  type LocalePaths,
} from "@/lib/i18n-routes";

const BASE_URL = siteConfig.url;

type Entry = MetadataRoute.Sitemap[number];
type Freq = Entry["changeFrequency"];

/** Absolute URL for a site-relative path ("/" → BASE_URL). */
function abs(path: string): string {
  return path === "/" ? BASE_URL : `${BASE_URL}${path}`;
}

/**
 * Emits one sitemap entry per locale version of a route, each carrying
 * the full hreflang alternate set (absolute URLs, as the spec requires).
 */
function localized(
  paths: LocalePaths,
  lastModified: Date,
  changeFrequency: Freq,
  priority: number
): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    Object.entries(languageAlternates(paths)).map(([lang, path]) => [
      lang,
      abs(path),
    ])
  );

  const localePriority = { pl: priority, en: priority - 0.1, ua: priority - 0.1 };

  return (["pl", "en", "ua"] as const)
    .filter((locale) => paths[locale])
    .map((locale) => ({
      url: abs(paths[locale] as string),
      lastModified,
      changeFrequency,
      priority: Math.max(0.1, Math.round(localePriority[locale] * 10) / 10),
      alternates: { languages },
    }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    ...localized(routes.home, lastModified, "weekly", 1.0),
    ...localized(routes.solutions, lastModified, "monthly", 0.9),
    ...localized(routes.cities, lastModified, "monthly", 0.9),
    ...localized(routes.about, lastModified, "monthly", 0.8),
    ...localized(routes.faq, lastModified, "monthly", 0.8),
    ...localized(routes.projects, lastModified, "weekly", 0.8),
    ...localized(routes.blog, lastModified, "weekly", 0.7),
    ...localized(routes.dealers, lastModified, "monthly", 0.6),
    ...localized(routes.b2b, lastModified, "monthly", 0.6),
    ...localized(routes.contact, lastModified, "monthly", 0.6),
    ...localized(routes.careers, lastModified, "monthly", 0.5),
    ...localized(routes.warranty, lastModified, "yearly", 0.5),
    ...localized(routes.terms, lastModified, "yearly", 0.4),
    ...localized(routes.privacy, lastModified, "yearly", 0.3),
    ...localized(routes.cookiesPolicy, lastModified, "yearly", 0.3),
  ];

  const productEntries: MetadataRoute.Sitemap = productSlugs.flatMap((p) =>
    localized(productPaths(p), lastModified, "monthly", 0.8)
  );

  const cityEntries: MetadataRoute.Sitemap = citySlugs.flatMap((c) =>
    localized(cityPaths(c), lastModified, "monthly", 0.7)
  );

  const projectEntries: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${BASE_URL}/realizacje/${slug}`,
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...productEntries, ...cityEntries, ...projectEntries];
}

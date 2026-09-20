/**
 * Sitemap — auto-generated at request time.
 * File path: /app/sitemap.ts
 *
 * Covers all three locale trees (pl root, /en, /ua), the /realizacje case
 * studies, and every product + city landing page. Each entry carries its
 * hreflang alternates so Google/Bing consolidate the locale versions
 * instead of ranking them as separate competing pages.
 *
 * lastmod is per entry: city pages use `updatedAt` from content/cities.ts,
 * blog posts use `datePublished`, everything else the SITE_CONTENT_DATE
 * constant below (bump it when static copy changes). Only the homepage and
 * the blog index are stamped "now" — a sitemap where every URL claims to
 * have changed today is ignored by crawlers.
 */

import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { cities } from "@/content/cities";
import { blogPosts } from "@/content/blog-posts";
import {
  routes,
  productSlugs,
  citySlugs,
  projectSlugs,
  blogPostSlugs,
  productPaths,
  cityPaths,
  blogPostPaths,
  languageAlternates,
  type LocalePaths,
} from "@/lib/i18n-routes";

const BASE_URL = siteConfig.url;

/** Last change of the static pages (about, solutions, products, …). */
const SITE_CONTENT_DATE = new Date("2026-09-20");

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
  const now = new Date();
  const staticDate = SITE_CONTENT_DATE;

  const staticEntries: MetadataRoute.Sitemap = [
    ...localized(routes.home, now, "weekly", 1.0),
    ...localized(routes.solutions, staticDate, "monthly", 0.9),
    ...localized(routes.cities, staticDate, "monthly", 0.9),
    ...localized(routes.slask, staticDate, "monthly", 0.8),
    ...localized(routes.about, staticDate, "monthly", 0.8),
    ...localized(routes.faq, staticDate, "monthly", 0.8),
    ...localized(routes.projects, staticDate, "weekly", 0.8),
    // /wycena/dziekujemy is intentionally absent — it's noindex
    ...localized(routes.wycena, staticDate, "weekly", 0.9),
    ...localized(routes.blog, now, "weekly", 0.7),
    ...localized(routes.dealers, staticDate, "monthly", 0.6),
    ...localized(routes.b2b, staticDate, "monthly", 0.6),
    ...localized(routes.contact, staticDate, "monthly", 0.6),
    ...localized(routes.careers, staticDate, "monthly", 0.5),
    ...localized(routes.warranty, staticDate, "yearly", 0.5),
    ...localized(routes.terms, staticDate, "yearly", 0.4),
    ...localized(routes.privacy, staticDate, "yearly", 0.3),
    ...localized(routes.cookiesPolicy, staticDate, "yearly", 0.3),
  ];

  const productEntries: MetadataRoute.Sitemap = productSlugs.flatMap((p) =>
    localized(productPaths(p), staticDate, "monthly", 0.8)
  );

  const cityEntries: MetadataRoute.Sitemap = citySlugs.flatMap((c) => {
    const city = cities.find((entry) => entry.slug === c.pl);
    const lastModified = city?.updatedAt ? new Date(city.updatedAt) : staticDate;
    // Home region (Częstochowa factory + Silesian agglomeration) ranks first.
    const priority = city?.region === "Śląskie" ? 0.8 : 0.7;
    return localized(cityPaths(c), lastModified, "monthly", priority);
  });

  const blogPostEntries: MetadataRoute.Sitemap = blogPostSlugs.flatMap((b) => {
    const post = blogPosts.find((p) => p.slug === b.pl);
    const lastModified = post ? new Date(post.datePublished) : staticDate;
    return localized(blogPostPaths(b), lastModified, "monthly", 0.7);
  });

  const projectEntries: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${BASE_URL}/realizacje/${slug}`,
    lastModified: staticDate,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...productEntries,
    ...cityEntries,
    ...blogPostEntries,
    ...projectEntries,
  ];
}

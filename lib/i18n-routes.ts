/**
 * i18n route map — single source of truth for locale URL correspondence.
 * File path: /lib/i18n-routes.ts
 *
 * Used by:
 *   - /app/sitemap.ts (emits every locale URL + hreflang alternates)
 *   - every page's `metadata.alternates.languages` (hreflang tags)
 *
 * Why hreflang matters: Google/Bing use it to serve the right language
 * version in search results and to consolidate ranking signals across
 * the three trees instead of treating them as competing pages.
 *
 * Locale codes:
 *   pl-PL — Polish (default, root tree)
 *   en    — English (/en tree, not region-specific)
 *   uk-UA — Ukrainian (/ua tree; "uk" is the ISO code for Ukrainian)
 *   x-default — falls back to the Polish root
 */

export type LocalePaths = { pl: string; en?: string; ua?: string };

/* ─── Static routes ───────────────────────────────────────── */
export const routes = {
  home: { pl: "/", en: "/en", ua: "/ua" },
  about: { pl: "/o-nas", en: "/en/about", ua: "/ua/pro-nas" },
  solutions: { pl: "/rozwiazania", en: "/en/solutions", ua: "/ua/rishennya" },
  cities: {
    pl: "/sufity-napinane",
    en: "/en/stretch-ceilings",
    ua: "/ua/natiazhni-steli",
  },
  faq: { pl: "/pytania", en: "/en/faq", ua: "/ua/pytannya" },
  contact: { pl: "/kontakt", en: "/en/contact", ua: "/ua/kontakty" },
  warranty: { pl: "/gwarancja", en: "/en/warranty", ua: "/ua/harantiya" },
  blog: { pl: "/blog", en: "/en/blog", ua: "/ua/blog" },
  dealers: { pl: "/dealerzy", en: "/en/dealers", ua: "/ua/dileri" },
  careers: { pl: "/kariera", en: "/en/careers", ua: "/ua/kariera" },
  b2b: { pl: "/wspolpraca-b2b", en: "/en/b2b", ua: "/ua/b2b" },
  projects: { pl: "/realizacje" },
  terms: { pl: "/regulamin" },
  privacy: { pl: "/polityka-prywatnosci" },
  cookiesPolicy: { pl: "/polityka-cookies" },
} satisfies Record<string, LocalePaths>;

/* ─── Dynamic slugs — index-aligned across locales ────────── */

/** Product slugs per locale. Same product, same array position. */
export const productSlugs: { pl: string; en: string; ua: string }[] = [
  { pl: "sufit-poliestrowy", en: "polyester-ceiling", ua: "poliester-stelya" },
  { pl: "sufit-pvc", en: "pvc-ceiling", ua: "pvc-stelya" },
  { pl: "sufit-akustyczny", en: "acoustic-ceiling", ua: "akustychna-stelya" },
  { pl: "sufit-swietlny", en: "light-ceiling", ua: "svitlova-stelya" },
  { pl: "sufit-fotodruk", en: "print-ceiling", ua: "drukovana-stelya" },
  { pl: "sufit-prefab", en: "prefab-ceiling", ua: "prefab-stelya" },
];

/**
 * City slugs per locale. Only Warsaw / Kraków / Wrocław have full EN + UA
 * landing pages today — the remaining 14 exist only in Polish.
 */
export const citySlugs: { pl: string; en?: string; ua?: string }[] = [
  { pl: "warszawa", en: "warsaw", ua: "varshava" },
  { pl: "krakow", en: "krakow", ua: "krakiv" },
  { pl: "wroclaw", en: "wroclaw", ua: "vrotslav" },
  { pl: "poznan" },
  { pl: "gdansk" },
  { pl: "lodz" },
  { pl: "katowice" },
  { pl: "czestochowa" },
  { pl: "bielsko-biala" },
  { pl: "gliwice" },
  { pl: "opole" },
  { pl: "kielce" },
  { pl: "plock" },
  { pl: "piotrkow-trybunalski" },
  { pl: "radomsko" },
  { pl: "brzeg" },
  { pl: "jastrzebie-zdroj" },
];

/** Case-study pages under /realizacje — Polish only. */
export const projectSlugs: string[] = [
  "afas-lounge-antwerpia",
  "kancelaria-ampe-kruibeke",
  "london-chapel-londyn",
  "polette-antwerpia",
  "rue-perree-paryz",
  "van-der-valk-beveren",
  "vier-emmershof-lokeren",
];

/* ─── Path builders ───────────────────────────────────────── */

export function productPaths(entry: {
  pl: string;
  en: string;
  ua: string;
}): LocalePaths {
  return {
    pl: `${routes.solutions.pl}/${entry.pl}`,
    en: `${routes.solutions.en}/${entry.en}`,
    ua: `${routes.solutions.ua}/${entry.ua}`,
  };
}

export function cityPaths(entry: {
  pl: string;
  en?: string;
  ua?: string;
}): LocalePaths {
  return {
    pl: `${routes.cities.pl}/${entry.pl}`,
    en: entry.en ? `${routes.cities.en}/${entry.en}` : undefined,
    ua: entry.ua ? `${routes.cities.ua}/${entry.ua}` : undefined,
  };
}

/** Look up a product entry by its slug in any locale. */
export function findProduct(
  locale: "pl" | "en" | "ua",
  slug: string
): { pl: string; en: string; ua: string } | undefined {
  return productSlugs.find((p) => p[locale] === slug);
}

/** Look up a city entry by its slug in any locale. */
export function findCity(
  locale: "pl" | "en" | "ua",
  slug: string
): { pl: string; en?: string; ua?: string } | undefined {
  return citySlugs.find((c) => c[locale] === slug);
}

/* ─── hreflang builder ────────────────────────────────────── */

/**
 * Builds the `metadata.alternates.languages` object for a route.
 * Relative paths are fine — Next resolves them against `metadataBase`.
 * x-default points at the Polish version (the site's primary market).
 */
export function languageAlternates(
  paths: LocalePaths
): Record<string, string> {
  const languages: Record<string, string> = {
    "pl-PL": paths.pl,
    "x-default": paths.pl,
  };
  if (paths.en) languages.en = paths.en;
  if (paths.ua) languages["uk-UA"] = paths.ua;
  return languages;
}

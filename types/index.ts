/**
 * Shared TypeScript types.
 * File path: /types/index.ts
 *
 * Imported by all `/content/*.ts` files and the components that consume them.
 */

export type Product = {
  /** URL-safe slug, used in href: /rozwiazania/[slug] */
  slug: string;
  /** Display number, e.g. "01" — rendered with a red accent */
  number: string;
  /** Short label rendered after the number, e.g. "Poliester" */
  label: string;
  /** Full headline. The substring inside <span class="it">…</span> renders italic serif. */
  title: string;
  /** Substring of `title` to render in editorial italic. Optional. */
  italicAccent?: string;
  /** 1–2 sentence Polish description. */
  description: string;
  /** Image displayed in the circular thumbnail. */
  image: string;
  /** Polish alt text. */
  imageAlt: string;
  /** Short label on the bottom link, e.g. "Sufit poliestrowy". */
  linkLabel: string;
  /** If true, the card renders red on dark to break the grid rhythm. */
  featured?: boolean;
};

export type GalleryItem = {
  image: string;
  imageAlt: string;
  room: string;
  city: string;
  gridClass: string;
};

export type Testimonial = {
  name: string;
  meta: string;
  quote: string;
  rating: number;
  initials: string;
};

export type CityFaq = {
  q: string;
  a: string;
};

export type CityTrustBlock = {
  title: string;
  body: string;
};

export type City = {
  /** URL-safe slug, used in href: /sufity-napinane/[slug] */
  slug: string;
  /** Display name with Polish diacritics (Mianownik / nominative) */
  name: string;
  /** Polish voivodeship */
  region: string;
  /** Locative case for SEO copy ("w Warszawie", "we Wrocławiu") */
  locative: string;
  /** Display population, e.g. "1,86 mln mieszkańców" */
  populationDisplay: string;
  /** Distance from Częstochowa HQ in kilometers */
  distanceFromHq: number;
  /** Districts/neighborhoods (empty array for smaller cities) */
  districts: string[];
  /** 2-3 sentence intro paragraph, unique per city */
  intro: string;
  /** 3 why-us trust blocks — standardized structure, city-specific copy */
  trustBlocks: CityTrustBlock[];
  /** 4 city-specific FAQ entries — used for FAQPage JSON-LD too */
  faq: CityFaq[];
  /** Hero/showcase image URL */
  image: string;
  /** Polish alt text for the image */
  imageAlt: string;
};

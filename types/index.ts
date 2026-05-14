/**
 * Shared TypeScript types.
 * File path: /types/index.ts
 *
 * Imported by all `/content/*.ts` files and the components that consume them.
 */

export type ProductFeature = {
  title: string;
  body: string;
};

export type ProductUseCase = {
  context: string; // "Łazienki i kuchnie", "Open-space biura"
  body: string;
};

export type ProductFaq = {
  q: string;
  a: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

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
  /** 1–2 sentence Polish description (for homepage card). */
  description: string;
  /** Image displayed in the circular thumbnail. */
  image: string;
  /** Polish alt text. */
  imageAlt: string;
  /** Short label on the bottom link, e.g. "Sufit poliestrowy". */
  linkLabel: string;
  /** If true, the card renders red on dark to break the grid rhythm. */
  featured?: boolean;

  /* ─── Full-page content (consumed by /rozwiazania/[slug]) ─── */

  /** Short hero subhead, e.g. "Membrana poliestrowa z polyuretanem" */
  tagline: string;
  /** 2-3 sentence intro paragraph for the product page hero */
  intro: string;
  /** 4 key features displayed as cards */
  features: ProductFeature[];
  /** 3-4 use cases — where this product wins */
  useCases: ProductUseCase[];
  /** Technical specifications — rendered as a key/value table */
  specs: ProductSpec[];
  /** When to choose this over alternatives — 2-3 sentences */
  comparedTo: string;
  /** 4-5 FAQ entries — also used for FAQPage JSON-LD */
  faq: ProductFaq[];
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
  slug: string;
  name: string;
  region: string;
  locative: string;
  populationDisplay: string;
  distanceFromHq: number;
  districts: string[];
  intro: string;
  trustBlocks: CityTrustBlock[];
  faq: CityFaq[];
  image: string;
  imageAlt: string;
};

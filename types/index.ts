/**
 * Shared types — single source of truth.
 * File path: /types/index.ts
 *
 * Organized into 3 groups:
 *   1. Homepage data (Product, GalleryItem, Testimonial, City)
 *   2. Realizacje (Project + sub-types)
 */

/* ─── PRODUCT (homepage Solutions grid + /rozwiazania/[slug]) ─────────────── */

export type ProductFeature = {
  title: string;
  body: string;
};

export type ProductUseCase = {
  context: string;
  body: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductFaq = {
  q: string;
  a: string;
};

export type Product = {
  // Card on homepage
  slug: string;
  number: string;
  label: string;
  title: string;
  italicAccent?: string;
  description: string;
  image: string;
  imageAlt: string;
  linkLabel: string;
  featured?: boolean;

  // /rozwiazania/[slug] long-form
  tagline: string;
  intro: string;
  features: ProductFeature[];
  useCases: ProductUseCase[];
  specs: ProductSpec[];
  comparedTo: string;
  faq: ProductFaq[];
};

/* ─── GALLERY ITEM (homepage Showcase) ────────────────────────────────────── */

export type GalleryItem = {
  image: string;
  imageAlt: string;
  room: string;
  city: string;
  gridClass: string;
};

/* ─── TESTIMONIAL (homepage Testimonials) ─────────────────────────────────── */

export type Testimonial = {
  name: string;
  meta: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  initials: string;
};

/* ─── CITY (homepage Cities grid + /sufity-napinane/[slug]) ───────────────── */

export type CityTrustBlock = {
  title: string;
  body: string;
};

export type CityFaq = {
  q: string;
  a: string;
};

export type CitySection = {
  /** H2 of the block — must be unique across cities (uniqueness gate). */
  heading: string;
  /** 110–180 words; one optional blank line ("\n\n") splits paragraphs. */
  body: string;
  /** 1–3 internal links rendered as chips under the block. */
  links?: { label: string; href: string }[];
};

export type CityTravel = {
  /** Typical drive time from the Częstochowa factory, in minutes. */
  minutes: number;
  /** Road summary shown next to the distance, e.g. "A1 i A4". */
  route: string;
  /** True inside the 100 km no-travel-fee radius. */
  noTravelFee: boolean;
};

export type CitySubregion =
  | "czestochowski"
  | "aglomeracja-katowicka"
  | "zaglebie"
  | "row"
  | "podbeskidzie";

export type City = {
  slug: string;
  name: string;
  /** Genitive form ("Katowic") — "w każdej dzielnicy Katowic". */
  genitive?: string;
  region: string;
  /** Silesian pages only — drives the /sufity-napinane/slask grouping. */
  subregion?: CitySubregion;
  locative: string;
  populationDisplay: string;
  distanceFromHq: number;
  travel?: CityTravel;
  /** The factory city (Częstochowa). Replaces the old "Centrala" pseudo-region. */
  isHq?: boolean;
  districts: string[];
  intro: string;
  trustBlocks: CityTrustBlock[];
  /** Long-form H2 blocks between the trust blocks and the FAQ. */
  sections?: CitySection[];
  faq: CityFaq[];
  /** Cities with their own page, linked first in "Inne miasta". */
  nearbySlugs?: string[];
  /** Towns served from this city that have no page (plain-text list + Service.areaServed). */
  nearbyTowns?: string[];
  image: string;
  imageAlt: string;
  /** Honest figcaption — shared photos must not claim to be a local job. */
  imageCaption?: string;
  /** ≤ 60 chars, rendered as an absolute <title>. */
  metaTitle?: string;
  /** ≤ 155 chars. */
  metaDescription?: string;
  /** ISO date of the last content change — feeds sitemap lastmod. */
  updatedAt?: string;
};

/* ─── REALIZACJE (project case studies) ───────────────────────────────────── */

export type ProjectGalleryItem = {
  src: string;
  alt: string;
  caption: string;
  note: string;
};

export type ProjectDesignStudio = {
  name: string;
  url: string;
  location: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  venue: string;
  country: string;
  year: number;
  /** Optional display override, e.g. "2019\u20132023" for multi-year programmes. */
  yearDisplay?: string;
  surface_m2: number;
  product: string;
  designStudio?: ProjectDesignStudio;
  heroImage: string;
  heroAlt: string;
  ogImage: string;
  gallery: ProjectGalleryItem[];
  tags: string[];
  cardImage?: string;
  cardSummary?: string;
};

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

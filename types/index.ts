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
  context: string;
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
  tagline: string;
  intro: string;
  features: ProductFeature[];
  useCases: ProductUseCase[];
  specs: ProductSpec[];
  comparedTo: string;
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

/** Filter key values for projects — must match Product.slug for consistent linking */
export type ProjectProductCategory =
  | "sufit-pvc"
  | "sufit-poliestrowy"
  | "sufit-akustyczny"
  | "sufit-swietlny"
  | "sufit-fotodruk"
  | "sufit-prefab";

/** Filter key values for space type */
export type ProjectSpaceType =
  | "salon"
  | "lazienka"
  | "kuchnia"
  | "sypialnia"
  | "biuro"
  | "gastronomia"
  | "hotel"
  | "sklep";

export type Project = {
  /** Stable identifier used for keys and URL params */
  slug: string;
  /** Short editorial title shown under the image, e.g. "Apartament Mokotów" */
  title: string;
  /** City slug — matches `City.slug` from /content/cities.ts */
  citySlug: string;
  /** City display name, e.g. "Warszawa" */
  city: string;
  /** Optional district within the city, e.g. "Mokotów" */
  district?: string;
  /** Product category — matches `Product.slug` from /content/products.ts */
  productCategory: ProjectProductCategory;
  /** Display label for the product, e.g. "Sufit PVC" */
  productLabel: string;
  /** Type of space — used as a secondary filter */
  spaceType: ProjectSpaceType;
  /** Display label for the space, e.g. "Salon", "Open-space biuro" */
  spaceLabel: string;
  /** Image URL — Unsplash placeholder for now, swap to /images/gallery/{slug}.jpg later */
  image: string;
  /** Polish alt text — important for accessibility AND SEO */
  imageAlt: string;
  /** Surface area in m² for the trust signal, e.g. 42 */
  surfaceArea?: number;
  /** Year of installation */
  year?: number;
};

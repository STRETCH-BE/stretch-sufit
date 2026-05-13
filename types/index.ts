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
  /** Image src — final delivery uses /images/gallery/{slug}.jpg */
  image: string;
  /** Polish alt text. */
  imageAlt: string;
  /** Italic serif caption (e.g. "Salon · LED liniowy") */
  room: string;
  /** Bold display caption (e.g. "Warszawa") */
  city: string;
  /** Tailwind grid-area class controlling the asymmetric layout. */
  gridClass: string;
};

export type Testimonial = {
  /** Customer first name + initial */
  name: string;
  /** Project type + city, e.g. "Espressivo · Warszawa" */
  meta: string;
  /** The Polish quote. Wrapped in “…” at render time. */
  quote: string;
  /** Star rating, 1–5 */
  rating: number;
  /** 2-letter initials displayed in avatar circle */
  initials: string;
};

export type City = {
  /** URL-safe slug, used in href: /sufity-napinane/[slug] */
  slug: string;
  /** Display name with Polish diacritics */
  name: string;
  /** Polish voivodeship or "Centrala" for HQ */
  region: string;
};

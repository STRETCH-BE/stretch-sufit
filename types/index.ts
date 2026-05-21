// types/index.ts
// Append these types to your existing /types/index.ts.
// If the file does not exist yet, this file is fine as-is.

export type ProjectGalleryItem = {
  src: string;
  alt: string;
  caption: string; // mode / label, regular weight
  note: string; // technical note, italic
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
  country: string; // ISO-3166-1 alpha-2
  year: number;
  surface_m2: number;
  product: string;
  designStudio?: ProjectDesignStudio;
  heroImage: string;
  heroAlt: string;
  ogImage: string;
  gallery: ProjectGalleryItem[];
  tags: string[];
  // Card preview (used on /realizacje index + related-projects rail)
  cardImage?: string;
  cardSummary?: string;
};

/**
 * Site-wide configuration — single source of truth.
 * File path: /lib/site-config.ts
 *
 * Import from here, never hardcode brand data in components.
 */

export const siteConfig = {
  name: "Stretch Sufit",
  legalName: "Alto Design Sp. z o.o.",
  parent: "Stretchgroup",
  tagline: "Nowy sufit w 1 dzień. Bez kurzu.",
  description:
    "Stretch Sufit — sufity napinane PVC produkowane w Polsce, polyester z Belgii. Część belgijskiej Stretchgroup. Montaż w 1 dzień, bez kurzu, 25 lat żywotności, do 15 lat gwarancji.",

  url: process.env.NEXT_PUBLIC_SITE_URL || "https://altodesign.pl",

  locales: ["pl", "en", "ua"] as const,
  defaultLocale: "pl" as const,

  contact: {
    phonePL: "+48730700333",
    phonePLUA: "+48455444475",
    whatsapp: "48730700333",
    email: "info@stretch-sufit.pl",
    address: {
      street: "ul. Legionów 59",
      city: "Częstochowa",
      postalCode: "42-200",
      region: "Śląskie",
      country: "PL",
    },
    geo: { lat: 50.80758922274901, lng: 19.158936942638512 },
    hours: "Mo-Fr 09:00-15:30",
  },

  social: {
    facebook: "https://www.facebook.com/StretchSufit",
    instagram: "https://www.instagram.com/stretch_sufit?igsh=bXFlNXFvcTBtOGk0",
    youtube: "https://www.youtube.com/@stretchsufit",
    tiktok: "https://www.tiktok.com/@stretchsufit",
  },

  sameAs: [
    "https://stretchplafond.be",
    "https://www.facebook.com/StretchSufit",
    "https://www.instagram.com/stretch_sufit?igsh=bXFlNXFvcTBtOGk0",
  ],

  ogImage: "/images/og/default.jpg",
  ogImageAlt: "Stretch Sufit — sufity napinane premium",
} as const;

export type Locale = (typeof siteConfig.locales)[number];

/**
 * Default OpenGraph images array — import this into any page that
 * defines its own `openGraph` block so we never ship an OG-less page.
 *
 * Next.js does NOT merge `images` from the layout when a page provides
 * its own `openGraph` — the whole object is replaced. Paths are
 * relative; `metadataBase` in the root layout resolves them to absolute
 * URLs at build time.
 */
export const defaultOgImages = [
  {
    url: siteConfig.ogImage,
    width: 1200,
    height: 630,
    alt: siteConfig.ogImageAlt,
  },
];

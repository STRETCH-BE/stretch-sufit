/**
 * Site-wide configuration — single source of truth.
 * File path: /lib/site-config.ts
 *
 * Import from here, never hardcode brand data in components.
 */

export const siteConfig = {
  name: "Stretch Sufit",
  legalName: "Alto Design Sp. z o.o.",
  parent: "STRETCH® Group",
  tagline: "Nowy sufit w 1 dzień. Bez kurzu.",
  description:
    "Stretch Sufit — belgijska technologia sufitów napinanych w Polsce. Montaż w 1 dzień, bez kurzu, 25 lat żywotności. Część grupy STRETCH®.",

  url: process.env.NEXT_PUBLIC_SITE_URL || "https://stretch-sufit.pl",

  locales: ["pl", "en", "uk"] as const,
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
    instagram: "https://www.instagram.com/stretchsufit",
    youtube: "https://www.youtube.com/@stretchsufit",
    tiktok: "https://www.tiktok.com/@stretchsufit",
  },

  sameAs: [
    "https://stretchplafond.be",
    "https://www.facebook.com/StretchSufit",
    "https://www.instagram.com/stretchsufit",
  ],

  ogImage: "/images/og/default.jpg",
} as const;

export type Locale = (typeof siteConfig.locales)[number];

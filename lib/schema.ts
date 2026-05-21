/**
 * JSON-LD schema builders — typed helpers for structured data.
 * File path: /lib/schema.ts
 *
 * One file, one source of truth. Used by metadata generators on each page.
 */

import { siteConfig } from "@/lib/site-config";

/* ─── ORGANIZATION ─────────────────────────────────────── */
export function buildOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    sameAs: siteConfig.sameAs,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phonePL,
        contactType: "customer service",
        areaServed: "PL",
        availableLanguage: ["Polish", "English"],
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phonePLUA,
        contactType: "customer service",
        areaServed: "PL",
        availableLanguage: ["Ukrainian", "Polish"],
      },
    ],
  };
}

/* ─── WEBSITE ─────────────────────────────────────────── */
export function buildWebsite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: ["pl-PL", "en", "uk"],
  };
}

/* ─── LOCAL BUSINESS ──────────────────────────────────── */
export function buildLocalBusiness(opts?: {
  citySlug?: string;
  cityName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: opts?.cityName
      ? `${siteConfig.name} — ${opts.cityName}`
      : siteConfig.name,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      postalCode: siteConfig.contact.address.postalCode,
      addressRegion: siteConfig.contact.address.region,
      addressCountry: siteConfig.contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.geo.lat,
      longitude: siteConfig.contact.geo.lng,
    },
    telephone: siteConfig.contact.phonePL,
    email: siteConfig.contact.email,
    openingHours: siteConfig.contact.hours,
    priceRange: "$$",
    url: opts?.citySlug
      ? `${siteConfig.url}/sufity-napinane/${opts.citySlug}`
      : siteConfig.url,
  };
}

/* ─── SERVICE ─────────────────────────────────────────── */
export function buildService(opts: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/rozwiazania/${opts.slug}`,
    areaServed: "Poland",
  };
}

/* ─── BREADCRUMB LIST ──────────────────────────────────── */
export function buildBreadcrumbs(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/* ─── FAQ PAGE ─────────────────────────────────────────── */
export function buildFaqPage(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/* ─── CREATIVE WORK (realizacje case studies) ──────────── */
export type BuildCreativeWorkArgs = {
  name: string;
  description: string;
  url: string;
  image: string[];
  dateCreated: string;
  locationName: string;
  locationCountry: string;
  contributor?: { name: string; url: string };
  producer: { name: string; url: string };
  keywords: string[];
};

export function buildCreativeWork(args: BuildCreativeWorkArgs) {
  return {
    "@context": "https://schema.org",
    "@type": ["CreativeWork", "Project"],
    name: args.name,
    description: args.description,
    url: args.url,
    image: args.image,
    dateCreated: args.dateCreated,
    locationCreated: {
      "@type": "Place",
      name: args.locationName,
      address: {
        "@type": "PostalAddress",
        addressLocality:
          args.locationName.split(",")[1]?.trim() ?? args.locationName,
        addressCountry: args.locationCountry,
      },
    },
    ...(args.contributor && {
      contributor: {
        "@type": "Organization",
        name: args.contributor.name,
        url: args.contributor.url,
      },
    }),
    producer: {
      "@type": "Organization",
      name: args.producer.name,
      url: args.producer.url,
    },
    keywords: args.keywords.join(", "),
  };
}

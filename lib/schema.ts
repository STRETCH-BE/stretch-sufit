/**
 * Schema.org JSON-LD builders.
 * File path: /lib/schema.ts
 *
 * Type-safe builders for the structured data rendered on every page.
 * Pair with <JsonLd data={...} /> from /components/seo/json-ld.tsx.
 */

import { siteConfig } from "./site-config";

const SITE = siteConfig.url;

/* ─── ORGANIZATION ─────────────────────────────────────── */
export function buildOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE}#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: SITE,
    logo: `${SITE}/images/logo.png`,
    image: `${SITE}${siteConfig.ogImage}`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phonePL,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      postalCode: siteConfig.contact.address.postalCode,
      addressRegion: siteConfig.contact.address.region,
      addressCountry: siteConfig.contact.address.country,
    },
    sameAs: siteConfig.sameAs,
    parentOrganization: {
      "@type": "Organization",
      name: "STRETCH® Group",
      url: "https://stretchplafond.be",
    },
  };
}

/* ─── WEBSITE (with SearchAction) ──────────────────────── */
export function buildWebsite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}#website`,
    url: SITE,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "pl-PL",
    publisher: { "@id": `${SITE}#organization` },
  };
}

/* ─── LOCAL BUSINESS (home + city pages) ───────────────── */
export function buildLocalBusiness(opts?: {
  cityName?: string;
  url?: string;
  geo?: { lat: number; lng: number };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${opts?.url || SITE}#business`,
    name: opts?.cityName
      ? `${siteConfig.name} — ${opts.cityName}`
      : siteConfig.name,
    image: `${SITE}${siteConfig.ogImage}`,
    url: opts?.url || SITE,
    telephone: siteConfig.contact.phonePL,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: opts?.cityName || siteConfig.contact.address.city,
      postalCode: siteConfig.contact.address.postalCode,
      addressRegion: siteConfig.contact.address.region,
      addressCountry: siteConfig.contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: opts?.geo?.lat || siteConfig.contact.geo.lat,
      longitude: opts?.geo?.lng || siteConfig.contact.geo.lng,
    },
    openingHours: siteConfig.contact.hours,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "230",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: opts?.cityName
      ? { "@type": "City", name: opts.cityName }
      : { "@type": "Country", name: "Poland" },
  };
}

/* ─── SERVICE (each product page) ──────────────────────── */
export function buildService(opts: {
  name: string;
  description: string;
  url: string;
  image?: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    image: opts.image ? `${SITE}${opts.image}` : undefined,
    category: opts.category,
    provider: { "@id": `${SITE}#organization` },
    areaServed: { "@type": "Country", name: "Poland" },
  };
}

/* ─── BREADCRUMB LIST ──────────────────────────────────── */
export function buildBreadcrumbs(
  items: { name: string; url: string }[]
) {
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

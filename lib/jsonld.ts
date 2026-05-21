// lib/jsonld.ts
// IMPORTANT: APPEND this code to your existing /lib/jsonld.ts file.
// Do NOT replace buildBreadcrumbs() or buildFaqPage() — they should already be in the file from PROMPT 1.
// If the file does not exist yet, you also need to add the other two helpers (referenced in the page).

export type BuildCreativeWorkArgs = {
  name: string;
  description: string;
  url: string;
  image: string[];
  dateCreated: string; // "2025"
  locationName: string; // "AFAS Dome, Antwerpia"
  locationCountry: string; // "BE"
  contributor?: { name: string; url: string }; // design studio
  producer: { name: string; url: string }; // us
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

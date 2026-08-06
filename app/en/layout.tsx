/**
 * English locale layout — /en/*
 * File path: /app/en/layout.tsx
 *
 * The root layout renders <html lang="pl"> for the whole site (nested
 * layouts cannot change the <html> element in the App Router). This layout
 * corrects the language signal for the English tree two ways:
 *
 *   1. An inline script sets document.documentElement.lang before paint —
 *      picked up by Google (which renders JS), screen readers, and
 *      translation tooling.
 *   2. A lang="en" wrapper (display: contents, so it has no box and no
 *      layout impact) marks the actual content for crawlers that only
 *      read the raw HTML.
 *
 * It also overrides the metadata defaults that would otherwise leak
 * Polish into the English tree: the Twitter card (title/description fall
 * back to the root layout on pages that do not define their own) and the
 * keywords list. Next.js shallow-merges nested-layout metadata over the
 * root, so only these keys are replaced — titles, descriptions and
 * OpenGraph stay per-page.
 */

import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  description:
    "Stretch ceilings in Poland. PVC manufactured in our factory in Poland, polyester from Belgium. Part of Stretchgroup. Installed in 1 day, no dust, up to 15 years warranty.",
  keywords: [
    "stretch ceiling",
    "stretch ceilings Poland",
    "Stretch Sufit",
    "acoustic ceiling",
    "LED light ceiling",
    "PVC ceiling",
    "polyester ceiling",
    "printed ceiling",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Stretch Sufit — A new ceiling in one day. No dust.",
    description:
      "Stretch ceilings — PVC made in Poland, polyester from Belgium. Part of the Belgian Stretchgroup. Installed in 1 day, no dust, up to 15 years warranty.",
    images: [siteConfig.ogImage],
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang="en";`,
        }}
      />
      <div lang="en" style={{ display: "contents" }}>
        {children}
      </div>
    </>
  );
}

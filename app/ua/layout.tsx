/**
 * Ukrainian locale layout — /ua/*
 * File path: /app/ua/layout.tsx
 *
 * The root layout renders <html lang="pl"> for the whole site (nested
 * layouts cannot change the <html> element in the App Router). This layout
 * corrects the language signal for the Ukrainian tree two ways:
 *
 *   1. An inline script sets document.documentElement.lang before paint —
 *      picked up by Google (which renders JS), screen readers, and
 *      translation tooling.
 *   2. A lang="uk" wrapper (display: contents, so it has no box and no
 *      layout impact) marks the actual content for crawlers that only
 *      read the raw HTML. ("uk" is the ISO 639-1 code for Ukrainian.)
 *
 * It also overrides the metadata defaults that would otherwise leak
 * Polish into the Ukrainian tree: the Twitter card (title/description
 * fall back to the root layout on pages that do not define their own)
 * and the keywords list. Next.js shallow-merges nested-layout metadata
 * over the root, so only these keys are replaced — titles, descriptions
 * and OpenGraph stay per-page.
 */

import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  description:
    "Натяжні стелі в Польщі. ПВХ виробляємо на нашій фабриці в Польщі, поліестер — у Бельгії. Частина Stretchgroup. Монтаж за 1 день, без пилу, гарантія до 15 років.",
  keywords: [
    "натяжні стелі",
    "натяжна стеля",
    "Stretch Sufit",
    "натяжні стелі Польща",
    "акустична стеля",
    "світлова стеля LED",
    "стеля ПВХ",
    "поліестерова стеля",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Stretch Sufit — Нова стеля за один день. Без пилу.",
    description:
      "Натяжні стелі — ПВХ виробництва Польщі, поліестер із Бельгії. Частина бельгійської Stretchgroup. Монтаж за 1 день, без пилу, гарантія до 15 років.",
    images: [siteConfig.ogImage],
  },
};

export default function UaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang="uk";`,
        }}
      />
      <div lang="uk" style={{ display: "contents" }}>
        {children}
      </div>
    </>
  );
}

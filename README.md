# Stretch Sufit

The official Polish website for **Stretch Sufit** — the Polish branch of the Belgian STRETCH® group. Built with Next.js 15 (App Router) + TypeScript + Tailwind CSS v4, deployed on Vercel.

## Environment variables

All variables are optional — the app builds and runs without any of them. Add them in Vercel → Project Settings → Environment Variables for production.

| Variable | Purpose | Where to get it |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL | `https://altodesign.pl` |
| `NEXT_PUBLIC_POSTHOG_KEY` | Product analytics + session replay | posthog.com (EU cloud) |
| `NEXT_PUBLIC_POSTHOG_HOST` | PostHog host | `https://eu.i.posthog.com` |
| `NEXT_PUBLIC_CLARITY_ID` | Heatmaps + session replay (free) | clarity.microsoft.com |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 | analytics.google.com |
| `NEXT_PUBLIC_META_PIXEL_ID` | Facebook/Instagram ads | business.facebook.com |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console verification | search.google.com/search-console |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Bing Webmaster Tools | bing.com/webmasters |

## Project structure

```
/app                  Routes and page metadata
  layout.tsx          Root layout — fonts, consent, analytics, schema
  page.tsx            Homepage
  globals.css         Theme tokens + base styles
  robots.ts           Allows AI crawlers (GPTBot, ClaudeBot, etc.)
  sitemap.ts          Dynamic sitemap

/components
  /sections           Page sections (Hero, Stats, Solutions, etc.)
  /ui                 Primitives (Button, Container, FadeIn, etc.)
  /analytics          Consent + tracking scripts
  /seo                JsonLd component

/content              Typed static content (products, cities, FAQ)
/lib                  site-config, schema builders, analytics helper
/types                Shared TypeScript types
/public
  llms.txt            AI crawler context file
  /images             Hero, gallery, product photography (provide your own)
```

## Adding a new page

Every page must include metadata + JSON-LD schema. Pattern:

```typescript
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { buildService, buildBreadcrumbs } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sufit akustyczny",
  description: "...",
  alternates: { canonical: "/rozwiazania/sufit-akustyczny" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={buildService({ ... })} />
      <JsonLd data={buildBreadcrumbs([ ... ])} />
      <main>...</main>
    </>
  );
}
```

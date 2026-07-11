/**
 * Web app manifest — /manifest.webmanifest
 * File path: /app/manifest.ts
 *
 * Gives the site a proper identity for Android home-screen installs,
 * Chrome's install prompt, and some crawlers that read manifest metadata.
 */

import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — sufity napinane`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "browser",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}

"use client";

/**
 * Unified analytics tracking helper.
 * File path: /lib/analytics.ts
 *
 * Fires the same event into PostHog, GA4, and Meta Pixel. Each platform
 * is checked for presence before firing, so this works even when env vars
 * are missing (the calls become no-ops).
 *
 * Usage:
 *   import { track, analytics } from "@/lib/analytics";
 *   track("cta_click", { location: "hero" });
 *   analytics.phoneClick("footer");
 */

import type { PostHog } from "posthog-js";

type EventProps = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    /** Set by PostHogProvider after the SDK is lazy-loaded on consent. */
    __ph?: PostHog;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function track(eventName: string, props?: EventProps) {
  if (typeof window === "undefined") return;

  // PostHog — instance is attached to window by PostHogProvider after
  // consent-gated lazy load; a static import here would drag the ~55 KiB
  // SDK back into the main bundle for every page.
  try {
    window.__ph?.capture(eventName, props);
  } catch {
    /* no-op */
  }

  // Google Analytics 4
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, props || {});
    }
  } catch {
    /* no-op */
  }

  // Meta Pixel — map our events to standard conversion events
  try {
    const metaMap: Record<string, string> = {
      cta_click: "Lead",
      form_submit: "Lead",
      phone_click: "Contact",
      whatsapp_click: "Contact",
      quote_request: "Lead",
    };
    if (typeof window.fbq === "function" && metaMap[eventName]) {
      window.fbq("track", metaMap[eventName], props || {});
    }
  } catch {
    /* no-op */
  }
}

// Autocomplete-friendly helpers for the most common events
export const analytics = {
  ctaClick: (location: string, label: string) =>
    track("cta_click", { location, label }),

  phoneClick: (location: string) =>
    track("phone_click", { location }),

  whatsappClick: (location: string) =>
    track("whatsapp_click", { location }),

  formSubmit: (form: string, success: boolean) =>
    track("form_submit", { form, success }),

  quoteRequest: (data: { city?: string; surface?: string }) =>
    track("quote_request", data),

  productView: (product: string) => track("product_view", { product }),

  scrollDepth: (percent: number) => track("scroll_depth", { percent }),
};

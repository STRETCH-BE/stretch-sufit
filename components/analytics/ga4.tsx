"use client";

/**
 * Google Analytics 4.
 * File path: /components/analytics/ga4.tsx
 *
 * Uses @next/third-parties for the official, optimized integration.
 * Consent-gated and env-var-gated.
 */

import { GoogleAnalytics } from "@next/third-parties/google";
import { useConsent } from "./consent-provider";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function GA4() {
  const { consent } = useConsent();
  if (!GA_ID || !consent.analytics) return null;
  return <GoogleAnalytics gaId={GA_ID} />;
}

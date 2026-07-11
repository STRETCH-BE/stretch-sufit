"use client";

/**
 * PostHog tracker — initializes the client SDK after analytics consent.
 * File path: /components/analytics/posthog-provider.tsx
 *
 * Tracks pageviews manually because Next.js App Router doesn't fire
 * router events PostHog can latch onto automatically. The pageview is
 * fired on every pathname or query string change.
 *
 * IMPORTANT: this component must NOT wrap the page content. It calls
 * useSearchParams(), which forces everything beneath it out of the
 * static prerender and into client-side rendering. When it wrapped
 * {children}, the entire page body was missing from the prerendered
 * HTML — invisible to non-JS crawlers (GPTBot, ClaudeBot, Bing's basic
 * fetcher). It renders null and is mounted as a sibling instead.
 */

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { useConsent } from "./consent-provider";

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com";

export function PostHogProvider() {
  const { consent } = useConsent();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize once consent is granted and a key exists
  useEffect(() => {
    if (!KEY || !consent.analytics) return;
    if ((posthog as unknown as { __loaded?: boolean }).__loaded) return;

    posthog.init(KEY, {
      api_host: HOST,
      capture_pageview: false, // we capture manually below
      capture_pageleave: true,
      person_profiles: "identified_only",
      session_recording: {
        maskAllInputs: true,
      },
    });
  }, [consent.analytics]);

  // Fire pageview on route change
  useEffect(() => {
    if (!KEY || !consent.analytics) return;
    if (!(posthog as unknown as { __loaded?: boolean }).__loaded) return;
    const url =
      pathname +
      (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    posthog.capture("$pageview", { $current_url: url });
  }, [pathname, searchParams, consent.analytics]);

  return null;
}

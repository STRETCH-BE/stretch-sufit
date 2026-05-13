"use client";

/**
 * Scroll depth tracker.
 * File path: /components/analytics/scroll-tracker.tsx
 *
 * Fires events at 25/50/75/90% scroll. Useful for measuring content
 * engagement separately from time on page. Resets on route change.
 */

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { analytics } from "@/lib/analytics";
import { useConsent } from "./consent-provider";

const MILESTONES = [25, 50, 75, 90];

export function ScrollTracker() {
  const pathname = usePathname();
  const { consent } = useConsent();
  const fired = useRef<Set<number>>(new Set());

  useEffect(() => {
    fired.current = new Set();
  }, [pathname]);

  useEffect(() => {
    if (!consent.analytics) return;

    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (max <= 0) return;
      const pct = Math.round((h.scrollTop / max) * 100);
      MILESTONES.forEach((m) => {
        if (pct >= m && !fired.current.has(m)) {
          fired.current.add(m);
          analytics.scrollDepth(m);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [consent.analytics]);

  return null;
}

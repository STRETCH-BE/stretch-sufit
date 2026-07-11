"use client";

/**
 * Mobile sticky CTA — English.
 * File path: /components/sections/en/mobile-sticky-cta.tsx
 */

import { useEffect, useState } from "react";
import { TrackedCTA } from "@/components/ui/tracked-cta";

export function MobileStickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-4 bottom-4 z-40 transition-all duration-300 lg:hidden ${
        show
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <TrackedCTA
        event="cta_click"
        props={{ location: "mobile_sticky", label: "free_quote" }}
        href="/en#cta"
        className="block rounded-full bg-red px-5 py-3.5 text-center text-sm font-semibold text-white shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      >
        📞 Book a free measurement
      </TrackedCTA>
    </div>
  );
}

"use client";

/**
 * Mobile sticky CTA bar + WhatsApp floating button (PL tree).
 * File path: /components/sections/mobile-sticky-cta.tsx
 *
 * Mobile (< lg): a bottom-pinned bar, hidden until the user scrolls past
 * the hero. Primary action „Bezpłatna wycena" → /wycena, with tel: and
 * WhatsApp as icon buttons. WhatsApp is integrated INTO the bar instead
 * of a separate floating bubble so the two elements can never overlap.
 *
 * Desktop (lg+): the bar is hidden (the nav carries a persistent CTA),
 * so a floating WhatsApp button bottom-right covers chat intent there.
 *
 * The EN/UA trees use their own variants under sections/en|ua|uk — this
 * file only ships to Polish pages.
 */

import { useEffect, useState } from "react";
import { TrackedCTA } from "@/components/ui/tracked-cta";
import { siteConfig } from "@/lib/site-config";

const WHATSAPP_HREF = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Dzień dobry, proszę o wycenę sufitu napinanego.')}`;

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function MobileStickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile bar */}
      <div
        aria-hidden={!show}
        // inert removes the three links from the tab order while the bar
        // is only visually hidden (opacity-0 keeps them focusable)
        inert={!show}
        className={`fixed inset-x-4 bottom-4 z-40 transition-all duration-300 lg:hidden ${
          show
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <div className="flex items-stretch gap-2">
          <TrackedCTA
            event="phone_click"
            props={{ location: "sticky" }}
            href={`tel:${siteConfig.contact.phonePL}`}
            aria-label="Zadzwoń: +48 730 700 333"
            className="flex w-[52px] items-center justify-center rounded-full border border-white/10 bg-bg-card text-lg shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          >
            📞
          </TrackedCTA>
          <TrackedCTA
            event="cta_wycena"
            props={{ location: "sticky" }}
            href="/wycena"
            className="flex flex-1 items-center justify-center rounded-full bg-red px-4 py-3.5 text-center text-sm font-semibold text-white shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          >
            Bezpłatna wycena
          </TrackedCTA>
          <TrackedCTA
            event="whatsapp_click"
            props={{ location: "sticky" }}
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Napisz na WhatsApp"
            className="flex w-[52px] items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          >
            <WhatsAppIcon className="size-6" />
          </TrackedCTA>
        </div>
      </div>

      {/* Desktop WhatsApp floating button */}
      <TrackedCTA
        event="whatsapp_click"
        props={{ location: "fab" }}
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Napisz na WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-transform hover:scale-105 lg:flex"
      >
        <WhatsAppIcon className="size-7" />
      </TrackedCTA>
    </>
  );
}

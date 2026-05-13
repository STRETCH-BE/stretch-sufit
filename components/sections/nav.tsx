"use client";

/**
 * Top navigation.
 * File path: /components/sections/nav.tsx
 *
 * Client component — listens to scroll position to toggle background opacity
 * (transparent at top, solid black with subtle border once scrolled).
 *
 * Mobile hamburger opens a full-screen menu overlay. The red "Bezpłatna wycena"
 * CTA fires `cta_click` via TrackedCTA.
 *
 * Accessibility: includes a skip-to-main link rendered visible on focus.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { TrackedCTA } from "@/components/ui/tracked-cta";

const navLinks = [
  { href: "/#solutions", label: "Rozwiązania" },
  { href: "/#process", label: "Realizacja" },
  { href: "/#showcase", label: "Galeria" },
  { href: "/#why", label: "Dlaczego my" },
  { href: "/kontakt", label: "Kontakt" },
];

const locales = [
  { code: "pl", label: "PL", href: "/" },
  { code: "en", label: "EN", href: "/en" },
  { code: "uk", label: "UA", href: "/uk" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-red focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Przejdź do treści
      </a>

      <nav
        aria-label="Nawigacja główna"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/8 bg-bg/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between gap-6 px-6 md:px-10 lg:px-14">
          <Logo tone="on-dark" />

          <ul className="hidden items-center gap-9 text-[13px] font-medium text-white/70 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-6 lg:flex">
            <ul className="flex items-center gap-2 text-[12px] font-semibold">
              {locales.map((l, i) => (
                <li key={l.code} className="flex items-center gap-2">
                  <Link
                    href={l.href}
                    className={
                      i === 0
                        ? "text-white"
                        : "text-white/45 hover:text-white"
                    }
                  >
                    {l.label}
                  </Link>
                  {i < locales.length - 1 && (
                    <span aria-hidden="true" className="text-white/20">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <TrackedCTA
              event="cta_click"
              props={{ location: "nav", label: "bezplatna_wycena" }}
              href="/#cta"
              className="rounded-full border border-red bg-red px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-red-deep hover:border-red-deep"
            >
              Bezpłatna wycena
            </TrackedCTA>
          </div>

          <button
            type="button"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`block h-px w-6 bg-white transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-white transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-white transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-bg pt-[72px] transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-6 pb-12 pt-8">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-3xl font-medium tracking-tight text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-6">
            <ul className="flex gap-4 text-[13px] font-semibold text-white/55">
              {locales.map((l, i) => (
                <li key={l.code}>
                  <Link
                    href={l.href}
                    className={i === 0 ? "text-white" : "hover:text-white"}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <TrackedCTA
              event="cta_click"
              props={{ location: "nav_mobile", label: "bezplatna_wycena" }}
              href="/#cta"
              className="rounded-full bg-red px-6 py-4 text-center text-sm font-semibold text-white"
            >
              Bezpłatna wycena
            </TrackedCTA>
          </div>
        </div>
      </div>
    </>
  );
}

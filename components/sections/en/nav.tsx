/**
 * Top navigation — English.
 * File path: /components/sections/en/nav.tsx
 *
 * Thin wrapper around the base Nav that passes English labels and the
 * /en-prefixed hrefs.
 */

import { Nav as BaseNav } from "@/components/sections/nav";

const navLinks = [
  { href: "/en#solutions", label: "Solutions" },
  { href: "/en#process", label: "Process" },
  { href: "/en#showcase", label: "Gallery" },
  { href: "/en#why", label: "Why us" },
  { href: "/en/contact", label: "Contact" },
];

const locales = [
  { code: "pl", label: "PL", href: "/" },
  { code: "en", label: "EN", href: "/en" },
  { code: "ua", label: "UA", href: "/ua" },
];

const labels = {
  skipToContent: "Skip to content",
  mainNav: "Main navigation",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  cta: "Free quote",
};

export function Nav() {
  return (
    <BaseNav
      navLinks={navLinks}
      locales={locales}
      currentLocale="en"
      labels={labels}
      ctaHref="/en#cta"
    />
  );
}

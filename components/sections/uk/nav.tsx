/**
 * Top navigation — Ukrainian.
 * File path: /components/sections/uk/nav.tsx
 */

import { Nav as BaseNav } from "@/components/sections/nav";

const navLinks = [
  { href: "/uk#solutions", label: "Рішення" },
  { href: "/uk#process", label: "Процес" },
  { href: "/uk#showcase", label: "Галерея" },
  { href: "/uk#why", label: "Чому ми" },
  { href: "/uk/kontakty", label: "Контакти" },
];

const locales = [
  { code: "pl", label: "PL", href: "/" },
  { code: "en", label: "EN", href: "/en" },
  { code: "uk", label: "UA", href: "/uk" },
];

const labels = {
  skipToContent: "Перейти до контенту",
  mainNav: "Головна навігація",
  openMenu: "Відкрити меню",
  closeMenu: "Закрити меню",
  cta: "Безкоштовний кошторис",
};

export function Nav() {
  return (
    <BaseNav
      navLinks={navLinks}
      locales={locales}
      currentLocale="uk"
      labels={labels}
      ctaHref="/uk#cta"
    />
  );
}

/**
 * Top navigation — Ukrainian.
 * File path: /components/sections/ua/nav.tsx
 */

import { Nav as BaseNav } from "@/components/sections/nav";

const navLinks = [
  { href: "/ua#solutions", label: "Рішення" },
  { href: "/ua#process", label: "Процес" },
  { href: "/ua#showcase", label: "Галерея" },
  { href: "/ua#why", label: "Чому ми" },
  { href: "/ua/kontakty", label: "Контакти" },
];

const locales = [
  { code: "pl", label: "PL", href: "/" },
  { code: "en", label: "EN", href: "/en" },
  { code: "ua", label: "UA", href: "/ua" },
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
      currentLocale="ua"
      labels={labels}
      ctaHref="/ua#cta"
    />
  );
}

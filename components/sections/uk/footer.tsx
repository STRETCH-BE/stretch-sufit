/**
 * Footer — Ukrainian.
 * File path: /components/sections/uk/footer.tsx
 */

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { TrackedCTA } from "@/components/ui/tracked-cta";
import { siteConfig } from "@/lib/site-config";
import { products } from "@/content/uk/products";

const company = [
  { href: "/uk/pro-nas", label: "Про нас" },
  { href: "/uk/b2b", label: "Співпраця B2B" },
  { href: "/uk/dileri", label: "Стати дилером" },
  { href: "/uk/kariera", label: "Кар'єра" },
  { href: "/uk/pytannya", label: "Блог і FAQ" },
  { href: "/uk/kontakty", label: "Контакти" },
];

const policies = [
  { href: "/polityka-prywatnosci", label: "Політика конфіденційності" },
  { href: "/cookies", label: "Cookies" },
  { href: "/regulamin", label: "Правила" },
  { href: "/uk/harantiya", label: "Гарантія" },
];

const socials = [
  { href: siteConfig.social.facebook, label: "Facebook", glyph: "f" },
  { href: siteConfig.social.instagram, label: "Instagram", glyph: "ig" },
  { href: siteConfig.social.youtube, label: "YouTube", glyph: "▶" },
  { href: siteConfig.social.tiktok, label: "TikTok", glyph: "tt" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-bg py-20 pb-8 text-white">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-16">
          <div>
            <Logo tone="on-dark" size={28} />
            <p className="mt-5 max-w-[320px] text-sm leading-[1.6] text-white/55">
              Частина бельгійської Stretchgroup. Виробник ПВХ натяжних стель у Польщі й монтажник — включно з поліестровими мембранами зі Stretch Productions у Бельгії. Оператор: {siteConfig.legalName}.
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 text-sm transition-colors hover:border-red hover:bg-red"
                >
                  <span aria-hidden="true">{s.glyph}</span>
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Рішення">
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/uk/rishennya/${p.slug}`}
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Компанія">
            {company.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Контакти">
            <li className="text-sm font-semibold text-white">
              {siteConfig.legalName}
            </li>
            <li className="text-sm text-white/55">
              {siteConfig.contact.address.street}
            </li>
            <li className="text-sm text-white/55">
              {siteConfig.contact.address.postalCode}{" "}
              {siteConfig.contact.address.city}, Польща
            </li>
            <li className="pt-3">
              <TrackedCTA
                event="phone_click"
                props={{ location: "footer", language: "ua" }}
                href={`tel:${siteConfig.contact.phonePLUA}`}
                className="text-sm text-white/55 transition-colors hover:text-white"
              >
                {formatPhone(siteConfig.contact.phonePLUA)} (UA)
              </TrackedCTA>
            </li>
            <li>
              <TrackedCTA
                event="phone_click"
                props={{ location: "footer" }}
                href={`tel:${siteConfig.contact.phonePL}`}
                className="text-sm text-white/55 transition-colors hover:text-white"
              >
                {formatPhone(siteConfig.contact.phonePL)} (PL/EN)
              </TrackedCTA>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-sm text-white/55 transition-colors hover:text-white"
              >
                {siteConfig.contact.email}
              </a>
            </li>
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-8 text-[12px] text-white/55">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {policies.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="transition-colors hover:text-white"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            © {new Date().getFullYear()} {siteConfig.name} — Частина Stretchgroup · ПВХ зроблено в Польщі, поліестер у Бельгії
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h5 className="mb-5 font-display text-[13px] font-semibold uppercase tracking-[0.1em] text-red">
        {title}
      </h5>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function formatPhone(p: string) {
  return p.replace(/^(\+\d{2})(\d{3})(\d{3})(\d{3})$/, "$1 $2 $3 $4");
}

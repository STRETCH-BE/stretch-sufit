/**
 * Footer.
 * File path: /components/sections/footer.tsx
 *
 * Server component. Phone links call analytics through small client wrappers
 * (TrackedCTA). All other links are plain Next <Link>. The bottom bar carries
 * the copyright + "Made in Belgium, installed in Poland" tagline.
 */

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { TrackedCTA } from "@/components/ui/tracked-cta";
import { siteConfig } from "@/lib/site-config";
import { products } from "@/content/products";

const company = [
  { href: "/o-nas", label: "O nas" },
  { href: "/wspolpraca-b2b", label: "Współpraca B2B" },
  { href: "/dealerzy", label: "Zostań dealerem" },
  { href: "/kariera", label: "Kariera" },
  { href: "/blog", label: "Blog i FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

const policies = [
  { href: "/polityka-prywatnosci", label: "Polityka prywatności" },
  { href: "/cookies", label: "Cookies" },
  { href: "/regulamin", label: "Regulamin" },
  { href: "/gwarancja", label: "Gwarancja" },
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
          {/* Brand */}
          <div>
            <Logo tone="on-dark" size={28} />
            <p className="mt-5 max-w-[320px] text-sm leading-[1.6] text-white/55">
              Oficjalny polski oddział belgijskiej grupy STRETCH®. Producent
              i wykonawca sufitów napinanych premium. Część grupy{" "}
              {siteConfig.legalName}.
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

          {/* Rozwiązania */}
          <FooterColumn title="Rozwiązania">
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/rozwiazania/${p.slug}`}
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          {/* Firma */}
          <FooterColumn title="Firma">
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

          {/* Kontakt */}
          <FooterColumn title="Kontakt">
            <li className="text-sm font-semibold text-white">
              {siteConfig.legalName}
            </li>
            <li className="text-sm text-white/55">
              {siteConfig.contact.address.street}
            </li>
            <li className="text-sm text-white/55">
              {siteConfig.contact.address.postalCode}{" "}
              {siteConfig.contact.address.city}
            </li>
            <li className="pt-3">
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
              <TrackedCTA
                event="phone_click"
                props={{ location: "footer", language: "ua" }}
                href={`tel:${siteConfig.contact.phonePLUA}`}
                className="text-sm text-white/55 transition-colors hover:text-white"
              >
                {formatPhone(siteConfig.contact.phonePLUA)} (PL/UA)
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
            © {new Date().getFullYear()} {siteConfig.name} — Część grupy
            STRETCH® · Made in Belgium, installed in Poland
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

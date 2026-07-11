/**
 * Custom 404 page.
 * File path: /app/not-found.tsx
 *
 * A branded not-found page keeps lost visitors (and crawlers following a
 * stale link) on the site instead of bouncing. Links to the highest-value
 * pages in all three locales.
 */

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center bg-bg text-white">
      <Container className="py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red">
          404
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
          Ta strona nie istnieje — ale Twój nowy sufit może powstać w 1 dzień.
        </h1>
        <p className="mt-6 max-w-xl text-white/70">
          Strona mogła zostać przeniesiona lub adres zawiera literówkę.
          Zacznij od strony głównej albo przejdź prosto do wyceny.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/" variant="primary">
            Strona główna
          </Button>
          <Button href="/rozwiazania" variant="ghost">
            Rozwiązania
          </Button>
          <Button href="/kontakt" variant="ghost">
            Bezpłatna wycena
          </Button>
        </div>

        <p className="mt-12 text-sm text-white/50">
          <Link href="/en" className="underline hover:text-white">
            English version
          </Link>
          {" · "}
          <Link href="/ua" className="underline hover:text-white">
            Українська версія
          </Link>
        </p>
      </Container>
    </main>
  );
}

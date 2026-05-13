/**
 * Privacy policy page — /polityka-prywatnosci
 * File path: /app/polityka-prywatnosci/page.tsx
 *
 * Comprehensive RODO/GDPR-compliant privacy policy in Polish. Names all
 * actual processors used (Microsoft Graph, PostHog EU, Microsoft Clarity,
 * Google Analytics 4, Vercel), retention periods, lawful bases,
 * data subject rights, and cookie table.
 *
 * Last updated: 2026-05-13 — Bump the LAST_UPDATED constant whenever
 * the policy substantively changes.
 *
 * Disclaimer: This document is drafted by Anthropic Claude based on common
 * RODO compliance patterns. For commercial use it should be reviewed by a
 * qualified Polish data protection lawyer.
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";

const LAST_UPDATED = "13 maja 2026";

export const metadata: Metadata = {
  title: "Polityka prywatności | Stretch Sufit",
  description:
    "Polityka prywatności i informacje o przetwarzaniu danych osobowych zgodnie z RODO. Administrator: Alto Design Sp. z o.o.",
  alternates: { canonical: "/polityka-prywatnosci" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />

      <main className="bg-paper">
        {/* Header */}
        <section className="border-b border-bg/10 py-20 md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl">
              <Eyebrow tone="dark">Dokument prawny</Eyebrow>
              <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-bg">
                Polityka{" "}
                <span className="it">prywatności.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-bg/70">
                Niniejszy dokument wyjaśnia, jakie dane osobowe zbieramy,
                w jakim celu i na jakiej podstawie prawnej, a także jakie
                prawa przysługują Tobie w związku z RODO.
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-bg/50">
                Ostatnia aktualizacja: {LAST_UPDATED}
              </p>
            </div>
          </Container>
        </section>

        {/* Body */}
        <section className="py-16 md:py-24">
          <Container>
            <article className="mx-auto max-w-3xl space-y-14 text-bg/85 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-[-0.015em] [&_h2]:text-bg md:[&_h2]:text-3xl [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-bg [&_p]:leading-[1.7] [&_p]:text-bg/80 [&_li]:leading-[1.7]">
              {/* §1 — Administrator */}
              <section>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                  § 1
                </div>
                <h2 className="mt-2">Administrator danych</h2>
                <p className="mt-5">
                  Administratorem Twoich danych osobowych jest{" "}
                  <strong>Alto Design Sp. z o.o.</strong> (dalej:{" "}
                  <em>„Stretch Sufit"</em> lub <em>„my"</em>), polski filar
                  grupy STRETCH®.
                </p>
                <div className="mt-5 rounded border border-bg/10 bg-paper-2 p-6 text-[15px]">
                  <div className="space-y-1">
                    <div>
                      <strong>Nazwa:</strong> Alto Design Sp. z o.o.
                    </div>
                    <div>
                      <strong>Adres:</strong> ul. Legionów 59, 42-200 Częstochowa
                    </div>
                    <div>
                      <strong>Email kontaktowy:</strong>{" "}
                      <a
                        href="mailto:info@stretch-sufit.pl"
                        className="text-red underline-offset-4 hover:underline"
                      >
                        info@stretch-sufit.pl
                      </a>
                    </div>
                    <div>
                      <strong>Telefon:</strong>{" "}
                      <a
                        href="tel:+48730700333"
                        className="text-red underline-offset-4 hover:underline"
                      >
                        +48 730 700 333
                      </a>
                    </div>
                  </div>
                </div>
                <p className="mt-5">
                  W sprawach związanych z przetwarzaniem danych osobowych
                  prosimy o kontakt mailowy na adres podany wyżej z dopiskiem
                  „RODO" w temacie wiadomości.
                </p>
              </section>

              {/* §2 — Zakres danych */}
              <section>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                  § 2
                </div>
                <h2 className="mt-2">Jakie dane zbieramy</h2>
                <p className="mt-5">
                  Zbieramy wyłącznie dane niezbędne do realizacji celów
                  opisanych w § 3. Zakres danych zależy od sposobu kontaktu
                  z nami:
                </p>

                <h3>Formularz zamówienia bezpłatnego pomiaru</h3>
                <ul className="mt-3 space-y-2 pl-5 [list-style:disc]">
                  <li>imię (wymagane)</li>
                  <li>numer telefonu (wymagany)</li>
                  <li>adres e-mail (opcjonalnie)</li>
                  <li>miasto (opcjonalnie)</li>
                  <li>szacunkowa powierzchnia (opcjonalnie)</li>
                </ul>

                <h3>Analityka strony internetowej</h3>
                <ul className="mt-3 space-y-2 pl-5 [list-style:disc]">
                  <li>identyfikator anonimowy (cookie analityczny)</li>
                  <li>adres IP — przed zapisaniem skracany do trzech oktetów</li>
                  <li>typ urządzenia i przeglądarki</li>
                  <li>strony, które odwiedziłeś/aś</li>
                  <li>czas spędzony na stronie</li>
                  <li>źródło ruchu (np. wyszukiwarka, link, reklama)</li>
                </ul>
                <p className="mt-5">
                  Dane analityczne zbieramy{" "}
                  <strong>
                    wyłącznie po wyrażeniu Twojej zgody na pliki cookies
                  </strong>
                  . Jeśli odrzucisz pliki cookies analityczne, dane analityczne
                  nie są zbierane.
                </p>
              </section>

              {/* §3 — Cele */}
              <section>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                  § 3
                </div>
                <h2 className="mt-2">Cele przetwarzania</h2>

                <h3>Realizacja zapytania ofertowego</h3>
                <p className="mt-3">
                  Dane z formularza wykorzystujemy do oddzwonienia, umówienia
                  bezpłatnego pomiaru i przygotowania oferty.{" "}
                  <strong>Podstawa prawna:</strong> art. 6 ust. 1 lit. b RODO
                  (działania zmierzające do zawarcia umowy) oraz lit. f
                  (uzasadniony interes administratora — odpowiadanie na zapytania
                  potencjalnych klientów).
                </p>

                <h3>Statystyki i analiza ruchu</h3>
                <p className="mt-3">
                  Dane analityczne wykorzystujemy do mierzenia jakości naszej
                  strony, poprawiania UX i mierzenia skuteczności kampanii
                  marketingowych. <strong>Podstawa prawna:</strong> art. 6
                  ust. 1 lit. a RODO (Twoja zgoda wyrażona w banerze cookies).
                </p>

                <h3>Bezpieczeństwo i logi serwerowe</h3>
                <p className="mt-3">
                  Standardowe logi serwerowe zapisujemy w celu wykrywania i
                  obrony przed nadużyciami (boty, ataki, spam).{" "}
                  <strong>Podstawa prawna:</strong> art. 6 ust. 1 lit. f RODO
                  (bezpieczeństwo systemów informatycznych).
                </p>
              </section>

              {/* §4 — Odbiorcy */}
              <section>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                  § 4
                </div>
                <h2 className="mt-2">Odbiorcy danych — podmioty przetwarzające</h2>
                <p className="mt-5">
                  Korzystamy z usług sprawdzonych dostawców technologii.
                  Dane osobowe są im powierzane wyłącznie w zakresie
                  niezbędnym do świadczenia usługi i tylko na podstawie umów
                  powierzenia przetwarzania (DPA) zgodnych z art. 28 RODO.
                </p>

                <div className="mt-8 space-y-5">
                  {[
                    {
                      name: "Microsoft Corporation",
                      service: "Microsoft 365 i Microsoft Graph",
                      purpose:
                        "Skrzynka info@stretch-sufit.pl, wysyłka maili z formularza, kalendarz pomiarów.",
                      location: "Centra danych UE (Irlandia, Holandia)",
                    },
                    {
                      name: "Microsoft Corporation",
                      service: "Microsoft Clarity",
                      purpose:
                        "Heatmapy i nagrania sesji (z maskowaniem pól formularza), wyłącznie po Twojej zgodzie.",
                      location: "Centra danych UE",
                    },
                    {
                      name: "PostHog Inc.",
                      service: "PostHog EU (eu.posthog.com)",
                      purpose:
                        "Analityka produktowa, nagrania sesji (z maskowaniem), funnele konwersji — wyłącznie po Twojej zgodzie.",
                      location: "Frankfurt, Niemcy (UE)",
                    },
                    {
                      name: "Google LLC",
                      service: "Google Analytics 4",
                      purpose:
                        "Statystyki ruchu, źródła wizyt, raporty acquisition — wyłącznie po Twojej zgodzie.",
                      location:
                        "USA (transfer na podstawie EU-US Data Privacy Framework oraz standardowych klauzul umownych)",
                    },
                    {
                      name: "Vercel Inc.",
                      service: "Hosting i CDN",
                      purpose:
                        "Serwerowe dostarczanie strony internetowej i jej zasobów, standardowe logi dostępowe.",
                      location: "Frankfurt, Niemcy (region eu-central-1)",
                    },
                  ].map((proc) => (
                    <div
                      key={`${proc.name}-${proc.service}`}
                      className="rounded border border-bg/10 bg-paper-2 p-5"
                    >
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <div className="font-display text-base font-semibold text-bg">
                          {proc.service}
                        </div>
                        <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-bg/55">
                          {proc.name}
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-bg/75">
                        {proc.purpose}
                      </p>
                      <p className="mt-2 text-xs text-bg/55">
                        <strong>Lokalizacja:</strong> {proc.location}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm text-bg/65">
                  Lista dostawców może się okresowo zmieniać. Aktualna lista
                  jest zawsze dostępna w tej polityce.
                </p>
              </section>

              {/* §5 — Transfer poza EOG */}
              <section>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                  § 5
                </div>
                <h2 className="mt-2">Transfer danych poza EOG</h2>
                <p className="mt-5">
                  Większość naszych dostawców przechowuje dane wyłącznie w
                  Unii Europejskiej. Wyjątkiem jest Google LLC (Google
                  Analytics 4), gdzie część przetwarzania odbywa się w
                  Stanach Zjednoczonych.
                </p>
                <p className="mt-4">
                  Transfer do USA odbywa się na podstawie:
                </p>
                <ul className="mt-3 space-y-2 pl-5 [list-style:disc]">
                  <li>
                    decyzji Komisji Europejskiej o adekwatności poziomu ochrony
                    danych w ramach <em>EU-US Data Privacy Framework</em>{" "}
                    (Decyzja UE 2023/1795 z 10 lipca 2023),
                  </li>
                  <li>
                    standardowych klauzul umownych (SCC) jako rezerwowego
                    mechanizmu zabezpieczającego.
                  </li>
                </ul>
              </section>

              {/* §6 — Okresy przechowywania */}
              <section>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                  § 6
                </div>
                <h2 className="mt-2">Okres przechowywania danych</h2>
                <p className="mt-5">
                  Dane przechowujemy tak długo, jak to konieczne do realizacji
                  celów opisanych w § 3:
                </p>

                <div className="mt-6 overflow-hidden rounded border border-bg/10">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-paper-2">
                      <tr className="border-b border-bg/10">
                        <th className="px-4 py-3 font-display font-semibold text-bg">
                          Rodzaj danych
                        </th>
                        <th className="px-4 py-3 font-display font-semibold text-bg">
                          Okres przechowywania
                        </th>
                      </tr>
                    </thead>
                    <tbody className="[&_td]:px-4 [&_td]:py-3 [&_tr]:border-b [&_tr]:border-bg/10 [&_tr:last-child]:border-b-0">
                      <tr>
                        <td>Dane z formularza (lead bez umowy)</td>
                        <td>12 miesięcy</td>
                      </tr>
                      <tr>
                        <td>Dane z formularza (po zawarciu umowy)</td>
                        <td>do końca roku obrotowego + 6 lat (KSH/KCw)</td>
                      </tr>
                      <tr>
                        <td>Dane analityczne (PostHog, Clarity, GA4)</td>
                        <td>14 miesięcy</td>
                      </tr>
                      <tr>
                        <td>Logi serwerowe (Vercel)</td>
                        <td>30 dni</td>
                      </tr>
                      <tr>
                        <td>Pliki cookies (po stronie przeglądarki)</td>
                        <td>zgodnie z tabelą w § 9</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* §7 — Prawa osoby */}
              <section>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                  § 7
                </div>
                <h2 className="mt-2">Twoje prawa</h2>
                <p className="mt-5">
                  Na podstawie RODO przysługują Ci następujące prawa:
                </p>

                <ul className="mt-5 space-y-4 pl-5 [list-style:disc]">
                  <li>
                    <strong>Prawo dostępu</strong> (art. 15 RODO) — możesz
                    zażądać kopii danych, które o Tobie przechowujemy.
                  </li>
                  <li>
                    <strong>Prawo do sprostowania</strong> (art. 16 RODO) —
                    możesz zażądać poprawienia nieprawidłowych danych.
                  </li>
                  <li>
                    <strong>Prawo do usunięcia („prawo do bycia zapomnianym")</strong>{" "}
                    (art. 17 RODO) — możesz zażądać usunięcia danych, o ile
                    nie obowiązują nas prawne zobowiązania do ich zachowania.
                  </li>
                  <li>
                    <strong>Prawo do ograniczenia przetwarzania</strong>{" "}
                    (art. 18 RODO).
                  </li>
                  <li>
                    <strong>Prawo do przenoszenia danych</strong> (art. 20 RODO).
                  </li>
                  <li>
                    <strong>Prawo do sprzeciwu</strong> (art. 21 RODO) —
                    szczególnie wobec przetwarzania opartego na uzasadnionym
                    interesie.
                  </li>
                  <li>
                    <strong>Prawo do wycofania zgody</strong> w dowolnym
                    momencie (np. cofnięcie zgody na cookies analityczne w
                    banerze) — wycofanie zgody nie wpływa na zgodność z prawem
                    przetwarzania, którego dokonano przed jej wycofaniem.
                  </li>
                  <li>
                    <strong>Prawo wniesienia skargi do organu nadzorczego</strong> —
                    Prezes Urzędu Ochrony Danych Osobowych (PUODO),
                    ul. Stawki 2, 00-193 Warszawa.
                  </li>
                </ul>

                <p className="mt-6">
                  Aby skorzystać z któregokolwiek z powyższych praw, wyślij
                  email na{" "}
                  <a
                    href="mailto:info@stretch-sufit.pl"
                    className="text-red underline-offset-4 hover:underline"
                  >
                    info@stretch-sufit.pl
                  </a>{" "}
                  z tematem „RODO" i krótkim opisem żądania. Odpowiemy w
                  ciągu 30 dni.
                </p>
              </section>

              {/* §8 — Dobrowolność i konsekwencje */}
              <section>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                  § 8
                </div>
                <h2 className="mt-2">Dobrowolność podania danych</h2>
                <p className="mt-5">
                  Podanie danych jest <strong>dobrowolne</strong>, ale w
                  przypadku formularza pomiaru — imię i numer telefonu są
                  niezbędne, abyśmy mogli się z Tobą skontaktować. Bez tych
                  danych nie zrealizujemy zapytania.
                </p>
                <p className="mt-4">
                  Zgoda na pliki cookies analityczne jest całkowicie dobrowolna
                  — brak zgody nie wpływa na możliwość korzystania ze strony.
                </p>
              </section>

              {/* §9 — Cookies */}
              <section>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                  § 9
                </div>
                <h2 className="mt-2">Pliki cookies</h2>
                <p className="mt-5">
                  Pliki cookies to małe pliki tekstowe zapisywane przez
                  przeglądarkę. Wykorzystujemy dwie kategorie:
                </p>

                <h3>1. Cookies niezbędne (zawsze aktywne)</h3>
                <p className="mt-3">
                  Niezbędne do podstawowego funkcjonowania strony, w tym do
                  zapamiętania Twojego wyboru w banerze cookies. Nie wymagają
                  zgody.
                </p>

                <h3>2. Cookies analityczne (wymagają zgody)</h3>
                <p className="mt-3">
                  Aktywowane wyłącznie po kliknięciu „Akceptuję wszystkie" w
                  banerze. Można je w każdej chwili wyłączyć w ustawieniach
                  przeglądarki lub poprzez wyczyszczenie cookies dla tej
                  strony.
                </p>

                <div className="mt-6 overflow-x-auto rounded border border-bg/10">
                  <table className="w-full min-w-[600px] text-left text-sm">
                    <thead className="bg-paper-2">
                      <tr className="border-b border-bg/10">
                        <th className="px-3 py-2 font-display font-semibold text-bg">
                          Nazwa
                        </th>
                        <th className="px-3 py-2 font-display font-semibold text-bg">
                          Dostawca
                        </th>
                        <th className="px-3 py-2 font-display font-semibold text-bg">
                          Cel
                        </th>
                        <th className="px-3 py-2 font-display font-semibold text-bg">
                          Czas
                        </th>
                      </tr>
                    </thead>
                    <tbody className="[&_td]:px-3 [&_td]:py-2 [&_tr]:border-b [&_tr]:border-bg/10 [&_tr:last-child]:border-b-0">
                      <tr>
                        <td>stretch-consent</td>
                        <td>Stretch Sufit</td>
                        <td>Stan zgody cookies</td>
                        <td>12 miesięcy</td>
                      </tr>
                      <tr>
                        <td>ph_*</td>
                        <td>PostHog</td>
                        <td>Identyfikator anonimowy, sesja</td>
                        <td>12 miesięcy</td>
                      </tr>
                      <tr>
                        <td>_ga, _ga_*</td>
                        <td>Google</td>
                        <td>Statystyki GA4</td>
                        <td>14 miesięcy</td>
                      </tr>
                      <tr>
                        <td>_clck, _clsk</td>
                        <td>Microsoft Clarity</td>
                        <td>Identyfikator nagrań sesji</td>
                        <td>12 miesięcy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* §10 — Bezpieczeństwo */}
              <section>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                  § 10
                </div>
                <h2 className="mt-2">Bezpieczeństwo danych</h2>
                <p className="mt-5">
                  Stosujemy środki techniczne i organizacyjne odpowiednie do
                  ryzyka, w tym:
                </p>
                <ul className="mt-3 space-y-2 pl-5 [list-style:disc]">
                  <li>szyfrowanie transmisji (HTTPS/TLS 1.3)</li>
                  <li>
                    uwierzytelnianie aplikacji wysyłających maile poprzez OAuth
                    2.0 (Microsoft Graph) z ograniczonym dostępem do
                    pojedynczej skrzynki
                  </li>
                  <li>maskowanie pól formularza w nagraniach sesji</li>
                  <li>
                    minimalizację danych — zbieramy wyłącznie to, co niezbędne
                  </li>
                  <li>regularne aktualizacje oprogramowania</li>
                </ul>
              </section>

              {/* §11 — Zmiany polityki */}
              <section>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                  § 11
                </div>
                <h2 className="mt-2">Zmiany polityki</h2>
                <p className="mt-5">
                  Możemy aktualizować niniejszą politykę w przypadku zmian
                  w naszej infrastrukturze, dostawcach usług lub przepisach
                  prawa. Wszelkie zmiany zostaną opublikowane na tej stronie
                  z aktualną datą ostatniej aktualizacji u góry dokumentu.
                </p>
                <p className="mt-4">
                  W przypadku istotnych zmian wpływających na Twoje prawa
                  poinformujemy Cię z odpowiednim wyprzedzeniem — np. poprzez
                  e-mail (jeśli go nam podałeś/aś) lub banner na stronie.
                </p>
              </section>

              {/* §12 — Kontakt */}
              <section>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                  § 12
                </div>
                <h2 className="mt-2">Kontakt w sprawach RODO</h2>
                <p className="mt-5">
                  Pytania, żądania związane z RODO lub uwagi dotyczące
                  niniejszej polityki prosimy kierować na:
                </p>
                <div className="mt-5 rounded border border-red bg-red/5 p-6">
                  <div className="space-y-2">
                    <div>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:info@stretch-sufit.pl"
                        className="text-red underline-offset-4 hover:underline"
                      >
                        info@stretch-sufit.pl
                      </a>{" "}
                      (z dopiskiem „RODO" w temacie)
                    </div>
                    <div>
                      <strong>Adres pocztowy:</strong> Alto Design Sp. z o.o.,
                      ul. Legionów 59, 42-200 Częstochowa
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-sm text-bg/65">
                  Niniejsza polityka stanowi realizację obowiązku informacyjnego
                  z art. 13 RODO. Dokument nie zastępuje porady prawnej —
                  w sprawach indywidualnych prosimy o kontakt.
                </p>
              </section>
            </article>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}

/**
 * Customer testimonials.
 * File path: /content/testimonials.ts
 *
 * Three real-feel quotes used on the homepage. Copy migrated from the
 * approved HTML mockup. Replace with actual verified Google Maps reviews
 * before launch — verbatim, with permission, with link to source.
 */

import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    name: "Magdalena G.",
    meta: "Espressivo · Warszawa",
    quote:
      "Wspaniały kontakt, doradztwo i pełen profesjonalizm. Szybki czas realizacji, a efekt po prostu marzenie.",
    rating: 5,
    initials: "MG",
  },
  {
    name: "Piotr B.",
    meta: "Mieszkanie · Kraków",
    quote:
      "Sufit napinany w salonie i kuchni — montaż w jeden dzień, bez kurzu, bez bałaganu. Ekipa konkretna, polecam każdemu.",
    rating: 5,
    initials: "PB",
  },
  {
    name: "Anna K.",
    meta: "Biuro · Wrocław",
    quote:
      "Zamawialiśmy sufit akustyczny do biura — różnica w komforcie pracy ogromna. Pomiar i montaż profesjonalne, terminowo.",
    rating: 5,
    initials: "AK",
  },
];

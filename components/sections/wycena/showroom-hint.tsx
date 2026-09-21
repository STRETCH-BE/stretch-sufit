"use client";

/**
 * Thank-you page add-on for Silesian leads.
 * File path: /components/sections/wycena/showroom-hint.tsx
 *
 * The quote form stores the chosen city slug in sessionStorage
 * ("wycena_lead_city") on a successful submit. When that city is in the
 * Silesian voivodeship this block invites the lead to the Częstochowa
 * showroom — the one physical advantage over every competitor in the
 * agglomeration. Renders nothing for other regions or without storage.
 */

import { useEffect, useState } from "react";
import { TrackedCTA } from "@/components/ui/tracked-cta";

const LEAD_CITY_STORAGE_KEY = "wycena_lead_city";

export type ShowroomCity = {
  slug: string;
  name: string;
  /** Road km from ul. Legionów 59; 0 = Częstochowa itself. */
  distanceFromHq: number;
};

export function ShowroomHint({ cities }: { cities: ShowroomCity[] }) {
  const [city, setCity] = useState<ShowroomCity | null>(null);

  useEffect(() => {
    try {
      const slug = sessionStorage.getItem(LEAD_CITY_STORAGE_KEY);
      if (!slug) return;
      const match = cities.find((c) => c.slug === slug);
      if (match) setCity(match);
    } catch {
      /* sessionStorage unavailable — no hint */
    }
  }, [cities]);

  if (!city) return null;

  return (
    <div className="mt-12 rounded border border-red/40 bg-red/10 p-6 text-left md:p-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
        Jesteś ze Śląska?
      </p>
      <p className="mt-3 text-[16px] leading-relaxed text-white/85">
        {city.distanceFromHq === 0
          ? "Nasz showroom i fabryka są w Częstochowie przy ul. Legionów 59."
          : `Nasz showroom i fabryka są ${city.distanceFromHq} km od Ciebie — ul. Legionów 59, Częstochowa.`}{" "}
        Obejrzysz próbki folii PVC, poliestru i akustycznych, profile i
        oświetlenie LED na żywo, pn–pt 9:00–15:30.
      </p>
      <TrackedCTA
        event="showroom_click"
        props={{ location: "thankyou", city: city.slug }}
        href="/kontakt#showroom"
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-red hover:text-red"
      >
        Umów wizytę w showroomie →
      </TrackedCTA>
    </div>
  );
}

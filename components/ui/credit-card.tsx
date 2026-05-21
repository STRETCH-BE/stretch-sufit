/**
 * CreditCard — design-studio / partner credit block.
 * File path: /components/ui/credit-card.tsx
 */

import type { ReactNode } from "react";
import { TrackedCTA } from "@/components/ui/tracked-cta";

type Props = {
  label: string;
  name: string;
  location?: string;
  url?: string;
  logo?: ReactNode;
  body?: ReactNode;
  outboundEvent?: { destination: string; project: string };
  className?: string;
};

export function CreditCard({
  label,
  name,
  location,
  url,
  logo,
  body,
  outboundEvent,
  className = "",
}: Props) {
  const linkLabel = `Strona ${name}${
    url?.includes("creneau") ? " — opis projektu AFAS Lounge" : ""
  } (otwiera się w nowej karcie)`;

  return (
    <div
      className={`rounded-2xl border border-black/10 bg-paper p-6 md:p-8 ${className}`}
    >
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-bg/55">
        {label}
      </p>
      <div className="mt-4 flex items-center gap-4">
        {logo ?? (
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-bg/5 font-semibold text-bg/70">
            {name.charAt(0)}
          </span>
        )}
        <div>
          <p className="text-xl font-semibold leading-tight">{name}</p>
          {location && <p className="text-sm text-bg/60">{location}</p>}
        </div>
      </div>
      {body && (
        <div className="mt-5 text-base leading-relaxed text-bg/75">{body}</div>
      )}
      {url && outboundEvent && (
        <TrackedCTA
          href={url}
          event="outbound_click"
          props={outboundEvent}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4 hover:text-red"
          aria-label={linkLabel}
        >
          Zobacz projekt na stronie {name} <span aria-hidden>↗</span>
        </TrackedCTA>
      )}
    </div>
  );
}

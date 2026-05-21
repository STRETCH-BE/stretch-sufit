// components/ui/CreditCard.tsx
import { TrackedCTA } from "@/components/ui/TrackedCTA";
import { cn } from "@/lib/utils";

type Props = {
  label: string; // "Studio projektowe"
  name: string; // "Creneau International"
  location?: string; // "Hasselt, Belgia"
  url?: string;
  logo?: React.ReactNode;
  body?: React.ReactNode;
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
  className,
}: Props) {
  const linkLabel = `Strona ${name}${
    url?.includes("creneau") ? " — opis projektu AFAS Lounge" : ""
  } (otwiera się w nowej karcie)`;

  return (
    <div
      className={cn(
        "rounded-2xl border border-black/10 bg-[color:var(--paper)] p-6 md:p-8",
        className,
      )}
    >
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-black/55">
        {label}
      </p>
      <div className="mt-4 flex items-center gap-4">
        {logo ?? (
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/5 font-semibold text-black/70">
            {name.charAt(0)}
          </span>
        )}
        <div>
          <p className="text-xl font-semibold leading-tight">{name}</p>
          {location && <p className="text-sm text-black/60">{location}</p>}
        </div>
      </div>
      {body && (
        <div className="mt-5 text-base leading-relaxed text-black/75">
          {body}
        </div>
      )}
      {url && outboundEvent && (
        <TrackedCTA
          href={url}
          event="outbound_click"
          props={outboundEvent}
          variant="link"
          external
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4 hover:text-[color:var(--brand-red)]"
          aria-label={linkLabel}
        >
          Zobacz projekt na stronie {name} <span aria-hidden>↗</span>
        </TrackedCTA>
      )}
    </div>
  );
}

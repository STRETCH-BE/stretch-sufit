/**
 * Ticker — infinite scrolling red band.
 * File path: /components/sections/ticker.tsx
 *
 * Server component. Animation is a pure CSS keyframe defined in globals.css
 * (`@keyframes ticker-scroll`). Phrases are duplicated inline to make the
 * loop seamless without JS.
 *
 * Reusable: pass `items` to override. Default = homepage copy, so the
 * existing <Ticker /> call site on the homepage keeps working unchanged.
 */

const DEFAULT_PHRASES = [
  "PVC produced in Poland",
  "Polyester made in Belgium",
  "Bezszwowo do 6,50 m",
  "Mat · Połysk · Brokat · Tekstura",
  "Bez prac wykończeniowych",
  "100% recyklingu",
];

type Props = {
  items?: string[];
};

export function Ticker({ items = DEFAULT_PHRASES }: Props = {}) {
  return (
    <div
      role="presentation"
      className="overflow-hidden border-y border-red-deep bg-red py-4 text-white"
    >
      <div className="flex w-max animate-[ticker-scroll_40s_linear_infinite] gap-12 whitespace-nowrap font-display text-[18px] font-semibold tracking-[-0.01em]">
        {[...items, ...items].map((phrase, i) => (
          <span key={i} className="inline-flex items-center gap-12">
            {phrase}
            <span aria-hidden="true" className="text-sm opacity-60">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

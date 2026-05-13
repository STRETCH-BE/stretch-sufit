/**
 * Ticker — infinite scrolling red band.
 * File path: /components/sections/ticker.tsx
 *
 * Server component. Animation is a pure CSS keyframe defined in globals.css
 * (`@keyframes ticker-scroll`). Phrases are duplicated inline to make the
 * loop seamless without JS.
 *
 * Decorative — `aria-hidden` and the content is duplicated, so screen readers
 * see it once via the first set.
 */

const phrases = [
  "Made in Belgium",
  "Installed in Poland",
  "Naadloos tot 5,15m",
  "130+ kolorów",
  "Bez prac wykończeniowych",
  "100% recyklingu",
];

export function Ticker() {
  return (
    <div
      role="presentation"
      className="overflow-hidden border-y border-red-deep bg-red py-4 text-white"
    >
      <div className="flex w-max animate-[ticker-scroll_40s_linear_infinite] gap-12 whitespace-nowrap font-display text-[18px] font-semibold tracking-[-0.01em]">
        {[...phrases, ...phrases].map((phrase, i) => (
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

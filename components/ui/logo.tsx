/**
 * Brand logo lockup — typographic "stretch sufit" with a red dot.
 * File path: /components/ui/logo.tsx
 *
 * Pure typography (Bricolage Grotesque) — no SVG asset needed. Color tone
 * adapts: on dark backgrounds "sufit" is white, on paper it's black.
 */

import Link from "next/link";

type Props = {
  tone?: "on-dark" | "on-paper";
  /** Pixel font size for the wordmark — default 22 (nav), pass 28 in footer. */
  size?: number;
  className?: string;
};

export function Logo({ tone = "on-dark", size = 22, className = "" }: Props) {
  const sufitColor = tone === "on-paper" ? "text-bg" : "text-white";
  return (
    <Link
      href="/"
      aria-label="Stretch Sufit — strona główna"
      className={`inline-flex items-center font-display font-bold tracking-[-0.04em] leading-none ${className}`}
      style={{ fontSize: size }}
    >
      <span className="text-red">stretch</span>
      <span className={sufitColor}>sufit</span>
      <span
        aria-hidden="true"
        className="ml-[3px] inline-block size-1.5 rounded-full bg-red"
        style={{ marginTop: size * 0.4 }}
      />
    </Link>
  );
}

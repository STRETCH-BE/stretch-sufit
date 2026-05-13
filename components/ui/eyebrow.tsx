/**
 * Eyebrow — small red dash + uppercase label that sits above section titles.
 * File path: /components/ui/eyebrow.tsx
 *
 * Migrated from the `.section-eyebrow` class in the HTML mockup. The `tone`
 * prop lets it switch between dark sections (default) and paper sections.
 */

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  tone?: "on-dark" | "on-paper";
  className?: string;
};

export function Eyebrow({ children, tone = "on-dark", className = "" }: Props) {
  const textColor = tone === "on-paper" ? "text-bg/55" : "text-white/55";

  return (
    <div
      className={`flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.18em] ${textColor} ${className}`}
    >
      <span
        aria-hidden="true"
        className="block h-px w-8 bg-red"
      />
      <span>{children}</span>
    </div>
  );
}

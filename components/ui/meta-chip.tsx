/**
 * MetaChip — small pill-style chip used for inline tags/meta.
 * File path: /components/ui/meta-chip.tsx
 */

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

export function MetaChip({ children, tone = "dark", className = "" }: Props) {
  const toneClasses =
    tone === "dark"
      ? "border-white/20 bg-white/5 text-white/90 backdrop-blur-sm"
      : "border-black/15 bg-black/[0.03] text-black/80";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${toneClasses} ${className}`}
    >
      {children}
    </span>
  );
}

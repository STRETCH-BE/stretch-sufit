/**
 * SectionTitle — large Bricolage Grotesque heading.
 * File path: /components/ui/section-title.tsx
 *
 * Accepts ReactNode children so the consumer can mix <span className="it"> for
 * Instrument Serif italic accents inline with the bold display copy.
 *
 *   <SectionTitle>
 *     Sześć sposobów<br/><span className="it">na nowy sufit.</span>
 *   </SectionTitle>
 */

import type { ReactNode, ElementType } from "react";

type Props = {
  children: ReactNode;
  /** HTML heading level. Default: h2 (section titles). Use h1 only in Hero. */
  as?: Extract<ElementType, "h1" | "h2" | "h3">;
  /** Size variant — `display` is for hero-tier, `section` is the default. */
  size?: "section" | "display";
  className?: string;
};

export function SectionTitle({
  children,
  as: Tag = "h2",
  size = "section",
  className = "",
}: Props) {
  const sizeClasses =
    size === "display"
      ? "text-[clamp(56px,8vw,132px)] leading-[0.92] tracking-[-0.04em] font-semibold"
      : "text-[clamp(36px,4.5vw,64px)] leading-[0.98] tracking-[-0.03em] font-medium";

  return (
    <Tag
      className={`font-display ${sizeClasses} ${className}`}
    >
      {children}
    </Tag>
  );
}

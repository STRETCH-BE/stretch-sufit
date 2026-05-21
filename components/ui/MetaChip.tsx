// components/ui/MetaChip.tsx
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

export function MetaChip({ children, tone = "dark", className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        tone === "dark"
          ? "border-white/20 bg-white/5 text-white/90 backdrop-blur-sm"
          : "border-black/15 bg-black/[0.03] text-black/80",
        className,
      )}
    >
      {children}
    </span>
  );
}

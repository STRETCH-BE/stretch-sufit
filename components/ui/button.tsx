/**
 * Button primitive.
 * File path: /components/ui/button.tsx
 *
 * Renders as either a <button> or, if `href` is provided, a Next <Link>.
 * Variants mirror the .btn-primary / .btn-ghost / .btn-light / .btn-dark classes
 * from the approved HTML mockup.
 *
 * For analytics-tracked CTAs use <TrackedCTA> instead (it wraps this component
 * via composition where needed).
 */

import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "ghost" | "light" | "dark";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-red text-white border border-red hover:bg-red-deep hover:border-red-deep",
  ghost:
    "bg-transparent text-white border border-white/20 hover:bg-white hover:text-bg",
  light:
    "bg-white text-bg border border-white hover:bg-paper-2",
  dark:
    "bg-bg text-white border border-bg hover:bg-[#2a2a2a]",
};

const sizeClasses: Record<Size, string> = {
  md: "px-[26px] py-4 text-sm",
  lg: "px-8 py-[18px] text-[15px]",
};

const baseClasses =
  "inline-flex items-center gap-2.5 rounded-full font-semibold tracking-[0.01em] " +
  "transition-all duration-[250ms] ease-out whitespace-nowrap " +
  "hover:-translate-y-px focus-visible:outline-none";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  children: ReactNode;
  className?: string;
};

type AsLink = CommonProps & { href: string } & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "children" | "className"
>;
type AsButton = CommonProps & { href?: undefined } & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "className"
>;
type Props = AsLink | AsButton;

export function Button(props: Props) {
  const {
    variant = "primary",
    size = "md",
    arrow,
    children,
    className = "",
  } = props;

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && (
        <span
          aria-hidden="true"
          className="transition-transform duration-[250ms] group-hover/btn:translate-x-1"
        >
          →
        </span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={`group/btn ${classes}`} {...rest}>
        {content}
      </Link>
    );
  }

  const { href: _ignored, ...rest } = props as AsButton & { href?: undefined };
  return (
    <button className={`group/btn ${classes}`} {...rest}>
      {content}
    </button>
  );
}

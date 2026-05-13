/**
 * Container — wraps section content at max-w-[1440px] with consistent padding.
 * File path: /components/ui/container.tsx
 *
 * Use inside every section. The horizontal padding scales for mobile.
 */

import type { ReactNode, ElementType } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

export function Container({ children, as: Tag = "div", className = "" }: Props) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-14 ${className}`}
    >
      {children}
    </Tag>
  );
}

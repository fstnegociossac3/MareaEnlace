import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "outline";

const badgeVariants: Record<BadgeVariant, string> = {
  default: "border-accent/30 bg-accent/10 text-accent-strong",
  success: "border-success/30 bg-success/10 text-success",
  warning: "border-warning/30 bg-warning/10 text-warning",
  danger: "border-danger/30 bg-danger/10 text-danger-strong",
  info: "border-info/30 bg-info/10 text-info-strong",
  outline: "border-border bg-surface text-muted-foreground",
};

export interface BadgeProps {
  variant?: BadgeVariant;
  dot?: boolean;
  className?: string;
  children: ReactNode;
}

export function Badge({
  variant = "default",
  dot = false,
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
        badgeVariants[variant],
        className,
      )}
    >
      {dot ? <span aria-hidden className="size-1.5 rounded-full bg-current" /> : null}
      {children}
    </span>
  );
}
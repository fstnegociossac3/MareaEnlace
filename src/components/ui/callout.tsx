import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type CalloutTone = "default" | "info" | "warning" | "success" | "danger";

const calloutTones: Record<CalloutTone, string> = {
  default: "border-border bg-surface-muted text-foreground",
  info: "border-info/30 bg-info/10 text-foreground",
  warning: "border-warning/30 bg-warning/10 text-foreground",
  success: "border-success/30 bg-success/10 text-foreground",
  danger: "border-danger/30 bg-danger/10 text-foreground",
};

export interface CalloutProps {
  title?: ReactNode;
  children: ReactNode;
  tone?: CalloutTone;
  className?: string;
}

export function Callout({ title, children, tone = "info", className }: CalloutProps) {
  return (
    <div
      role="note"
      className={cn(
        "flex flex-col gap-1 rounded-xl border px-4 py-3 text-sm leading-relaxed",
        calloutTones[tone],
        className,
      )}
    >
      {title ? (
        <p className="font-display text-sm font-semibold tracking-tight">{title}</p>
      ) : null}
      <div>{children}</div>
    </div>
  );
}
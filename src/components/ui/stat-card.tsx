import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Card } from "./card";

export type StatTone = "default" | "success" | "warning" | "danger" | "info";

const toneValue: Record<StatTone, string> = {
  default: "text-foreground",
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger-strong",
  info: "text-info-strong",
};

const toneTile: Record<StatTone, string> = {
  default: "bg-surface-muted text-foreground",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  danger: "bg-danger/10 text-danger-strong",
  info: "bg-info/10 text-info-strong",
};

export interface StatCardProps {
  label: string;
  value: ReactNode;
  hint?: ReactNode;
  icon?: ReactNode;
  tone?: StatTone;
  className?: string;
}

export function StatCard({
  label,
  value,
  hint,
  icon,
  tone = "default",
  className,
}: StatCardProps) {
  return (
    <Card className={cn("flex flex-col gap-3", className)}>
      <div className="flex items-start justify-between gap-3">
        <p className="label">{label}</p>
        {icon ? (
          <span
            className={cn(
              "flex size-9 shrink-0 items-center justify-center rounded-xl",
              toneTile[tone],
            )}
          >
            {icon}
          </span>
        ) : null}
      </div>
      <p
        className={cn(
          "numeric font-display text-3xl font-semibold tracking-tight",
          toneValue[tone],
        )}
      >
        {value}
      </p>
      {hint ? <p className="text-sm text-muted-foreground">{hint}</p> : null}
    </Card>
  );
}
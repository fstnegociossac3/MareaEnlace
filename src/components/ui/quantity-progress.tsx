import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type ProgressTone = "default" | "info" | "success" | "warning" | "danger";

const toneFill: Record<ProgressTone, string> = {
  default: "bg-accent",
  info: "bg-info",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
};

export interface QuantityProgressProps {
  label: ReactNode;
  value: number;
  total: number;
  unit?: string;
  tone?: ProgressTone;
  showPercent?: boolean;
  className?: string;
}

export function QuantityProgress({
  label,
  value,
  total,
  unit,
  tone = "default",
  showPercent = true,
  className,
}: QuantityProgressProps) {
  const percent = total > 0 ? Math.min(100, Math.max(0, (value / total) * 100)) : 0;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="numeric text-sm text-muted-foreground">
          {value} <span aria-hidden>/</span> {total}
          {unit ? ` ${unit}` : ""}
        </span>
      </div>
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={value}
        aria-label={typeof label === "string" ? label : undefined}
        className="h-2 w-full overflow-hidden rounded-full bg-surface-muted"
      >
        <div
          className={cn(
            "h-full rounded-full transition-[width] duration-500 ease-out",
            toneFill[tone],
          )}
          style={{ width: `${percent}%` }}
        />
      </div>
      {showPercent ? (
        <p className="numeric text-xs text-muted-foreground">
          {Math.round(percent)}%
        </p>
      ) : null}
    </div>
  );
}
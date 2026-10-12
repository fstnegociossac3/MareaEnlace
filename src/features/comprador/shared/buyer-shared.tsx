import { cn } from "@/lib/utils";

export interface FieldGridProps {
  items: readonly string[];
}

export function FieldGrid({ items }: FieldGridProps) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2 rounded-lg border border-border bg-surface-muted/60 px-3 py-2 text-xs text-muted-foreground"
        >
          <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-accent/60" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export type StatusTone = "muted" | "info" | "warning" | "success" | "danger";

const statusDot: Record<StatusTone, string> = {
  muted: "bg-muted-foreground/50",
  info: "bg-info",
  warning: "bg-warning",
  success: "bg-success",
  danger: "bg-danger",
};

export interface StatusChip {
  label: string;
  tone: StatusTone;
}

export interface StatusChipsProps {
  items: readonly StatusChip[];
}

export function StatusChips({ items }: StatusChipsProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item.label}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground"
        >
          <span
            aria-hidden
            className={cn("size-1.5 shrink-0 rounded-full", statusDot[item.tone])}
          />
          {item.label}
        </li>
      ))}
    </ul>
  );
}
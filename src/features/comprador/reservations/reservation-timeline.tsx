import { cn } from "@/lib/utils";

export type ReservationStepStatus =
  | "pendiente"
  | "en_proceso"
  | "completado"
  | "cancelado";

export interface ReservationStep {
  title: string;
  description?: string;
  status: ReservationStepStatus;
}

const stepStyles: Record<ReservationStepStatus, string> = {
  pendiente: "border-border bg-surface-muted text-muted-foreground",
  en_proceso: "border-info/40 bg-info/10 text-info-strong",
  completado: "border-success/40 bg-success/10 text-success",
  cancelado: "border-danger/40 bg-danger/10 text-danger-strong",
};

const stepLabel: Record<ReservationStepStatus, string> = {
  pendiente: "Pendiente",
  en_proceso: "En proceso",
  completado: "Completado",
  cancelado: "Cancelado",
};

export interface ReservationTimelineProps {
  steps: readonly ReservationStep[];
  className?: string;
}

export function ReservationTimeline({ steps, className }: ReservationTimelineProps) {
  return (
    <ol className={cn("flex flex-col", className)}>
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <li key={step.title} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span
                aria-hidden
                className={cn(
                  "mt-1 size-3 shrink-0 rounded-full border-2",
                  stepStyles[step.status],
                )}
              />
              {!isLast ? (
                <span
                  aria-hidden
                  className="w-px flex-1 bg-border"
                />
              ) : null}
            </div>
            <div className={cn("pb-6", isLast && "pb-0")}>
              <div className="flex flex-col gap-0.5">
                <p className="flex items-center gap-2 text-sm font-medium text-foreground">
                  {step.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {stepLabel[step.status]}
                  {step.description ? ` · ${step.description}` : ""}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
import { NavIcon } from "@/components/brand/nav-icon";
import { Callout } from "@/components/ui/callout";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { NavIconName } from "@/config/navigation";
import { cn } from "@/lib/utils";

interface SupplyMetric {
  label: string;
  icon: NavIconName;
  note: string;
}

const previsionMetrics: readonly SupplyMetric[] = [
  {
    label: "Toneladas previstas",
    icon: "tag",
    note: "Volumen estimado según la oferta publicada antes del desembarque.",
  },
];

const realMetrics: readonly SupplyMetric[] = [
  {
    label: "Toneladas adquiridas",
    icon: "package",
    note: "Cantidad pesada y validada en el desembarque.",
  },
  {
    label: "Toneladas asignadas",
    icon: "users",
    note: "Volumen repartido entre los compradores.",
  },
  {
    label: "Toneladas despachadas",
    icon: "truck",
    note: "Salidas confirmadas hacia las plantas.",
  },
  {
    label: "Toneladas disponibles",
    icon: "box-check",
    note: "Saldo real disponible para colocar.",
  },
];

function SupplyRow({ label, icon, note }: SupplyMetric) {
  return (
    <li>
      <div className="flex items-center gap-4 py-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-muted-foreground">
          <NavIcon name={icon} className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-sm font-medium text-foreground">{label}</p>
            <p className="numeric text-sm font-semibold text-muted-foreground">
              — <span className="font-normal text-muted-foreground">tn</span>
            </p>
          </div>
          <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
            {note}
          </p>
        </div>
      </div>
      <span aria-hidden className="block h-1.5 w-full rounded-full bg-surface-muted" />
    </li>
  );
}

function SupplyGroup({
  title,
  dotClass,
  metrics,
}: {
  title: string;
  dotClass: string;
  metrics: readonly SupplyMetric[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <span aria-hidden className={cn("size-2 rounded-full", dotClass)} />
        {title}
      </h3>
      <ul className="divide-y divide-border">
        {metrics.map((metric) => (
          <SupplyRow key={metric.label} {...metric} />
        ))}
      </ul>
    </div>
  );
}

export function SupplyOverview() {
  return (
    <section className="motion-safe:animate-fade-up" style={{ animationDelay: "140ms" }}>
      <SectionHeading
        eyebrow="Cantidades"
        title="Abastecimiento e inventario"
        description="Volúmenes en toneladas por etapa de la operación. Sin registros conectados todavía."
      />
      <Card className="mt-8 flex flex-col gap-6 p-6 sm:p-8">
        <SupplyGroup
          title="Previsión de oferta"
          dotClass="bg-accent"
          metrics={previsionMetrics}
        />
        <div aria-hidden className="border-t border-border" />
        <SupplyGroup
          title="Movimiento real"
          dotClass="bg-info"
          metrics={realMetrics}
        />
        <Callout tone="info" title="La previsión no equivale a stock disponible">
          La oferta prevista es un plan de producción según la pesca esperada.
          El saldo real se determina al desembarque y después de la
          asignación entre compradores.
        </Callout>
      </Card>
    </section>
  );
}
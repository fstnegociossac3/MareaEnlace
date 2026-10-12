import { NavIcon } from "@/components/brand/nav-icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCard } from "@/components/ui/stat-card";
import type { NavIconName } from "@/config/navigation";
import { cn } from "@/lib/utils";

interface Metric {
  label: string;
  icon: NavIconName;
  description: string;
}

const comercialMetrics: readonly Metric[] = [
  {
    label: "Ofertas vigentes",
    icon: "tag",
    description: "Ofertas publicadas para la operación del día.",
  },
  {
    label: "Reservas con anticipo",
    icon: "calendar",
    description: "Reservas confirmadas con anticipo recibido.",
  },
  {
    label: "Compras reales",
    icon: "package",
    description: "Compras validadas al desembarque.",
  },
];

const logisticaMetrics: readonly Metric[] = [
  {
    label: "Propuestas pendientes",
    icon: "users",
    description: "Propuestas en espera de aceptación final.",
  },
  {
    label: "Pedidos por despachar",
    icon: "truck",
    description: "Pedidos confirmados listos para despacho.",
  },
  {
    label: "Devoluciones pendientes",
    icon: "rotate",
    description: "Devoluciones en gestión con el procesador.",
  },
];

function MetricGroup({
  title,
  dotClass,
  metrics,
  tone,
}: {
  title: string;
  dotClass: string;
  metrics: readonly Metric[];
  tone: "info" | "default";
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <span aria-hidden className={cn("size-2 rounded-full", dotClass)} />
        {title}
      </h3>
      <div className="grid gap-5 sm:grid-cols-3">
        {metrics.map((metric) => (
          <StatCard
            key={metric.label}
            label={metric.label}
            value="—"
            hint={`Sin datos · ${metric.description}`}
            icon={<NavIcon name={metric.icon} className="size-5" />}
            tone={tone}
          />
        ))}
      </div>
    </div>
  );
}

export function OperationsOverview() {
  return (
    <section className="motion-safe:animate-fade-up" style={{ animationDelay: "60ms" }}>
      <SectionHeading
        eyebrow="Estado operativo"
        title="Resumen del estado operativo"
        description="Indicadores de la operación comercial y logística. No hay datos conectados todavía: cada valor aparecerá cuando se habiliten los módulos."
      />
      <div className="mt-8 flex flex-col gap-8">
        <MetricGroup
          title="Comercial"
          dotClass="bg-accent"
          metrics={comercialMetrics}
          tone="info"
        />
        <MetricGroup
          title="Logística y atención"
          dotClass="bg-info"
          metrics={logisticaMetrics}
          tone="default"
        />
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        Las métricas financieras (anticipos y devoluciones) se gestionan por
        separado en su propia sección para no confundirlas con las ventas.
      </p>
    </section>
  );
}
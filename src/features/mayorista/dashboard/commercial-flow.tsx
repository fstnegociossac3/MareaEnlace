import { NavIcon } from "@/components/brand/nav-icon";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { NavIconName } from "@/config/navigation";

const flowStages: readonly { label: string; icon: NavIconName }[] = [
  { label: "Publicación de ofertas", icon: "tag" },
  { label: "Reservas y anticipos", icon: "wallet" },
  { label: "Compra real al desembarque", icon: "package" },
  { label: "Asignación de lotes", icon: "users" },
  { label: "Propuesta y aceptación final", icon: "check" },
  { label: "Generación de pedido", icon: "clipboard" },
  { label: "Despacho", icon: "truck" },
  { label: "Recepción en planta", icon: "building" },
];

export function CommercialFlow() {
  return (
    <section className="motion-safe:animate-fade-up" style={{ animationDelay: "100ms" }}>
      <SectionHeading
        eyebrow="Proceso"
        title="Flujo de comercialización"
        description="Secuencia prevista por el manual funcional: de la oferta publicada hasta la recepción en la planta compradora."
      />
      <Card className="mt-8 p-6 sm:p-8">
        <ol className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {flowStages.map((stage, index) => (
            <li
              key={stage.label}
              className="flex min-h-full flex-col gap-3 rounded-xl border border-border bg-surface-muted/60 p-3"
            >
              <span
                aria-hidden
                className="numeric font-display text-xs font-semibold tracking-wider text-accent-strong"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex size-9 items-center justify-center rounded-lg bg-accent/10 text-accent-strong">
                <NavIcon name={stage.icon} className="size-[18px]" />
              </span>
              <p className="text-xs font-medium leading-snug text-foreground">
                {stage.label}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          Las etapas describen el proceso de comercialización y no representan
          una operación en curso. El estado de cada etapa aparecerá cuando se
          conecten los módulos operativos.
        </p>
      </Card>
    </section>
  );
}
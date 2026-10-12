import { NavIcon } from "@/components/brand/nav-icon";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { NavIconName } from "@/config/navigation";

const journeyStages: readonly { label: string; icon: NavIconName }[] = [
  { label: "Explorar ofertas", icon: "compass" },
  { label: "Solicitar toneladas", icon: "clipboard" },
  { label: "Pagar anticipo", icon: "wallet" },
  { label: "Esperar compra real al desembarque", icon: "package" },
  { label: "Revisar condiciones finales", icon: "receipt" },
  { label: "Aceptar o cancelar", icon: "check" },
  { label: "Consultar pedido y despacho", icon: "truck" },
  { label: "Confirmar recepción", icon: "box-check" },
];

export function BuyerJourney() {
  return (
    <section
      id="proceso-de-compra"
      className="scroll-mt-20 motion-safe:animate-fade-up"
      style={{ animationDelay: "90ms" }}
    >
      <SectionHeading
        eyebrow="Proceso"
        title="Cómo compras en MareaEnlace"
        description="Recorrido informativo de una operación de preventa: de explorar la oferta hasta confirmar la recepción en tu planta."
      />
      <Card className="mt-8 p-6 sm:p-8">
        <ol className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {journeyStages.map((stage, index) => (
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
          Este flujo describe el proceso orientado a la planta compradora y no
          representa una operación en curso.
        </p>
      </Card>
    </section>
  );
}
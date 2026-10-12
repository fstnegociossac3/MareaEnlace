import { Badge } from "@/components/ui/badge";
import { Callout } from "@/components/ui/callout";
import { Card } from "@/components/ui/card";
import { formatCurrency } from "@/lib/format";

import type { SpeciesOffer } from "./offer-types";

export interface OfferDetailProps {
  /**
   * Oferta real. Cuando no se provee, el componente representa una plantilla
   * visual sin valores transaccionales («—»), útil para el diseño en
   * desarrollo.
   */
  offer?: SpeciesOffer;
}

const placeholder = "—";

const defaultRules: readonly { title: string; description: string }[] = [
  {
    title: "Condiciones de asignación",
    description:
      "La asignación de toneladas se confirma al desembarque según la disponibilidad real de la pesca.",
  },
  {
    title: "Reglas de aceptación",
    description:
      "La planta puede aceptar una entrega parcial o cancelar antes de confirmar la venta, según lo acordado.",
  },
  {
    title: "Reglas de devolución",
    description:
      "Las devoluciones siguen el proceso del procesador y no implican dinero devuelto hasta su confirmación.",
  },
];

export function OfferDetail({ offer }: OfferDetailProps) {
  const fields: readonly { label: string; value: string }[] = [
    { label: "Especie", value: offer?.speciesName ?? placeholder },
    { label: "Vendedor", value: offer?.sellerName ?? placeholder },
    {
      label: "Punto de desembarque",
      value: offer?.landingPort ?? placeholder,
    },
    {
      label: "Fecha prevista",
      value: offer?.expectedLandingDate ?? placeholder,
    },
    {
      label: "Cantidad estimada",
      value: offer ? `${offer.estimatedTonnes} tn` : placeholder,
    },
    {
      label: "Calidad o condición comercial",
      value: offer?.qualityCondition ?? placeholder,
    },
    {
      label: "Precio referencial",
      value: offer?.referencePricePerTon
        ? `${formatCurrency(offer.referencePricePerTon)} / tn`
        : placeholder,
    },
    {
      label: "Anticipo por tonelada",
      value: offer?.requiredAdvancePerTon
        ? formatCurrency(offer.requiredAdvancePerTon)
        : placeholder,
    },
    { label: "Vigencia", value: offer?.validUntil ?? placeholder },
    {
      label: "Estado de publicación",
      value: offer?.status ?? placeholder,
    },
  ];

  return (
    <Card className="flex flex-col gap-6 p-6 sm:p-8">
      <div className="flex flex-col gap-2 border-b border-border pb-5">
        <Badge variant="outline" className="w-fit" dot>
          Plantilla visual · Sin datos reales
        </Badge>
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Detalle de una oferta
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Estructura que presentará cada oferta cuando los mayoristas conecten
          su oferta prevista. No contiene valores transaccionales.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <dl className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
          {fields.map((field) => (
            <div key={field.label}>
              <dt className="label mb-1">{field.label}</dt>
              <dd className="numeric text-base font-medium text-foreground">
                {field.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-col gap-4">
          {defaultRules.map((rule) => (
            <div
              key={rule.title}
              className="rounded-xl border border-border bg-surface-muted/60 px-4 py-3"
            >
              <p className="font-display text-sm font-semibold tracking-tight">
                {rule.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {rule.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-border pt-5">
        <Callout tone="info" title="La oferta es una previsión">
          Una oferta no representa stock confirmado: es la pesca esperada de
          un desembarque próximo.
        </Callout>
        <Callout tone="info" title="El anticipo no garantiza toneladas">
          El anticipo confirma la intención de compra, no asegura la cantidad
          final, que se ajusta al desembarque real.
        </Callout>
        <Callout tone="warning" title="El precio final se confirma posteriormente">
          El precio referencial es orientativo. El precio definitivo se
          confirma al revisar las condiciones finales antes de aceptar la
          venta.
        </Callout>
        <Callout tone="warning" title="Entrega parcial o cancelación">
          La planta puede aceptar una entrega parcial o cancelar antes de
          confirmar la venta, según las condiciones acordadas con el mayorista.
        </Callout>
      </div>
    </Card>
  );
}
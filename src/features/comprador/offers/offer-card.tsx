import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { formatCurrency } from "@/lib/format";

import type { SpeciesOffer } from "./offer-types";

export interface OfferCardProps {
  offer: SpeciesOffer;
}

const statusVariantMap: Record<
  SpeciesOffer["status"],
  "info" | "default" | "outline"
> = {
  prevista: "info",
  publicada: "default",
  cerrada: "outline",
};

const statusLabel: Record<SpeciesOffer["status"], string> = {
  prevista: "Previsión",
  publicada: "Publicada",
  cerrada: "Cerrada",
};

function MetaRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="numeric text-right font-medium text-foreground">{value}</span>
    </div>
  );
}

export function OfferCard({ offer }: OfferCardProps) {
  return (
    <Card hover className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between gap-3">
          <Badge variant={statusVariantMap[offer.status]} dot>
            {statusLabel[offer.status]}
          </Badge>
        </div>
        <h3 className="font-display text-lg font-semibold tracking-tight">
          {offer.speciesName}
        </h3>
        <p className="text-sm text-muted-foreground">{offer.sellerName}</p>
      </div>
      <div className="flex flex-col gap-2 border-t border-border pt-3">
        <MetaRow label="Desembarque" value={offer.landingPort} />
        <MetaRow label="Fecha prevista" value={offer.expectedLandingDate} />
        <MetaRow label="Cantidad estimada" value={`${offer.estimatedTonnes} tn`} />
        {offer.referencePricePerTon !== undefined ? (
          <MetaRow
            label="Precio referencial"
            value={`${formatCurrency(offer.referencePricePerTon)} / tn`}
          />
        ) : null}
        {offer.requiredAdvancePerTon !== undefined ? (
          <MetaRow
            label="Anticipo / tn"
            value={formatCurrency(offer.requiredAdvancePerTon)}
          />
        ) : null}
      </div>
    </Card>
  );
}
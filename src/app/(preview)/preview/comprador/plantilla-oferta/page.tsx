import type { Metadata } from "next";

import { CompradorShell } from "@/features/comprador/shell";
import { OfferDetail } from "@/features/comprador/offers/offer-detail";

export const metadata: Metadata = {
  title: "Plantilla de oferta · Portal de la planta compradora",
  robots: { index: false, follow: false },
};

export default function PlantillaOfertaPage() {
  return (
    <CompradorShell
      title="Plantilla de detalle de oferta"
      description="Estructura visual de una oferta pesquera para desarrollo. No contiene valores reales."
    >
      <div className="mt-8">
        <OfferDetail />
      </div>
    </CompradorShell>
  );
}
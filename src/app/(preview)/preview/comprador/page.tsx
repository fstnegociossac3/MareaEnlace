import type { Metadata } from "next";

import { BuyerHome } from "@/features/comprador/buyer-home";
import { CompradorShell } from "@/features/comprador/shell";

export const metadata: Metadata = {
  title: "Inicio · Portal de la planta compradora",
  robots: { index: false, follow: false },
};

export default function CompradorInicioPage() {
  return (
    <CompradorShell hidePageHeader>
      <BuyerHome />
    </CompradorShell>
  );
}
import type { Metadata } from "next";

import { MayoristaDashboard } from "@/features/mayorista/dashboard/mayorista-dashboard";
import { MayoristaShell } from "@/features/mayorista/shell";

export const metadata: Metadata = {
  title: "Centro de operaciones · Panel del mayorista",
  robots: { index: false, follow: false },
};

export default function MayoristaInicioPage() {
  return (
    <MayoristaShell hidePageHeader>
      <MayoristaDashboard />
    </MayoristaShell>
  );
}
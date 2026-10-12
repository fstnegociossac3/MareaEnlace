import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";

import {
  compradorNavigation,
  previewCompradorBase,
  type NavigationItem,
} from "@/config/navigation";
import { CompradorShell } from "@/features/comprador/shell";
import { BuyerOrders } from "@/features/comprador/orders/buyer-orders";
import { BuyerRefunds } from "@/features/comprador/refunds/buyer-refunds";
import { BuyerReservations } from "@/features/comprador/reservations/buyer-reservations";
import { OfferCatalog } from "@/features/comprador/offers/offer-catalog";
import { PreviewSection } from "@/features/preview/preview-section";

const sections: readonly NavigationItem[] = compradorNavigation.flatMap(
  (group) => group.items,
);

const sectionViews: Record<string, ComponentType> = {
  "explorar-ofertas": OfferCatalog,
  "mis-reservas": BuyerReservations,
  "mis-pedidos": BuyerOrders,
  "mis-devoluciones": BuyerRefunds,
};

function slugOf(item: NavigationItem): string {
  return item.href.slice(previewCompradorBase.length + 1);
}

const slugs: readonly string[] = sections
  .filter((item) => item.href !== previewCompradorBase)
  .map(slugOf);

export function generateStaticParams() {
  return slugs.map((seccion) => ({ seccion }));
}

export const dynamicParams = false;

interface CompradorSeccionPageProps {
  params: Promise<{ seccion: string }>;
}

export async function generateMetadata({
  params,
}: CompradorSeccionPageProps): Promise<Metadata> {
  const { seccion } = await params;
  const item = sections.find((candidate) => slugOf(candidate) === seccion);
  if (!item) return {};
  return {
    title: `${item.label} · Portal de la planta compradora`,
    robots: { index: false, follow: false },
  };
}

export default async function CompradorSeccionPage({
  params,
}: CompradorSeccionPageProps) {
  const { seccion } = await params;
  const item = sections.find((candidate) => slugOf(candidate) === seccion);
  if (!item) {
    notFound();
  }

  const SectionView = sectionViews[seccion] ?? PreviewSection;

  return (
    <CompradorShell title={item.label} description={item.description}>
      <div className="mt-8">
        <SectionView />
      </div>
    </CompradorShell>
  );
}
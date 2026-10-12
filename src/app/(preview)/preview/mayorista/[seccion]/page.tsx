import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  mayoristaNavigation,
  previewMayoristaBase,
  type NavigationItem,
} from "@/config/navigation";
import { MayoristaShell } from "@/features/mayorista/shell";
import { PreviewSection } from "@/features/preview/preview-section";

const sections: readonly NavigationItem[] = mayoristaNavigation.flatMap(
  (group) => group.items,
);

function slugOf(item: NavigationItem): string {
  return item.href.slice(previewMayoristaBase.length + 1);
}

const slugs: readonly string[] = sections
  .filter((item) => item.href !== previewMayoristaBase)
  .map(slugOf);

export function generateStaticParams() {
  return slugs.map((seccion) => ({ seccion }));
}

export const dynamicParams = false;

interface MayoristaSeccionPageProps {
  params: Promise<{ seccion: string }>;
}

export async function generateMetadata({
  params,
}: MayoristaSeccionPageProps): Promise<Metadata> {
  const { seccion } = await params;
  const item = sections.find((candidate) => slugOf(candidate) === seccion);
  if (!item) return {};
  return {
    title: `${item.label} · Panel del mayorista`,
    robots: { index: false, follow: false },
  };
}

export default async function MayoristaSeccionPage({
  params,
}: MayoristaSeccionPageProps) {
  const { seccion } = await params;
  const item = sections.find((candidate) => slugOf(candidate) === seccion);
  if (!item) {
    notFound();
  }

  return (
    <MayoristaShell title={item.label} description={item.description}>
      <PreviewSection />
    </MayoristaShell>
  );
}
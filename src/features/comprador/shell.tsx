import type { ReactNode } from "react";

import { AppShell } from "@/components/layout/app-shell";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { compradorNavigation } from "@/config/navigation";

export interface CompradorShellProps {
  title?: string;
  description?: string;
  hidePageHeader?: boolean;
  children: ReactNode;
}

export function CompradorShell({
  title,
  description,
  hidePageHeader = false,
  children,
}: CompradorShellProps) {
  return (
    <AppShell
      navigation={compradorNavigation}
      contextLabel="Portal de la planta compradora"
    >
      <PageContainer>
        {!hidePageHeader ? (
          <PageHeader
            eyebrow="Portal de la planta compradora"
            title={title ?? ""}
            description={description}
          />
        ) : null}
        {children}
      </PageContainer>
    </AppShell>
  );
}
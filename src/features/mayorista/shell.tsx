import type { ReactNode } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { AppShell } from "@/components/layout/app-shell";
import { mayoristaNavigation } from "@/config/navigation";

export interface MayoristaShellProps {
  title?: string;
  description?: string;
  hidePageHeader?: boolean;
  children: ReactNode;
}

export function MayoristaShell({
  title,
  description,
  hidePageHeader = false,
  children,
}: MayoristaShellProps) {
  return (
    <AppShell
      navigation={mayoristaNavigation}
      contextLabel="Panel del mayorista"
    >
      <PageContainer>
        {!hidePageHeader ? (
          <PageHeader
            eyebrow="Panel del mayorista"
            title={title ?? ""}
            description={description}
          />
        ) : null}
        {children}
      </PageContainer>
    </AppShell>
  );
}
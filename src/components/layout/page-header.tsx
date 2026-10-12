import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface PageHeaderProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  children?: ReactNode;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
  children,
}: PageHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-5 border-b border-border pb-6", className)}>
      <div className="flex flex-col gap-2">
        {eyebrow ? (
          <Badge variant="outline" className="w-fit">
            {eyebrow}
          </Badge>
        ) : null}
        <h1 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h1>
        {description ? (
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      {children ? (
        <div className="flex items-center gap-3">{children}</div>
      ) : null}
    </div>
  );
}
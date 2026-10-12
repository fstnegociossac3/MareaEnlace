import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface CardProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  hover?: boolean;
}

export function Card({ className, style, children, hover = false }: CardProps) {
  return (
    <div
      style={style}
      className={cn(
        "rounded-2xl border border-border bg-surface p-6 shadow-soft transition-shadow duration-200",
        hover && "hover:border-primary/30 hover:shadow-lift",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("flex flex-col gap-1", className)}>{children}</div>;
}

export function CardTitle({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <h3
      className={cn(
        "font-display text-lg font-semibold tracking-tight text-foreground",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <p className={cn("text-sm leading-relaxed text-muted-foreground", className)}>
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("flex flex-col gap-3", className)}>{children}</div>;
}

export function CardFooter({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("flex items-center gap-2", className)}>{children}</div>;
}
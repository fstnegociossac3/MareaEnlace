import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface FormFieldProps {
  id: string;
  label: ReactNode;
  htmlFor?: string;
  required?: boolean;
  help?: ReactNode;
  error?: ReactNode;
  className?: string;
  children: ReactNode;
}

export function FormField({
  id,
  label,
  htmlFor,
  required = false,
  help,
  error,
  className,
  children,
}: FormFieldProps) {
  const controlId = htmlFor ?? id;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={controlId} className="text-sm font-medium text-foreground">
        {label}
        {required ? <span aria-hidden className="text-danger"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-danger">
          {error}
        </p>
      ) : help ? (
        <p id={`${id}-help`} className="text-sm text-muted-foreground">
          {help}
        </p>
      ) : null}
    </div>
  );
}
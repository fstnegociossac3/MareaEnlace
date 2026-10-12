import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

import { fieldBase } from "./field-styles";

export type InputProps = ComponentProps<"input">;

export function Input({ className, ...props }: InputProps) {
  return <input className={cn(fieldBase, "h-11", className)} {...props} />;
}
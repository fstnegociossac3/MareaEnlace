import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

import { fieldBase } from "./field-styles";

export type TextareaProps = ComponentProps<"textarea">;

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(fieldBase, "min-h-32 resize-y py-3 leading-relaxed", className)}
      {...props}
    />
  );
}
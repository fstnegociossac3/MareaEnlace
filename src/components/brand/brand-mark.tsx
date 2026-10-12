import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground",
        className,
      )}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="size-5" fill="none">
        <path
          d="M2 14c2.2-2.6 4.4-2.6 6.6 0 2.2 2.6 4.4 2.6 6.6 0 2.2-2.6 4.4-2.6 6.8 0"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M2 9c2.2-2.6 4.4-2.6 6.6 0 2.2 2.6 4.4 2.6 6.6 0 2.2-2.6 4.4-2.6 6.8 0"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
    </span>
  );
}
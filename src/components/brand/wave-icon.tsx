import { cn } from "@/lib/utils";

export function WaveIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={cn("size-6", className)}
    >
      <path
        d="M2 13c2.2-2.6 4.4-2.6 6.6 0 2.2 2.6 4.4 2.6 6.6 0 2.2-2.6 4.4-2.6 6.8 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
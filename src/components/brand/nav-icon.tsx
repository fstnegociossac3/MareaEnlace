import type { ReactNode } from "react";

import type { NavIconName } from "@/config/navigation";
import { cn } from "@/lib/utils";

const iconPaths: Record<NavIconName, ReactNode> = {
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M6 9.5V20h12V9.5" />
    </>
  ),
  tag: (
    <>
      <path d="M20.59 13.41 12 22 2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <path d="M7 7h.01" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </>
  ),
  package: (
    <>
      <path d="m12 3 7.5 4.5v9L12 21l-7.5-4.5v-9Z" />
      <path d="M4.5 7.5 12 12l7.5-4.5M12 12v9" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M9 21v-4h6v4" />
      <path d="M9 7h.01M9 11h.01M15 7h.01M15 11h.01" />
    </>
  ),
  receipt: (
    <>
      <path d="M6 3h12v18l-3-2-3 2-3-2-3 2Z" />
      <path d="M9 8h6M9 12h6" />
    </>
  ),
  card: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20M6 15h4" />
    </>
  ),
  truck: (
    <>
      <path d="M2 6h12v11H2Z" />
      <path d="M14 9h4l3 3v5h-7" />
      <circle cx="6" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </>
  ),
  chart: (
    <>
      <path d="M4 4v16h16" />
      <path d="M8 15v-4M12 15V8M16 15v-6" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2.7 4.3-4.3 2.7 2.7-4.3Z" />
    </>
  ),
  rotate: (
    <>
      <path d="M21 12a9 9 0 1 1-2.6-6.3" />
      <path d="M21 3v6h-6" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  clipboard: (
    <>
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2.5a1.5 1.5 0 0 1 1.5 1.5v14a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19.5v-14A1.5 1.5 0 0 1 5.5 4H8" />
      <path d="M9 12h6M9 16h6" />
    </>
  ),
  "box-check": (
    <>
      <path d="m12 3 7.5 4.5v9L12 21l-7.5-4.5v-9Z" />
      <path d="M4.5 7.5 12 12l7.5-4.5M12 12v9" />
      <path d="m9 11 2 2 4-4" />
    </>
  ),
  wallet: (
    <>
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </>
  ),
};

export interface NavIconProps {
  name: NavIconName;
  className?: string;
}

export function NavIcon({ name, className }: NavIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-4", className)}
    >
      {iconPaths[name]}
    </svg>
  );
}
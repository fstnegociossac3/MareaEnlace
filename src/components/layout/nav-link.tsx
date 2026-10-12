import Link from "next/link";

import { NavIcon } from "@/components/brand/nav-icon";
import type { NavigationItem } from "@/config/navigation";
import { cn } from "@/lib/utils";

export interface NavLinkProps {
  item: NavigationItem;
  active: boolean;
  onNavigate?: () => void;
}

export function NavLink({ item, active, onNavigate }: NavLinkProps) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative flex min-h-11 items-center gap-3 rounded-xl px-3.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
        active
          ? "bg-accent/10 font-medium text-accent-strong"
          : "text-muted-foreground hover:bg-surface-muted hover:text-foreground",
      )}
    >
      {active ? (
        <span
          aria-hidden
          className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-accent"
        />
      ) : null}
      <NavIcon name={item.icon} className="size-[18px] shrink-0" />
      <span className="truncate text-sm">{item.label}</span>
    </Link>
  );
}
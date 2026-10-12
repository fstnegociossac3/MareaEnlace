import { BrandMark } from "@/components/brand/brand-mark";
import { WaveIcon } from "@/components/brand/wave-icon";
import type { NavigationGroup } from "@/config/navigation";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

import { NavLink } from "./nav-link";

export interface SidebarProps {
  navigation: readonly NavigationGroup[];
  activeHref: string | undefined;
  contextLabel: string;
}

export function Sidebar({ navigation, activeHref, contextLabel }: SidebarProps) {
  return (
    <aside className="flex h-full w-72 flex-col border-r border-border bg-surface">
      <div className="relative overflow-hidden border-b border-border bg-ocean-950 px-5 pb-5 pt-6 text-white">
        <WaveIcon className="pointer-events-none absolute -right-6 -top-6 size-28 text-white/10" />
        <div className="relative flex items-center gap-3">
          <BrandMark className="bg-white/10 text-white ring-1 ring-white/20" />
          <div className="min-w-0">
            <p className="truncate font-display text-sm font-semibold tracking-tight">
              {site.name}
            </p>
            <p className="truncate text-xs text-white/70">{contextLabel}</p>
          </div>
        </div>
        <span className="relative mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-medium text-white/85">
          <span aria-hidden className="size-1.5 rounded-full bg-current" />
          Vista de desarrollo
        </span>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label={contextLabel}>
        {navigation.map((group) => (
          <div
            key={group.label ?? "__principal__"}
            className={cn("mb-6 last:mb-0")}
          >
            {group.label ? (
              <p className="label px-3.5 pb-2">{group.label}</p>
            ) : null}
            <ul className="flex flex-col gap-1">
              {group.items.map((item) => (
                <li key={item.href}>
                  <NavLink item={item} active={item.href === activeHref} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-border px-5 py-3.5">
        <p className="text-xs text-muted-foreground">
          Prototipo en desarrollo · MareaEnlace
        </p>
      </div>
    </aside>
  );
}
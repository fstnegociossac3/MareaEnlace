"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

import type { NavigationGroup, NavigationItem } from "@/config/navigation";

import { MobileNavigation } from "./mobile-navigation";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";

function findActiveItem(
  navigation: readonly NavigationGroup[],
  pathname: string,
): NavigationItem | undefined {
  for (const group of navigation) {
    for (const item of group.items) {
      if (item.href === pathname) return item;
    }
  }
  return undefined;
}

export interface AppShellProps {
  navigation: readonly NavigationGroup[];
  contextLabel: string;
  children: ReactNode;
}

export function AppShell({ navigation, contextLabel, children }: AppShellProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement | null>(null);

  const activeItem = useMemo(
    () => findActiveItem(navigation, pathname),
    [navigation, pathname],
  );

  const activeLabel = activeItem?.label ?? "Inicio";

  const handleMenuToggle = useCallback(() => {
    setMenuOpen((open) => !open);
  }, []);

  const handleMenuChange = useCallback((open: boolean) => {
    setMenuOpen(open);
    if (!open) {
      requestAnimationFrame(() => menuTriggerRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };
    desktopQuery.addEventListener("change", onChange);
    return () => desktopQuery.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="flex min-h-dvh flex-col bg-background lg:flex-row">
      <div className="hidden lg:block lg:h-dvh lg:shrink-0 lg:sticky lg:top-0">
        <Sidebar
          navigation={navigation}
          activeHref={activeItem?.href}
          contextLabel={contextLabel}
        />
      </div>

      <MobileNavigation
        navigation={navigation}
        contextLabel={contextLabel}
        activeHref={activeItem?.href}
        open={menuOpen}
        onOpenChange={handleMenuChange}
      />

      <div
        className="flex min-w-0 flex-1 flex-col"
        inert={menuOpen ? true : undefined}
      >
        <Topbar
          contextLabel={contextLabel}
          activeLabel={activeLabel}
          menuOpen={menuOpen}
          onMenuToggle={handleMenuToggle}
          menuTriggerRef={menuTriggerRef}
        />
        <main id="main-content" className="flex-1">{children}</main>
      </div>
    </div>
  );
}
"use client";

import { useEffect, useRef } from "react";

import { BrandMark } from "@/components/brand/brand-mark";
import { WaveIcon } from "@/components/brand/wave-icon";
import type { NavigationGroup } from "@/config/navigation";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

import { NavLink } from "./nav-link";

export interface MobileNavigationProps {
  navigation: readonly NavigationGroup[];
  contextLabel: string;
  activeHref: string | undefined;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileNavigation({
  navigation,
  contextLabel,
  activeHref,
  open,
  onOpenChange,
}: MobileNavigationProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onOpenChange(false);
        return;
      }
      if (event.key === "Tab") {
        const container = panelRef.current;
        if (!container) return;
        const focusables = Array.from(
          container.querySelectorAll<HTMLElement>(
            "a[href], button:not([disabled])",
          ),
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const focusFrame = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      cancelAnimationFrame(focusFrame);
    };
  }, [open, onOpenChange]);

  return (
    <div
      id="mobile-navigation"
      className={cn(
        "fixed inset-0 z-50 lg:hidden",
        !open && "pointer-events-none",
      )}
      role="dialog"
      aria-modal="true"
      aria-label={`Menú de ${contextLabel}`}
      aria-hidden={!open}
      inert={open ? undefined : true}
    >
      <div
        aria-hidden
        onClick={() => onOpenChange(false)}
        className={cn(
          "absolute inset-0 bg-ocean-950/45 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      <div
        ref={panelRef}
        className={cn(
          "absolute inset-y-0 left-0 flex w-[min(20rem,85vw)] flex-col bg-surface shadow-lift transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="relative overflow-hidden border-b border-border bg-ocean-950 px-5 pb-5 pt-5 text-white">
          <WaveIcon className="pointer-events-none absolute -right-6 -top-6 size-28 text-white/10" />
          <div className="relative flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <BrandMark className="bg-white/10 text-white ring-1 ring-white/20" />
              <div className="min-w-0">
                <p className="truncate font-display text-sm font-semibold tracking-tight">
                  {site.name}
                </p>
                <p className="truncate text-xs text-white/70">{contextLabel}</p>
              </div>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => onOpenChange(false)}
              aria-label="Cerrar menú de navegación"
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-950"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
                className="size-5"
              >
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <nav
          className="flex-1 overflow-y-auto px-3 py-5"
          aria-label={`Navegación de ${contextLabel}`}
        >
          {navigation.map((group) => (
            <div
              key={group.label ?? "__principal__"}
              className="mb-6 last:mb-0"
            >
              {group.label ? (
                <p className="label px-3.5 pb-2">{group.label}</p>
              ) : null}
              <ul className="flex flex-col gap-1">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      item={item}
                      active={item.href === activeHref}
                      onNavigate={() => onOpenChange(false)}
                    />
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
      </div>
    </div>
  );
}
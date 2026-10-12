import type { RefObject } from "react";

export interface TopbarProps {
  contextLabel: string;
  activeLabel: string;
  menuOpen: boolean;
  onMenuToggle: () => void;
  menuTriggerRef: RefObject<HTMLButtonElement | null>;
}

export function Topbar({
  contextLabel,
  activeLabel,
  menuOpen,
  onMenuToggle,
  menuTriggerRef,
}: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
      <div className="flex h-14 items-center gap-3 px-4 sm:px-6 lg:h-16 lg:px-8">
        <button
          ref={menuTriggerRef}
          type="button"
          onClick={onMenuToggle}
          aria-label="Abrir menú de navegación"
          aria-haspopup="dialog"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition-colors hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
            className="size-5"
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="min-w-0">
          <p className="truncate text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {contextLabel}
          </p>
          <p className="truncate font-display text-base font-semibold tracking-tight">
            {activeLabel}
          </p>
        </div>
      </div>
    </header>
  );
}
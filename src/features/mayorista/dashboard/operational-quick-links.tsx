import Link from "next/link";

import { NavIcon } from "@/components/brand/nav-icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { mayoristaNavigation } from "@/config/navigation";

const quickLabels = new Set<string>([
  "Ofertas",
  "Reservas",
  "Compras y lotes",
  "Asignaciones",
  "Pedidos",
  "Pagos y devoluciones",
  "Despachos",
]);

const quickLinks = mayoristaNavigation
  .flatMap((group) => group.items)
  .filter((item) => quickLabels.has(item.label));

export function OperationalQuickLinks() {
  return (
    <section className="motion-safe:animate-fade-up" style={{ animationDelay: "180ms" }}>
      <SectionHeading
        eyebrow="Módulos"
        title="Accesos rápidos"
        description="Enlaces a las vistas de cada módulo del centro de operaciones."
      />
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickLinks.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-5 shadow-soft transition-all duration-200 hover:border-primary/30 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent-strong">
                <NavIcon name={item.icon} className="size-5" />
              </span>
              <span className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-foreground">
                  {item.label}
                </span>
                <span
                  aria-hidden
                  className="text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
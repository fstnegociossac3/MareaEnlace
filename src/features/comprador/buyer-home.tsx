import Link from "next/link";

import { NavIcon } from "@/components/brand/nav-icon";
import { ButtonLink } from "@/components/ui/button-link";
import { Callout } from "@/components/ui/callout";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { compradorNavigation, type NavigationItem } from "@/config/navigation";
import { cn } from "@/lib/utils";

import { BuyerHero } from "./buyer-hero";
import { BuyerJourney } from "./buyer-journey";

const offerScopeFields = [
  "Especie pesquera",
  "Puerto o punto de desembarque",
  "Fecha prevista",
  "Toneladas estimadas",
  "Precio referencial, cuando corresponda",
  "Anticipo requerido por tonelada",
] as const;

const operationLinkLabels = ["Mis reservas", "Mis pedidos", "Mis devoluciones"];

const operationLinks: readonly NavigationItem[] = compradorNavigation
  .flatMap((group) => group.items)
  .filter((item) => operationLinkLabels.includes(item.label));

function OfferScope() {
  return (
    <section className="motion-safe:animate-fade-up" style={{ animationDelay: "120ms" }}>
      <SectionHeading
        eyebrow="Ofertas previstas"
        title="Qué incluye cada oferta de pescado"
        description="Los mayoristas publican la pesca esperada de un desembarque. Antes de reservar, la planta revisa estas condiciones."
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <Card className="flex flex-col gap-4">
          <ul className="grid gap-2 sm:grid-cols-2">
            {offerScopeFields.map((field) => (
              <li
                key={field}
                className="flex items-center gap-2 rounded-lg border border-border bg-surface-muted/60 px-3 py-2 text-xs text-muted-foreground"
              >
                <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-accent/60" />
                {field}
              </li>
            ))}
          </ul>
          <Callout tone="info" title="Oferta prevista no es stock confirmado">
            La cantidad indicada es una estimación según la pesca esperada. El
            volumen real se confirma al desembarque.
          </Callout>
        </Card>
        <Card className="flex flex-col justify-between gap-5">
          <div className="flex flex-col gap-2">
            <h3 className="font-display text-lg font-semibold tracking-tight">
              Explora la oferta disponible
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Revisa las publicaciones por especie, puerto y fecha, y reserva
              el volumen que necesita tu planta antes del desembarque.
            </p>
          </div>
          <div>
            <ButtonLink
              href="/preview/comprador/explorar-ofertas"
              variant="secondary"
            >
              Explorar ofertas
            </ButtonLink>
          </div>
        </Card>
      </div>
    </section>
  );
}

function OperationLinks() {
  return (
    <section className="motion-safe:animate-fade-up" style={{ animationDelay: "150ms" }}>
      <SectionHeading
        eyebrow="Operaciones"
        title="Consulta tus operaciones"
        description="Accesos a las vistas de reservas, pedidos y devoluciones."
      />
      <ul className="mt-8 grid gap-4 sm:grid-cols-3">
        {operationLinks.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "group flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-5 shadow-soft transition-all duration-200",
                "hover:border-primary/30 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              )}
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

export function BuyerHome() {
  return (
    <div className="flex flex-col gap-16">
      <BuyerHero />
      <OfferScope />
      <BuyerJourney />
      <OperationLinks />
    </div>
  );
}
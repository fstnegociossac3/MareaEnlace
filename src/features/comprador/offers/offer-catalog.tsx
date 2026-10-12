import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";

const catalogFilters = [
  "Búsqueda por especie",
  "Filtros por puerto o punto de desembarque",
  "Filtros por fecha prevista",
  "Estado de publicación",
] as const;

export function OfferCatalog() {
  return (
    <div className="flex flex-col gap-8">
      <Card className="flex flex-col gap-4 p-6 sm:p-8">
        <div className="flex flex-col gap-2">
          <Badge className="w-fit">Catálogo de ofertas previstas</Badge>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Cuando los mayoristas conecten su oferta, este catálogo permitirá
            explorar pescado fresco por especie, puerto, fecha y estado de
            publicación.
          </p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {catalogFilters.map((filter) => (
            <li
              key={filter}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-muted/60 px-3 py-1 text-xs text-muted-foreground"
            >
              <span aria-hidden className="size-1.5 rounded-full bg-info/60" />
              {filter}
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground">
          Los controles de búsqueda y filtrado se habilitarán junto con los
          datos del catálogo. No hay funcionalidad de filtrado activa todavía.
        </p>
      </Card>

      <EmptyState
        title="Todavía no hay ofertas publicadas"
        description="Las ofertas previstas de los mayoristas aparecerán aquí en cuanto se conecte la oferta comercial. Esta sección se encuentra en preparación."
        action={
          <Badge variant="info" dot>
            Catálogo en preparación
          </Badge>
        }
      />

      <Card className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-1">
          <p className="font-display text-lg font-semibold tracking-tight">
            Estructura del detalle de una oferta
          </p>
          <p className="text-sm text-muted-foreground">
            Revisa la plantilla visual que mostrará cada oferta al abrirla:
            especie, vendedor, condiciones y reglas de asignación.
          </p>
        </div>
        <ButtonLink href="/preview/comprador/plantilla-oferta">
          Ver plantilla
        </ButtonLink>
      </Card>
    </div>
  );
}
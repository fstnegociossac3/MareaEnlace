import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";

const attentionTypes = [
  "Reservas pagadas pendientes de asignación",
  "Propuestas que requieren seguimiento",
  "Pedidos pendientes de despacho",
  "Devoluciones pendientes o con incidencia",
] as const;

export function AttentionPanel() {
  return (
    <Card className="flex h-full flex-col gap-5">
      <CardHeader>
        <CardTitle>Pendientes de atención</CardTitle>
        <CardDescription>
          Acciones operativas que requerirán tu intervención.
        </CardDescription>
      </CardHeader>
      <EmptyState
        title="Sin pendientes por atender"
        description="Cuando se conecten los módulos, aquí aparecerán las acciones que necesiten seguimiento."
      />
      <div className="mt-auto">
        <p className="label mb-2">Se mostrará aquí</p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {attentionTypes.map((type) => (
            <li
              key={type}
              className="flex items-center gap-2 rounded-lg border border-border bg-surface-muted/60 px-3 py-2 text-xs text-muted-foreground"
            >
              <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-info/60" />
              {type}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
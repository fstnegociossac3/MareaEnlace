import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { FieldGrid, StatusChips, type StatusChip } from "../shared/buyer-shared";
import { ReservationTimeline } from "./reservation-timeline";

const reservationFields = [
  "Código de reserva",
  "Especie",
  "Toneladas solicitadas",
  "Anticipo pagado y estado verificado",
  "Oferta relacionada",
  "Cantidad finalmente propuesta",
  "Precio final propuesto",
  "Estado de aceptación",
  "Historial de la operación",
] as const;

const reservationStates: readonly StatusChip[] = [
  { label: "Reserva solicitada", tone: "muted" },
  { label: "Pago confirmado", tone: "info" },
  { label: "Venta aceptada", tone: "success" },
];

const timelineSteps = [
  {
    title: "Reserva solicitada",
    description: "La planta aparta toneladas sobre una oferta prevista.",
    status: "pendiente" as const,
  },
  {
    title: "Anticipo confirmado",
    description: "El pago del anticipo queda verificado.",
    status: "pendiente" as const,
  },
  {
    title: "Venta aceptada",
    description: "Condiciones finales aceptadas por ambas partes.",
    status: "pendiente" as const,
  },
];

export function BuyerReservations() {
  return (
    <div className="flex flex-col gap-8">
      <Card className="flex flex-col gap-5">
        <CardHeader>
          <CardDescription>
            Cada reserva mostrará su estado y el historial de la operación.
          </CardDescription>
        </CardHeader>
        <EmptyState
          title="Sin reservas todavía"
          description="Cuando solicites toneladas sobre una oferta, aparecerán aquí con su anticipo, cantidad propuesta y estado de aceptación."
        />
        <div>
          <p className="label mb-2">Se mostrará por cada reserva</p>
          <FieldGrid items={reservationFields} />
        </div>
      </Card>

      <Card className="flex flex-col gap-5">
        <CardHeader>
          <CardTitle>Secuencia de una reserva</CardTitle>
          <CardDescription>
            Estados diferenciados de una operación. Estructura informativa; no
            hay reservas registradas.
          </CardDescription>
        </CardHeader>
        <div className="border-t border-border pt-4">
          <ReservationTimeline steps={timelineSteps} />
        </div>
        <div>
          <p className="label mb-2">Estados posibles</p>
          <StatusChips items={reservationStates} />
        </div>
      </Card>
    </div>
  );
}
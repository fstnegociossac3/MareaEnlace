import { Callout } from "@/components/ui/callout";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { FieldGrid, StatusChips, type StatusChip } from "../shared/buyer-shared";

const refundFields = [
  "Importe a devolver",
  "Reserva y pago relacionados",
  "Motivo",
  "Referencia del procesador",
  "Fecha de solicitud",
  "Estado de la devolución",
] as const;

const refundStates: readonly StatusChip[] = [
  { label: "Pendiente de solicitar", tone: "muted" },
  { label: "Procesando", tone: "info" },
  { label: "Confirmada por el procesador", tone: "success" },
  { label: "Con incidencia", tone: "danger" },
];

export function BuyerRefunds() {
  return (
    <div className="flex flex-col gap-8">
      <Card className="flex flex-col gap-5">
        <CardHeader>
          <CardDescription>
            Seguimiento de reembolsos y devoluciones sobre tus operaciones.
          </CardDescription>
        </CardHeader>
        <EmptyState
          title="Sin devoluciones"
          description="Las devoluciones se generan cuando procede ajustar un anticipo o un pago. Aparecerán aquí cuando existan solicitudes."
        />
        <div>
          <p className="label mb-2">Se mostrará por cada devolución</p>
          <FieldGrid items={refundFields} />
        </div>
      </Card>

      <Card className="flex flex-col gap-4 p-6">
        <div>
          <p className="label mb-2">Estados de devolución</p>
          <StatusChips items={refundStates} />
        </div>
        <Callout tone="warning" title="Solicitud de devolución ≠ dinero recibido">
          Una devolución solicitada no implica dinero ya recibido por la
          planta. Solo se considera devuelta cuando la confirma el procesador.
        </Callout>
      </Card>
    </div>
  );
}
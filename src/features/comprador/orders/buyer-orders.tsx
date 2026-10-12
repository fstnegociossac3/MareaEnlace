import { Callout } from "@/components/ui/callout";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { FieldGrid, StatusChips, type StatusChip } from "../shared/buyer-shared";

const orderFields = [
  "Pedido comercialmente confirmado",
  "Especie y cantidad aceptada",
  "Precio final",
  "Anticipo aplicado",
  "Saldo pendiente",
  "Estado del despacho",
  "Cantidad recibida",
  "Recepción y observaciones",
] as const;

const orderStates: readonly StatusChip[] = [
  { label: "Pendiente de despacho", tone: "muted" },
  { label: "Despachado", tone: "info" },
  { label: "Entregado", tone: "warning" },
  { label: "Recibido", tone: "success" },
];

export function BuyerOrders() {
  return (
    <div className="flex flex-col gap-8">
      <Card className="flex flex-col gap-5">
        <CardHeader>
          <CardDescription>
            Consulta el estado de tus pedidos confirmados, desde el despacho
            hasta la recepción en planta.
          </CardDescription>
        </CardHeader>
        <EmptyState
          title="Sin pedidos confirmados"
          description="Los pedidos resultan de aceptar las condiciones finales de una reserva. Aparecerán aquí cuando existan operaciones confirmadas."
        />
        <div>
          <p className="label mb-2">Se mostrará por cada pedido</p>
          <FieldGrid items={orderFields} />
        </div>
      </Card>

      <Card className="flex flex-col gap-4 p-6">
        <div>
          <p className="label mb-2">Estados logísticos</p>
          <StatusChips items={orderStates} />
        </div>
        <Callout tone="warning" title="Despacho enviado no es recepción aceptada">
          Un pedido despachado se considera recibido solo cuando la planta
          confirma la recepción del pescado y sus observaciones.
        </Callout>
      </Card>
    </div>
  );
}
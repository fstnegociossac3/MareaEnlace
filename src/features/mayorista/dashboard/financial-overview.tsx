import { NavIcon } from "@/components/brand/nav-icon";
import { Callout } from "@/components/ui/callout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { NavIconName } from "@/config/navigation";

interface FinancialMetric {
  label: string;
  icon: NavIconName;
  note: string;
}

const anticipoMetrics: readonly FinancialMetric[] = [
  {
    label: "Anticipos recibidos",
    icon: "wallet",
    note: "Importes abonados por las plantas para asegurar su reserva.",
  },
  {
    label: "Anticipos aplicados a pedidos",
    icon: "card",
    note: "Anticipos imputados contra pedidos confirmados.",
  },
];

const devolucionMetrics: readonly FinancialMetric[] = [
  {
    label: "Importes pendientes de devolución",
    icon: "rotate",
    note: "Montos por devolver una vez confirmado el ajuste.",
  },
  {
    label: "Devoluciones confirmadas por el procesador",
    icon: "check",
    note: "Solo lo confirmado por el procesador es dinero ya devuelto.",
  },
];

function FinancialRow({ label, icon, note }: FinancialMetric) {
  return (
    <li className="flex items-center gap-4 py-3">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-financial/10 text-financial">
        <NavIcon name={icon} className="size-5" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-4">
          <p className="text-sm font-medium text-foreground">{label}</p>
          <p className="numeric text-sm font-semibold text-muted-foreground">
            — <span className="font-normal text-muted-foreground">PEN</span>
          </p>
        </div>
        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
          {note}
        </p>
      </div>
    </li>
  );
}

export function FinancialOverview() {
  return (
    <Card className="flex h-full flex-col gap-5">
      <CardHeader>
        <div className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-financial/10 text-financial">
            <NavIcon name="wallet" className="size-5" />
          </span>
          <div className="min-w-0">
            <CardTitle>Anticipos y devoluciones</CardTitle>
            <CardDescription>
              Finanzas de la operación, gestionadas por separado de las ventas.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 gap-6">
        <div>
          <p className="label mb-1">Anticipos</p>
          <ul className="divide-y divide-border">
            {anticipoMetrics.map((metric) => (
              <FinancialRow key={metric.label} {...metric} />
            ))}
          </ul>
        </div>
        <div>
          <p className="label mb-1">Devoluciones</p>
          <ul className="divide-y divide-border">
            {devolucionMetrics.map((metric) => (
              <FinancialRow key={metric.label} {...metric} />
            ))}
          </ul>
        </div>
      </CardContent>
      <div className="flex flex-col gap-3">
        <Callout tone="info" title="Anticipo no es una venta">
          Los anticipos no se registran como ventas: se aplican contra pedidos
          y sus devoluciones se gestionan por separado.
        </Callout>
        <Callout tone="warning" title="Devolución solicitada ≠ dinero devuelto">
          Una devolución solicitada no implica dinero ya devuelto. Solo cuentan
          las confirmadas por el procesador.
        </Callout>
      </div>
    </Card>
  );
}
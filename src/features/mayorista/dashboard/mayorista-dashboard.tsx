import { AttentionPanel } from "./attention-panel";
import { CommercialFlow } from "./commercial-flow";
import { FinancialOverview } from "./financial-overview";
import { OperationsHeader } from "./operations-header";
import { OperationsOverview } from "./operations-overview";
import { OperationalQuickLinks } from "./operational-quick-links";
import { SupplyOverview } from "./supply-overview";

export function MayoristaDashboard() {
  return (
    <div className="flex flex-col gap-16">
      <OperationsHeader />
      <OperationsOverview />
      <CommercialFlow />
      <SupplyOverview />
      <div className="grid gap-6 lg:grid-cols-2">
        <AttentionPanel />
        <FinancialOverview />
      </div>
      <OperationalQuickLinks />
    </div>
  );
}
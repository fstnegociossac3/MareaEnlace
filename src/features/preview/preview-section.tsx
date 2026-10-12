import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/ui/empty-state";

export function PreviewSection() {
  return (
    <div className="mt-8">
      <EmptyState
        title="Módulo en desarrollo"
        description="Esta sección se habilitará cuando MareaEnlace conecte los módulos operativos. La vista previa solo valida el layout y la navegación del portal."
        action={<Badge variant="info" dot>Sin datos comerciales</Badge>}
      />
    </div>
  );
}
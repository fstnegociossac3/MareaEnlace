import { Badge } from "@/components/ui/badge";

const headerStatusChips = [
  "Sin autenticación",
  "Sin datos comerciales",
  "Módulos en preparación",
] as const;

export function OperationsHeader() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-ocean-950 text-white motion-safe:animate-fade-up">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_120%_at_15%_0%,rgba(18,168,157,0.32),transparent_60%),radial-gradient(50%_80%_at_95%_10%,rgba(47,140,160,0.25),transparent_65%)]"
      />
      <div className="relative px-6 py-10 sm:px-10 sm:py-12">
        <Badge className="border-white/20 bg-white/10 text-white/85">
          Vista de desarrollo · Panel del mayorista
        </Badge>
        <h1 className="mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          Centro de operaciones
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-white/75">
          Panel del mayorista pesquero para coordinar la oferta, las reservas
          con anticipo, la compra al desembarque, las asignaciones y los
          despachos hacia las plantas compradoras.
        </p>
        <ul
          aria-label="Estado de la vista previa"
          className="mt-8 flex flex-wrap gap-2"
        >
          {headerStatusChips.map((chip) => (
            <li
              key={chip}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
            >
              <span aria-hidden className="size-1.5 rounded-full bg-current" />
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
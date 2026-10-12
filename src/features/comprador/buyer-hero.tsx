import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";

const heroStatusChips = [
  "Sin autenticación",
  "Sin ofertas conectadas",
  "Módulos en preparación",
] as const;

export function BuyerHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-ocean-950 text-white motion-safe:animate-fade-up">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_120%_at_15%_0%,rgba(18,168,157,0.32),transparent_60%),radial-gradient(50%_80%_at_95%_10%,rgba(47,140,160,0.25),transparent_65%)]"
      />
      <div className="relative px-6 py-10 sm:px-10 sm:py-14">
        <Badge className="border-white/20 bg-white/10 text-white/85">
          Portal de la planta compradora · Vista de desarrollo
        </Badge>
        <h1 className="mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          Abastecimiento pesquero para tu planta
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-white/75">
          Encuentra ofertas previstas de pescado fresco, entiende las
          condiciones de reserva y da seguimiento a tus operaciones desde un
          solo lugar. Un mercado digital especializado en abastecimiento
          industrial.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink
            href="/preview/comprador/explorar-ofertas"
            variant="secondary"
          >
            Explorar ofertas
          </ButtonLink>
          <ButtonLink
            href="#proceso-de-compra"
            variant="outline"
            className="border-white/25 bg-white/5 text-white hover:border-white/50 hover:text-white"
          >
            Ver proceso de compra
          </ButtonLink>
        </div>
        <ul
          aria-label="Estado de la vista previa"
          className="mt-8 flex flex-wrap gap-2"
        >
          {heroStatusChips.map((chip) => (
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
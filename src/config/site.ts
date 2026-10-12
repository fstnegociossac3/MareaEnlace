export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  keywords: readonly string[];
  navigation: readonly SiteNavItem[];
}

export interface SiteNavItem {
  label: string;
  href: string;
}

export const site: SiteConfig = {
  name: "MareaEnlace",
  shortName: "MareaEnlace",
  tagline: "Reserva y preventa de pescado fresco",
  description:
    "MareaEnlace conecta mayoristas pesqueros y plantas compradoras para reservar y preventar pescado fresco con volumen, origen y cadena de frío coordinados.",
  keywords: [
    "pescado fresco",
    "reserva de pescado",
    "preventa de pescado",
    "mayoristas pesqueros",
    "plantas compradoras",
    "cadena de frío",
    "pesca sostenible",
  ],
  navigation: [
    { label: "Plataforma", href: "#plataforma" },
    { label: "Cómo funciona", href: "#como-funciona" },
  ],
} as const;

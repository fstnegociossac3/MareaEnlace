export interface LandingLink {
  label: string;
  href: string;
}

export interface LandingCard {
  title: string;
  description: string;
}

export interface LandingStep extends LandingCard {
  order: number;
}

export interface LandingAudience extends LandingCard {
  role: string;
}

export interface LandingCopy {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryAction: LandingLink;
  secondaryAction: LandingLink;
}

export const landingCopy: LandingCopy = {
  eyebrow: "Plataforma B2B de pescado fresco",
  title: "Reserva y preventa de pescado fresco",
  subtitle:
    "MareaEnlace conecta a mayoristas pesqueros con plantas compradoras para asegurar volumen, origen y cadena de frío antes de que la pesca llegue a puerto.",
  primaryAction: { label: "Conocer la plataforma", href: "#plataforma" },
  secondaryAction: { label: "Ver cómo funciona", href: "#como-funciona" },
};

export const landingCapabilities: readonly LandingCard[] = [
  {
    title: "Reserva anticipada",
    description:
      "Asegura calibres y volúmenes antes del desembarque, con disponibilidad visible para cada planta.",
  },
  {
    title: "Oferta mayorista",
    description:
      "Publica especies, calibres y ventanas de entrega desde un mismo panel de trabajo.",
  },
  {
    title: "Origen y cadena de frío",
    description:
      "Cada lote conserva su origen, temperatura y tiempos de manejo a lo largo del recorrido.",
  },
  {
    title: "Coordinación compartida",
    description:
      "Estados claros de reserva, preparación y entrega para ambas partes de la operación.",
  },
];

export const landingSteps: readonly LandingStep[] = [
  {
    order: 1,
    title: "Publica o explora",
    description:
      "El mayorista carga su oferta del día y la planta compradora revisa especies, calibres y ventanas de entrega.",
  },
  {
    order: 2,
    title: "Reserva tu volumen",
    description:
      "La planta aparta cantidades y confirma condiciones antes de que el lote llegue a puerto.",
  },
  {
    order: 3,
    title: "Coordina la entrega",
    description:
      "Ambas partes siguen el estado del pedido, desde la preparación hasta la recepción en planta.",
  },
];

export const landingAudiences: readonly LandingAudience[] = [
  {
    role: "Mayoristas pesqueros",
    title: "Vende con anticipación",
    description:
      "Da visibilidad a tu oferta, reduce el pescado sin colocar y planifica tus desembarques con demanda confirmada.",
  },
  {
    role: "Plantas compradoras",
    title: "Abastece con certeza",
    description:
      "Encuentra calibres disponibles, reserva el volumen que necesitas y da seguimiento a cada lote hasta tu línea de proceso.",
  },
];

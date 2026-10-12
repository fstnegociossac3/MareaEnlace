export type NavIconName =
  | "home"
  | "tag"
  | "calendar"
  | "package"
  | "users"
  | "building"
  | "receipt"
  | "card"
  | "truck"
  | "chart"
  | "compass"
  | "rotate"
  | "check"
  | "clipboard"
  | "box-check"
  | "wallet";

export interface NavigationItem {
  label: string;
  href: string;
  icon: NavIconName;
  description?: string;
}

export interface NavigationGroup {
  label: string | null;
  items: readonly NavigationItem[];
}

export const previewMayoristaBase = "/preview/mayorista";
export const previewCompradorBase = "/preview/comprador";

export const mayoristaNavigation: readonly NavigationGroup[] = [
  {
    label: "Operaciones",
    items: [
      {
        label: "Inicio",
        href: previewMayoristaBase,
        icon: "home",
        description: "Centro de operaciones pesqueras de MareaEnlace.",
      },
      {
        label: "Ofertas",
        href: `${previewMayoristaBase}/ofertas`,
        icon: "tag",
        description:
          "Publicación y gestión de la oferta del día: especies, calibres y ventanas de entrega.",
      },
      {
        label: "Reservas",
        href: `${previewMayoristaBase}/reservas`,
        icon: "calendar",
        description:
          "Volúmenes apartados por las plantas antes del desembarque.",
      },
      {
        label: "Compras y lotes",
        href: `${previewMayoristaBase}/compras-y-lotes`,
        icon: "package",
        description:
          "Lotes adquiridos con su trazabilidad por origen y cadena de frío.",
      },
      {
        label: "Asignaciones",
        href: `${previewMayoristaBase}/asignaciones`,
        icon: "users",
        description:
          "Distribución de la captura entre compradores y destinos.",
      },
    ],
  },
  {
    label: "Comercial",
    items: [
      {
        label: "Plantas compradoras",
        href: `${previewMayoristaBase}/plantas`,
        icon: "building",
        description:
          "Directorio de plantas, personas de contacto y condiciones comerciales.",
      },
      {
        label: "Pedidos",
        href: `${previewMayoristaBase}/pedidos`,
        icon: "receipt",
        description: "Pedidos confirmados por las plantas compradoras.",
      },
      {
        label: "Pagos y devoluciones",
        href: `${previewMayoristaBase}/pagos-y-devoluciones`,
        icon: "card",
        description: "Anticipos, cobros y devoluciones de la operación.",
      },
      {
        label: "Despachos",
        href: `${previewMayoristaBase}/despachos`,
        icon: "truck",
        description: "Salidas de mercadería hacia las plantas compradoras.",
      },
    ],
  },
  {
    label: "Análisis",
    items: [
      {
        label: "Reportes",
        href: `${previewMayoristaBase}/reportes`,
        icon: "chart",
        description:
          "Indicadores y reportes consolidados de la operación pesquera.",
      },
    ],
  },
];

export const compradorNavigation: readonly NavigationGroup[] = [
  {
    label: null,
    items: [
      {
        label: "Inicio",
        href: previewCompradorBase,
        icon: "home",
        description: "Resumen de tu actividad como planta compradora.",
      },
      {
        label: "Explorar ofertas",
        href: `${previewCompradorBase}/explorar-ofertas`,
        icon: "compass",
        description:
          "Ofertas de pescado fresco disponibles por especie, calibre y volumen.",
      },
      {
        label: "Mis reservas",
        href: `${previewCompradorBase}/mis-reservas`,
        icon: "calendar",
        description:
          "Volúmenes apartados y su estado de preparación.",
      },
      {
        label: "Mis pedidos",
        href: `${previewCompradorBase}/mis-pedidos`,
        icon: "receipt",
        description: "Pedidos confirmados y su seguimiento.",
      },
      {
        label: "Mis devoluciones",
        href: `${previewCompradorBase}/mis-devoluciones`,
        icon: "rotate",
        description: "Devoluciones gestionadas sobre tus compras.",
      },
    ],
  },
];
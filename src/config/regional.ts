import type { CurrencyCode, Locale, TimeZone } from "@/types";

export interface RegionalConfig {
  locale: Locale;
  timeZone: TimeZone;
  currency: CurrencyCode;
}

export const regional: RegionalConfig = {
  locale: "es-PE",
  timeZone: "America/Lima",
  currency: "PEN",
} as const;

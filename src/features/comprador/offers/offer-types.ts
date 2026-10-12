import type { FreshnessGrade } from "@/types";

export type OfferStatus = "prevista" | "publicada" | "cerrada";

/**
 * Modelo base de una oferta pesquera, preparado para conectarse con
 * Supabase y Drizzle en bloques futuros. No se renderizan registros reales
 * todavía: el catálogo usa estados vacíos hasta que existan datos.
 */
export interface SpeciesOffer {
  id: string;
  speciesName: string;
  sellerName: string;
  landingPort: string;
  expectedLandingDate: string;
  estimatedTonnes: number;
  qualityCondition: string;
  freshnessGrade?: FreshnessGrade;
  referencePricePerTon?: number;
  requiredAdvancePerTon?: number;
  validUntil: string;
  status: OfferStatus;
  allocationRules: readonly string[];
  acceptanceRules: readonly string[];
  refundRules: readonly string[];
}
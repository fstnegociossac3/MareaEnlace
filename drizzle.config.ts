import { loadEnvConfig } from "@next/env";
import { defineConfig } from "drizzle-kit";

// Drizzle Kit corre fuera del runtime de Next.js, así que carga .env.local aquí.
loadEnvConfig(process.cwd());

const migrationUrl = process.env.DATABASE_MIGRATION_URL;

if (!migrationUrl) {
  throw new Error(
    "DATABASE_MIGRATION_URL no está definida. Configúrala en .env.local (se usa únicamente para migraciones).",
  );
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema/index.ts",
  out: "./drizzle",
  dbCredentials: {
    url: migrationUrl,
  },
  strict: true,
  verbose: true,
});
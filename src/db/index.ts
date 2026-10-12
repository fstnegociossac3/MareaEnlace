import "server-only";

import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { getPoolConfig } from "./pool-options";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    "DATABASE_URL no está definida. Configúrala en .env.local (solo se lee en el servidor).",
  );
}

const globalForDatabase = globalThis as unknown as {
  mareaenlacePgPool?: Pool;
};

// Reutiliza el pool entre recargas (Hot Reload) y durante la vida de una
// instancia serverless, en lugar de abrir conexiones por petición.
if (!globalForDatabase.mareaenlacePgPool) {
  globalForDatabase.mareaenlacePgPool = new Pool(
    getPoolConfig(connectionString),
  );
}

export const pool: Pool = globalForDatabase.mareaenlacePgPool;

export const db = drizzle(pool, { schema });

export type Database = NodePgDatabase<typeof schema>;

export { schema };
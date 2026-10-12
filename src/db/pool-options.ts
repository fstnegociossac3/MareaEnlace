import type { PoolConfig } from "pg";

// Vercel serverless + Supabase Transaction Pooler: el pooler multiplexa las
// conexiones, así que cada instancia de función debe retener una sola (el
// cliente se comparte entre invocaciones de la instancia caliente).
// Ver: https://supabase.com/docs/guides/database/connecting-to-postgres
const MAX_CONNECTIONS = 1;
const IDLE_TIMEOUT_MS = 30_000;
const CONNECTION_TIMEOUT_MS = 10_000;

const SSL_MODE_PATTERN = /[?&]sslmode=/i;

/**
 * Opciones de conexión comunes para `pg.Pool`.
 *
 * Fuerza TLS cuando la URL no define `sslmode`, con la semántica de `require`
 * de Supabase (cifra el tráfico sin verificar el certificado del pooler),
 * evitando conexiones en texto plano. Si la URL ya declara `sslmode`, se
 * respeta la configuración del driver.
 */
export function getPoolConfig(connectionString: string): PoolConfig {
  const config: PoolConfig = {
    connectionString,
    max: MAX_CONNECTIONS,
    idleTimeoutMillis: IDLE_TIMEOUT_MS,
    connectionTimeoutMillis: CONNECTION_TIMEOUT_MS,
  };

  if (!SSL_MODE_PATTERN.test(connectionString)) {
    config.ssl = { rejectUnauthorized: false };
  }

  return config;
}
import { loadEnvConfig } from "@next/env";
import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { getPoolConfig } from "../src/db/pool-options";

loadEnvConfig(process.cwd());

let failed = false;

function report(state: "ok" | "fail", message: string, detail?: string): void {
  if (state === "fail") {
    failed = true;
  }
  console.log(`  ${state === "ok" ? "[OK]" : "[FAIL]"} ${message}`);
  if (detail) {
    console.log(`       ${detail}`);
  }
}

function sanitizeError(error: unknown): string {
  const raw = error instanceof Error ? error.message : String(error);
  const secrets = [
    process.env.DATABASE_URL,
    process.env.DATABASE_MIGRATION_URL,
  ].filter((value): value is string => Boolean(value));

  let sanitized = raw;
  for (const secret of secrets) {
    sanitized = sanitized.split(secret).join("[redactado]");
  }

  return sanitized.replace(
    /postgres(?:ql)?:\/\/[^\s"'@]+@/gi,
    "postgres://[redactado]@",
  );
}

async function checkConnection(
  url: string | undefined,
  label: string,
): Promise<void> {
  if (!url) {
    report("fail", `${label}: variable de conexión ausente`);
    return;
  }

  const singleConnection = new Pool(getPoolConfig(url));

  try {
    const result = await singleConnection.query<{ value: number }>(
      "SELECT 1 AS value",
    );
    if (result.rows[0]?.value === 1) {
      report("ok", `${label}: SELECT 1 correcto`);
    } else {
      report("fail", `${label}: respuesta inesperada en SELECT 1`);
    }
  } catch (error) {
    report("fail", `${label}: ${sanitizeError(error)}`);
  } finally {
    await singleConnection.end();
  }
}

async function checkDrizzleIntegration(url: string | undefined): Promise<void> {
  if (!url) {
    report("fail", "Integración Drizzle: DATABASE_URL ausente");
    return;
  }

  const singleConnection = new Pool(getPoolConfig(url));

  try {
    const queryClient = drizzle(singleConnection);
    const result = await queryClient.execute(sql`SELECT 1 AS value`);
    if (result.rows[0]?.value === 1) {
      report(
        "ok",
        "Integración Drizzle (driver node-postgres + pg.Pool) correcta",
      );
    } else {
      report("fail", "Integración Drizzle: respuesta inesperada");
    }
  } catch (error) {
    report("fail", `Integración Drizzle: ${sanitizeError(error)}`);
  } finally {
    await singleConnection.end();
  }
}

async function main(): Promise<void> {
  console.log("MareaEnlace — verificación de infraestructura de datos\n");

  const databaseUrl = process.env.DATABASE_URL;
  const migrationUrl = process.env.DATABASE_MIGRATION_URL;

  report(
    databaseUrl ? "ok" : "fail",
    "DATABASE_URL declarada en .env.local",
  );
  report(
    migrationUrl ? "ok" : "fail",
    "DATABASE_MIGRATION_URL declarada en .env.local",
  );

  await checkConnection(databaseUrl, "Conexión de aplicación (DATABASE_URL)");
  await checkConnection(
    migrationUrl,
    "Conexión de migraciones (DATABASE_MIGRATION_URL)",
  );
  await checkDrizzleIntegration(databaseUrl);

  if (failed) {
    console.error(
      "\nVerificación finalizada con errores. Revisa la conectividad, credenciales o SSL sin compartir secretos.",
    );
    process.exit(1);
  }

  console.log("\nVerificación completada correctamente.");
}

main().catch((error) => {
  console.error(`\n[FAIL] Error inesperado: ${sanitizeError(error)}`);
  process.exit(1);
});
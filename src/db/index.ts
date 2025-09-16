import type { APIContext } from "astro";
import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

export const db = (context: APIContext) => {
  const client = postgres(import.meta.env.DB_URL, {
    prepare: false,
  });

  return drizzle(client, { schema });
};

import type { APIContext } from "astro";
import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export const db = () => {
  const client = postgres(import.meta.env.DB_URL, {
    prepare: false,
  });

  return drizzle(client);
};

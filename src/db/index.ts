import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export const db = () => {
  const client = postgres(import.meta.env.DB_URL, {
    prepare: false,
  });

  return drizzle(client);
};

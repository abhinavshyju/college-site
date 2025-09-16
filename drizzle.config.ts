import { defineConfig } from "drizzle-kit";
const DATABASE_URL = process.env.DB_URL!;

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DB_URL!,
  },
});

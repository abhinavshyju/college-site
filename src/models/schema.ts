import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Post = pgTable("post", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
});

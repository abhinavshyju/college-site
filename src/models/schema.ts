import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Post = pgTable("post", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
});

export const User = pgTable("user", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 256 }).notNull(),
  username: varchar("username", { length: 256 }).notNull(),
  password: varchar("password", { length: 256 }).notNull(),
});

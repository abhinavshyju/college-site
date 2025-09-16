import {
  pgTable,
  text,
  timestamp,
  jsonb,
  varchar,
  integer,
} from "drizzle-orm/pg-core";

export const programsTable = pgTable("programs", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  level: varchar("level", { length: 50 }).notNull(), // "Undergraduate" | "Postgraduate"
  duration: text("duration").notNull(),
  seats: integer("seats").notNull(),
  affiliation: text("affiliation").notNull(),
  description: text("description"),
  eligibility: text("eligibility"),
  curriculum: jsonb("curriculum").$type<string[] | null>().default(null),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "date" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "date" })
    .defaultNow()
    .notNull(),
});

export const departmentsTable = pgTable("departments", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  hod: text("hod").notNull(),
  faculty: integer("faculty").notNull(),
  labs: integer("labs").notNull(),
  description: text("description"),
  specializations: jsonb("specializations")
    .$type<string[] | null>()
    .default(null),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "date" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "date" })
    .defaultNow()
    .notNull(),
});

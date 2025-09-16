import { pgTable, text, timestamp, jsonb, varchar } from "drizzle-orm/pg-core";

export const staffTable = pgTable("staff", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  position: text("position").notNull(),
  qualification: text("qualification"),
  experience: text("experience"),
  email: text("email"),
  phone: text("phone"),
  image: text("image"),
  category: varchar("category", { length: 32 }).notNull(), // principal | hod | faculty
  achievements: jsonb("achievements").$type<string[] | null>().default(null),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "date" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "date" })
    .defaultNow()
    .notNull(),
});

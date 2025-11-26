import { pgTable, text, timestamp, boolean } from "drizzle-orm/pg-core";

export const announcementsTable = pgTable("announcements", {
    id: text("id").primaryKey(),
    text: text("text").notNull(),
    highlight: text("highlight"),
    active: boolean("active").default(true).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "date" })
        .defaultNow()
        .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "date" })
        .defaultNow()
        .notNull(),
});

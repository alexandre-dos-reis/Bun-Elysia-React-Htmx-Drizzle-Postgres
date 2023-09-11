import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export enum Status {
  New = "new",
  Used = "used",
}

export const cars = pgTable("cars", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  licence: varchar("licence").notNull(),
  status: varchar("status").notNull().default(Status.Used),
});

export type Car = typeof cars.$inferSelect;
export type InsertCar = typeof cars.$inferInsert;

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const client = postgres({
  host: "localhost",
  port: 9876,
  user: "user",
  password: "pass",
  ssl: false,
  database: "db",
});
export const db = drizzle(client);

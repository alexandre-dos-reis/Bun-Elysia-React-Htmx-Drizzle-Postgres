import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    host: "localhost",
    port: 9876,
    user: "user",
    password: "pass",
    ssl: false,
    database: "db",
  },
  verbose: true,
  strict: true,
} satisfies Config;

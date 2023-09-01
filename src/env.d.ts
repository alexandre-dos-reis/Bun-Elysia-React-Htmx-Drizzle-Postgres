declare module "bun" {
  interface Env {
    APP_ENV: "dev" | "prod" | "build";
  }
}

import { Elysia } from "elysia";
import { jsxPlugin } from "./utils/jsxPlugin";
import { Layout } from "./components/Layout";
import { Title } from "./components/Title";
import { staticPlugin } from "@elysiajs/static";

const app = new Elysia()
  .use(jsxPlugin)
  .use(
    staticPlugin(
      process.env.APP_ENV === "dev"
        ? {
            assets: "assets",
            prefix: "/assets",
          }
        : {
            assets: "public",
            prefix: "/public",
          },
    ),
  )
  .get("/", () => (
    <Layout>
      <Title>Hello</Title>
    </Layout>
  ))
  .get("/contact", () => (
    <Layout>
      <Title>Contact</Title>
    </Layout>
  ))
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);

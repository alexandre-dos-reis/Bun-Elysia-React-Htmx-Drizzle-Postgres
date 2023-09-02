import { Elysia } from "elysia";
import { jsxPlugin } from "./utils/jsxPlugin";
import { Layout } from "./components/Layout";
import { Title } from "./components/Title";

const app = new Elysia()
  .use(jsxPlugin)
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

import { Elysia } from "elysia";
import { jsxPlugin } from "./utils/jsxPlugin";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <html>
    <head>
      <title>The Ultimate Stack !</title>
    </head>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
    <body>{children}</body>
  </html>
);

const app = new Elysia()
  .use(jsxPlugin)
  .get("/", () => (
    <Layout>
      <h1>Hello</h1>
    </Layout>
  ))
  .get("/contact", () => (
    <Layout>
      <h1>Contact</h1>
    </Layout>
  ))
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);

import { Elysia } from "elysia";
import { jsxPlugin } from "./utils/jsxPlugin";
import { ReactNode } from "react";
import { getViteAssets } from "./utils/viteConfig";

const Layout = ({ children }: { children: ReactNode }) => (
  <html>
    <head>
      {getViteAssets({ isDev: process.env.APP_ENV === "dev" })}
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
    <body>
      <div id="app"></div>
      {children}
    </body>
  </html>
);

const app = new Elysia()
  .use(jsxPlugin)
  .get("/", () => (
    <Layout>
      <h1 className="text-3xl font-bold underline">Hello</h1>
    </Layout>
  ))
  .get("/contact", () => (
    <Layout>
      <h1 className="text-3xl font-bold underline">Contact</h1>
    </Layout>
  ))
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);

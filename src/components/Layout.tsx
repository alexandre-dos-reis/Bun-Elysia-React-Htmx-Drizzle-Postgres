import { PropsWithChildren } from "@elysiajs/html";
import { getViteAssets } from "../utils/viteConfig";
import { cn } from "@/utils/cn";

export const Layout = ({ children }: PropsWithChildren) => (
  <html>
    <head>
      {getViteAssets({ isDev: process.env.APP_ENV === "dev" })}
      <title>The Ultimate Stack !</title>
    </head>
    <div id="app" />
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
      <main class={cn("flex justify-center items-center")}>{children}</main>
    </body>
  </html>
);

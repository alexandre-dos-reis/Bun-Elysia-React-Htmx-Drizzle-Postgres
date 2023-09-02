import { ReactNode } from "react";
import { getViteAssets } from "../utils/viteConfig";

export const Layout = ({ children }: { children: ReactNode }) => (
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

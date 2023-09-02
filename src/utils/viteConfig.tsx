import viteConfig, { entrypoint, base } from "../../vite.config";

interface Args {
  isDev: boolean;
}

export const getViteAssets = ({ isDev }: Args) => {
  return isDev ? (
    <>
      <script
        type="module"
        src={`http://localhost:${viteConfig.server?.port}/@vite/client`}
      />
      <script
        type="module"
        src={`http://localhost:${viteConfig.server?.port}${base}${entrypoint}`}
        defer
      />
    </>
  ) : (
    <>
      <link rel="stylesheet" href="/assets/main.css" />
      <script type="module" src="/assets/main.js" defer />
    </>
  );
};

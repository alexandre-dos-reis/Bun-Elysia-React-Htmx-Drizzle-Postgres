import { Elysia } from "elysia";

import { renderToString } from "react-dom/server";

// https://github.com/elysiajs/elysia/issues/97
export const jsxPlugin = new Elysia().onAfterHandle(({ set }, response) => {
  if (
    response &&
    typeof response === "object" &&
    "$$typeof" in response &&
    (response.$$typeof as Symbol) === Symbol.for("react.element")
  )
    return new Response(renderToString(response as any), {
      ...set,
      headers: {
        ...set.headers,
        "Content-Type": "text/html; charset=utf8",
      },
    });
});

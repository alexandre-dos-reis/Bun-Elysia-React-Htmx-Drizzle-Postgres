import { PropsWithChildren } from "@elysiajs/html";

export const FormError = (p: PropsWithChildren) =>
  p.children ? <div class="text-red-500">{p.children}</div> : null;

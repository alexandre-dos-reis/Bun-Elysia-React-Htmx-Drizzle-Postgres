import { cn } from "@/utils/cn";
import { PropsWithChildren } from "@elysiajs/html";

export const Th = (p: JSX.HtmlTableHeaderCellTag & PropsWithChildren) => (
  <th class={cn("border p-3")} {...p}>
    {p.children}
  </th>
);

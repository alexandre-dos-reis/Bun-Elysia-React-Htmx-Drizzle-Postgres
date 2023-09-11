import { cn } from "@/utils/cn";
import { PropsWithChildren } from "@elysiajs/html";

export const Td = (p: JSX.HtmlTableDataCellTag & PropsWithChildren) => (
  <td class={cn("border p-3")} {...p}>
    {p.children}
  </td>
);

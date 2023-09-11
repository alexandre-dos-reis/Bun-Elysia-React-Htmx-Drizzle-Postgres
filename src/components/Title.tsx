import { cn } from "@/utils/cn";
import { PropsWithChildren } from "@elysiajs/html";

export const Title = (p: PropsWithChildren) => (
  <h1 class={cn("text-3xl font-bold underline")}>{p.children}</h1>
);

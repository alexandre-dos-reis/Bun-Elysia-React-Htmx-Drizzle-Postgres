import { ReactNode } from "react";

export const Title = (p: { children: ReactNode }) => {
  return <h1 className="text-3xl font-bold underline">{p.children}</h1>;
};

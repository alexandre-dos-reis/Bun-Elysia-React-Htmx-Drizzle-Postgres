import { cn } from "@/utils/cn";

interface Props extends JSX.HtmlInputTag {
  error?: string | Array<string>;
}

export const Input = ({ error, ...p }: Props) => (
  <>
    <input
      type="text"
      class={cn("border leading-tight py-2 px-3 shadow text-gray-700")}
      {...p}
    />
    {error ? <div class="text-red-500">{error}</div> : null}
  </>
);

import { Car, Status } from "@/db";
import { Td } from "./Td";
import { cn } from "@/utils/cn";
import { Input } from "./Input";
import { FormError } from "./FormError";

interface Props {
  car: Car;
  errors?: Partial<Record<keyof Car, string | string[]>>;
  type: "edit" | "create";
}

export const ListItemCarForm = (p: Props) => (
  <tr>
    <Td>{p.car.id}</Td>
    <Td>
      <Input name="name" value={p.car.name} error={p.errors?.name} />
    </Td>
    <Td>
      <Input name="licence" value={p.car.licence} error={p.errors?.licence} />
    </Td>
    <Td>
      <select
        class="border leading-tight py-2 px-3 shadow text-gray-700"
        value={p.car.status}
        name="status"
      >
        {Object.values(Status).map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <FormError>{p.errors?.status}</FormError>
    </Td>
    <Td>
      <button
        hx-get={`/cars/${p.car.id}`}
        hx-target="closest tr"
        hx-swap="outerHTML"
        class={cn("bg-blue-500 hover:bg-blue-700 p-3 rounded text-white")}
      >
        Cancel
      </button>
      <button
        hx-post={`/cars/${p.car.id}`}
        hx-target="closest tr"
        hx-include="closest tr"
        hx-swap="outerHTML"
        class={cn("bg-red-500 hover:bg-red-700 p-3 rounded text-white")}
      >
        save
      </button>
    </Td>
  </tr>
);

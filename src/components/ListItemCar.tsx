import { Car } from "@/db";
import { Td } from "./Td";
import { cn } from "@/utils/cn";

interface Props {
  car: Car;
}

export const ListItemCar = (p: Props) => (
  <tr>
    <Td>{p.car.id}</Td>
    <Td>{p.car.name}</Td>
    <Td>{p.car.licence}</Td>
    <Td>{p.car.status}</Td>
    <Td>
      <button
        hx-post={`/cars/${p.car.id}/edit`}
        hx-target="closest tr"
        hx-swap="outerHTML"
        class={cn("bg-blue-500 hover:bg-blue-700 p-3 rounded text-white")}
      >
        Edit
      </button>
    </Td>
  </tr>
);

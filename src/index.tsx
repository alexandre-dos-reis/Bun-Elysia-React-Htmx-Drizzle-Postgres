import { Elysia } from "elysia";
import { Layout } from "./components/Layout";
import { staticPlugin } from "@elysiajs/static";
import { Car, Status, cars, db } from "./db";
import { Th } from "./components/Th";
import { ListItemCar } from "./components/ListItemCar";
import { eq } from "drizzle-orm";
import { ListItemCarForm } from "./components/ListItemCarForm";
import { z } from "zod";
import escape from "validator/es/lib/escape";
import html from "@elysiajs/html";

const app = new Elysia()
  .use(html())
  .use(staticPlugin({ assets: "assets", prefix: "/assets" }))
  .use(
    staticPlugin({
      assets: "public",
      prefix: "/public",
    }),
  )
  .get("/cars", async () => {
    const allCars = await db.select().from(cars).orderBy(cars.name);
    return (
      <Layout>
        <table className="table-auto border">
          <thead>
            <tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Licence</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </tr>
          </thead>
          <tbody hx-target="closest tr" hx-swap="outerHTML">
            {allCars.map((c) => (
              <ListItemCar car={c} />
            ))}
          </tbody>
        </table>
      </Layout>
    );
  })
  .get("/cars/:id", async ({ params }) => {
    const car = (
      await db
        .select()
        .from(cars)
        .where(eq(cars.id, parseInt(params.id)))
    )[0];
    return <ListItemCar car={car} />;
  })
  .post("/cars/:id/edit", async ({ params: { id } }) => {
    const car = (
      await db
        .select()
        .from(cars)
        .where(eq(cars.id, parseInt(id)))
    )[0];
    return <ListItemCarForm car={car} type="edit" />;
  })
  .post("/cars/:id", async ({ body, params: { id } }) => {
    const schema = z.object({
      name: z.string().min(3).transform(escape),
      licence: z.string().min(3).transform(escape),
      status: z.nativeEnum(Status),
    });

    const result = schema.safeParse(body);

    if (result.success) {
      const updateCar = (
        await db
          .update(cars)
          .set(result.data)
          .where(eq(cars.id, parseInt(id)))
          .returning()
      )[0];
      return <ListItemCar car={updateCar} />;
    }

    return (
      <ListItemCarForm
        type="edit"
        car={{ ...(body as Car), id: +id }}
        errors={result.error.flatten().fieldErrors}
      />
    );
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);

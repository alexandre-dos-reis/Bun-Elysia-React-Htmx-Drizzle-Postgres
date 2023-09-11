import { db } from "./client";
import { InsertCar, cars } from "./schema";

const newCars: Array<InsertCar> = [
  {
    licence: "FL-521-RX",
    name: "Renault Kangoo",
  },
  { licence: "BE-967-WH", name: "Peugeot 207" },
  { licence: "FD-897-SP", name: "Audi A3" },
  { licence: "CT-725-EL", name: "Opel Adam" },
  { licence: "FY-839-HT", name: "Citroën C2" },
  { licence: "FW-078-EX", name: "Peugeot 308" },
  { licence: "GA-312-ZV", name: "Peugeot 208" },
  { licence: "EE-165-HP", name: "Renault Clio" },
  { licence: "BV-243-YZ", name: "Renault Scenic" },
];

await db.insert(cars).values(newCars).returning();

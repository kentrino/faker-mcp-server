import { faker } from "@faker-js/faker"
import type { ServerBuilder } from "../ServerBuilder.js"
import { z } from "zod"
import { ModuleBuilder } from "../ModuleBuilder.js"

export function vehicle(): Parameters<ServerBuilder["register"]>[0] {
  return new ModuleBuilder()
    .method("vehicle", "Returns a random vehicle.", z.object({}), () => {
      return faker.vehicle.vehicle()
    })
    .method("manufacturer", "Returns a manufacturer name.", z.object({}), () => {
      return faker.vehicle.manufacturer()
    })
    .method("model", "Returns a vehicle model.", z.object({}), () => {
      return faker.vehicle.model()
    })
    .method("type", "Returns a vehicle type.", z.object({}), () => {
      return faker.vehicle.type()
    })
    .method("fuel", "Returns a fuel type.", z.object({}), () => {
      return faker.vehicle.fuel()
    })
    .method("vin", "Returns a vehicle identification number (VIN).", z.object({}), () => {
      return faker.vehicle.vin()
    })
    .method("color", "Returns a vehicle color.", z.object({}), () => {
      return faker.vehicle.color()
    })
    .method("vrm", "Returns a vehicle registration number (Vehicle Registration Mark - VRM).", z.object({}), () => {
      return faker.vehicle.vrm()
    })
    .method("bicycle", "Returns a type of bicycle.", z.object({}), () => {
      return faker.vehicle.bicycle()
    })
    .build({
      name: "generate_vehicle",
      description: "Generate vehicle related entries",
    })
}

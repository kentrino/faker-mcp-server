import { faker } from "@faker-js/faker"
import type { ServerBuilder } from "../ToolServer.js"
import { z } from "zod"
import { ModuleBuilder } from "../ModuleBuilder.js"

export function science(): Parameters<ServerBuilder["register"]>[0] {
  return new ModuleBuilder()
    .method("chemicalElement", "Returns a random periodic table element.", z.object({}), () => {
      // Convert the object to a JSON string since ModuleBuilder expects string return values
      const element = faker.science.chemicalElement()
      return JSON.stringify(element)
    })
    .method("unit", "Returns a random scientific unit.", z.object({}), () => {
      // Convert the object to a JSON string since ModuleBuilder expects string return values
      const unit = faker.science.unit()
      return JSON.stringify(unit)
    })
    .build({
      name: "generate_science",
      description: "Generate science related entries",
    })
}

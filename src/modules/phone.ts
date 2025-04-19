import { faker } from "@faker-js/faker"
import type { ServerBuilder } from "../ToolServer.js"
import { z } from "zod"
import { ModuleBuilder } from "../ModuleBuilder.js"

export function phone(): Parameters<ServerBuilder["register"]>[0] {
  return new ModuleBuilder()
    .method("imei", "Generates IMEI number.", z.object({}), () => {
      return faker.phone.imei()
    })
    .method(
      "number",
      "Generates a random phone number.",
      z.object({
        style: z
          .enum(["human", "national", "international"])
          .optional()
          .describe("Style of the generated phone number: 'human' (default), 'national', or 'international'."),
      }),
      (input) => {
        return faker.phone.number(input)
      },
    )
    .build({
      name: "generate_phone",
      description: "Generate phone-related data",
    })
}

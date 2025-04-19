import { faker } from "@faker-js/faker"
import type { ToolServer } from "../ToolServer.js"
import { z } from "zod"
import { ModuleBuilder } from "../ModuleBuilder.js"

export function commerce(): Parameters<ToolServer["register"]>[0] {
  return new ModuleBuilder()
    .method("department", "Returns a department inside a shop.", z.object({}), () => {
      return faker.commerce.department()
    })
    .method("productName", "Generates a random descriptive product name.", z.object({}), () => {
      return faker.commerce.productName()
    })
    .method(
      "price",
      "Generates a price between min and max (inclusive).",
      z.object({
        min: z.number().optional().describe("The minimum price."),
        max: z.number().optional().describe("The maximum price."),
        dec: z.number().optional().describe("The number of decimal places."),
        symbol: z.string().optional().describe("The currency value to use."),
      }),
      (input) => {
        return faker.commerce.price(input)
      },
    )
    .method("productAdjective", "Returns an adjective describing a product.", z.object({}), () => {
      return faker.commerce.productAdjective()
    })
    .method("productMaterial", "Returns a material of a product.", z.object({}), () => {
      return faker.commerce.productMaterial()
    })
    .method("product", "Returns a short product name.", z.object({}), () => {
      return faker.commerce.product()
    })
    .method("productDescription", "Returns a product description.", z.object({}), () => {
      return faker.commerce.productDescription()
    })
    .method(
      "isbn",
      "Returns a random ISBN identifier.",
      z.union([
        z.literal(10),
        z.literal(13),
        z.object({
          variant: z
            .union([z.literal(10), z.literal(13)])
            .optional()
            .describe(
              "The variant of the identifier to return. Can be either 10 (10-digit format) or 13 (13-digit format).",
            ),
          separator: z.string().optional().describe("The separator to use in the format."),
        }),
      ]),
      (input) => {
        return faker.commerce.isbn(input)
      },
    )
    .build({
      name: "generate_commerce",
      description: "Generate fake commerce data",
    })
}

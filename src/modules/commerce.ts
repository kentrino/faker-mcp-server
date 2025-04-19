import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function commerce(server: McpServer) {
  server.tool("commerce-department", "Returns a department inside a shop.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.commerce.department() }],
    }
  })
  server.tool("commerce-productName", "Generates a random descriptive product name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.commerce.productName() }],
    }
  })
  server.tool(
    "commerce-price",
    "Generates a price between min and max (inclusive).",
    {
      min: z.number().optional().describe("The minimum price."),
      max: z.number().optional().describe("The maximum price."),
      dec: z.number().optional().describe("The number of decimal places."),
      symbol: z.string().optional().describe("The currency value to use."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.commerce.price(args) }],
      }
    },
  )
  server.tool("commerce-productAdjective", "Returns an adjective describing a product.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.commerce.productAdjective() }],
    }
  })
  server.tool("commerce-productMaterial", "Returns a material of a product.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.commerce.productMaterial() }],
    }
  })
  server.tool("commerce-product", "Returns a short product name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.commerce.product() }],
    }
  })
  server.tool("commerce-productDescription", "Returns a product description.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.commerce.productDescription() }],
    }
  })
  server.tool(
    "commerce-isbn",
    "Returns a random ISBN identifier.",
    {
      union: z.union([
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
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.commerce.isbn(args.union) }],
      }
    },
  )
  return server
}

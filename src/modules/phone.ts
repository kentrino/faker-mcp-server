import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function phone(server: McpServer) {
  server.tool("phone-imei", "Generates IMEI number.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.phone.imei() }],
    }
  })

  server.tool(
    "phone-number",
    "Generates a random phone number.",
    {
      style: z
        .enum(["human", "national", "international"])
        .optional()
        .describe("Style of the generated phone number: 'human' (default), 'national', or 'international'."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.phone.number(args) }],
      }
    },
  )

  return server
}

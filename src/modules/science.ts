import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function science(server: McpServer) {
  server.tool("science-chemicalElement", "Returns a random periodic table element.", {}, async () => {
    const element = faker.science.chemicalElement()
    return {
      content: [{ type: "text", text: JSON.stringify(element) }],
    }
  })

  server.tool("science-unit", "Returns a random scientific unit.", {}, async () => {
    const unit = faker.science.unit()
    return {
      content: [{ type: "text", text: JSON.stringify(unit) }],
    }
  })

  return server
}

import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function hacker(server: McpServer) {
  server.tool("hacker-abbreviation", "Returns a random hacker/IT abbreviation.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.hacker.abbreviation() }],
    }
  })

  server.tool("hacker-adjective", "Returns a random hacker/IT adjective.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.hacker.adjective() }],
    }
  })

  server.tool("hacker-noun", "Returns a random hacker/IT noun.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.hacker.noun() }],
    }
  })

  server.tool("hacker-verb", "Returns a random hacker/IT verb.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.hacker.verb() }],
    }
  })

  server.tool(
    "hacker-ingverb",
    "Returns a random hacker/IT verb for continuous actions (en: ing suffix; e.g. hacking).",
    {},
    async () => {
      return {
        content: [{ type: "text", text: faker.hacker.ingverb() }],
      }
    },
  )

  server.tool("hacker-phrase", "Generates a random hacker/IT phrase.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.hacker.phrase() }],
    }
  })

  return server
}

import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function airline(server: McpServer) {
  server.tool(`airline.airline.iataCode`, "Generates a random airline.", {}, async () => {
    return {
      content: [
        {
          type: "text",
          text: faker.airline.airline().iataCode,
        },
      ],
    }
  })
  server.tool(`airline.airline.name`, "Generates a random airline.", {}, async () => {
    return {
      content: [
        {
          type: "text",
          text: faker.airline.airline().name,
        },
      ],
    }
  })

  server.tool(`airline.airport.iataCode`, "Generates a random airport.", {}, async () => {
    return {
      content: [
        {
          type: "text",
          text: faker.airline.airport().iataCode,
        },
      ],
    }
  })

  server.tool(`airline.airport.name`, "Generates a random airport.", {}, async () => {
    return {
      content: [
        {
          type: "text",
          text: faker.airline.airport().name,
        },
      ],
    }
  })

  server.tool(`airline.airplane.iataTypeCode`, "Generates a random airplane model.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.airline.airplane().iataTypeCode }],
    }
  })

  server.tool(`airline.airplane.name`, "Generates a random airplane model.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.airline.airplane().name }],
    }
  })

  server.tool(
    `airline.airplane.recordLocator`,
    "Generates a random airplane recordLocator.",
    {
      allowNumerics: z.boolean().optional().describe("Whether to allow numeric characters."),
      allowVisuallySimilarCharacters: z
        .boolean()
        .optional()
        .describe("Whether to allow visually similar characters such as '1' and 'I'."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.airline.recordLocator(args) }],
      }
    },
  )

  return server
}

import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function airline(server: McpServer) {
  server.tool(`airline-airline-iataCode`, "Generates a random airline.", {}, async () => {
    return {
      content: [
        {
          type: "text",
          text: faker.airline.airline().iataCode,
        },
      ],
    }
  })
  server.tool(`airline-airline-name`, "Generates a random airline.", {}, async () => {
    return {
      content: [
        {
          type: "text",
          text: faker.airline.airline().name,
        },
      ],
    }
  })

  server.tool(`airline-airport-iataCode`, "Generates a random airport.", {}, async () => {
    return {
      content: [
        {
          type: "text",
          text: faker.airline.airport().iataCode,
        },
      ],
    }
  })

  server.tool(`airline-airport-name`, "Generates a random airport.", {}, async () => {
    return {
      content: [
        {
          type: "text",
          text: faker.airline.airport().name,
        },
      ],
    }
  })

  server.tool(`airline-airplane-iataTypeCode`, "Generates a random airplane model.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.airline.airplane().iataTypeCode }],
    }
  })

  server.tool(`airline-airplane-name`, "Generates a random airplane model.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.airline.airplane().name }],
    }
  })

  server.tool(
    `airline-recordLocator`,
    "Generates a random record locator (booking reference number).",
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

  server.tool(
    `airline-seat`,
    "Generates a random seat.",
    {
      aircraftType: z
        .enum(["narrowbody", "regional", "widebody"])
        .optional()
        .describe("The aircraft type. Can be one of 'narrowbody', 'regional', 'widebody'."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.airline.seat(args) }],
      }
    },
  )

  server.tool(`airline-aircraftType`, "Returns a random aircraft type.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.airline.aircraftType() }],
    }
  })

  server.tool(
    `airline-flightNumber`,
    "Returns a random flight number.",
    {
      length: z
        .union([
          z.number(),
          z.object({
            min: z.number().describe("The minimum number of digits to generate."),
            max: z.number().describe("The maximum number of digits to generate."),
          }),
        ])
        .optional()
        .describe("The number or range of digits to generate."),
      addLeadingZeros: z
        .boolean()
        .optional()
        .describe("Whether to pad the flight number up to 4 digits with leading zeros."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.airline.flightNumber(args) }],
      }
    },
  )

  return server
}

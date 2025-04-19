import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function date(server: McpServer) {
  const refDateSchema = z
    .string()
    .optional()
    .describe("The date to use as reference point for the newly generated date.")

  server.tool(
    "date-anytime",
    "Generates a random date that can be either in the past or in the future.",
    {
      refDate: refDateSchema,
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.date.anytime(args).toISOString() }],
      }
    },
  )

  server.tool(
    "date-past",
    "Generates a random date in the past.",
    {
      years: z.number().optional().describe("The range of years the date may be in the past."),
      refDate: refDateSchema,
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.date.past(args).toISOString() }],
      }
    },
  )

  server.tool(
    "date-future",
    "Generates a random date in the future.",
    {
      years: z.number().optional().describe("The range of years the date may be in the future."),
      refDate: refDateSchema,
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.date.future(args).toISOString() }],
      }
    },
  )

  server.tool(
    "date-between",
    "Generates a random date between the given boundaries.",
    {
      from: z.string().describe("The early date boundary."),
      to: z.string().describe("The late date boundary."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.date.between(args).toISOString() }],
      }
    },
  )

  server.tool(
    "date-betweens",
    "Generates random dates between the given boundaries. The dates will be returned in an array sorted in chronological order.",
    {
      from: z.string().describe("The early date boundary."),
      to: z.string().describe("The late date boundary."),
      count: z
        .union([
          z.number(),
          z.object({
            min: z.number().describe("The minimum number of dates to generate."),
            max: z.number().describe("The maximum number of dates to generate."),
          }),
        ])
        .optional()
        .describe("The number of dates to generate."),
    },
    async (args) => {
      const dates = faker.date
        .betweens(args)
        .map((date) => date.toISOString())
        .join(", ")
      return {
        content: [{ type: "text", text: dates }],
      }
    },
  )

  server.tool(
    "date-recent",
    "Generates a random date in the recent past.",
    {
      days: z.number().optional().describe("The range of days the date may be in the past."),
      refDate: refDateSchema,
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.date.recent(args).toISOString() }],
      }
    },
  )

  server.tool(
    "date-soon",
    "Generates a random date in the near future.",
    {
      days: z.number().optional().describe("The range of days the date may be in the future."),
      refDate: refDateSchema,
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.date.soon(args).toISOString() }],
      }
    },
  )

  server.tool(
    "date-month",
    "Returns a random name of a month.",
    {
      abbreviated: z.boolean().optional().describe("Whether to return an abbreviation."),
      context: z
        .boolean()
        .optional()
        .describe(
          "Whether to return the name of a month in the context of a date. In some locales this may affect grammar or capitalization.",
        ),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.date.month(args) }],
      }
    },
  )

  server.tool(
    "date-weekday",
    "Returns a random day of the week.",
    {
      abbreviated: z.boolean().optional().describe("Whether to return an abbreviation."),
      context: z
        .boolean()
        .optional()
        .describe(
          "Whether to return the day of the week in the context of a date. In some locales this may affect grammar or capitalization.",
        ),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.date.weekday(args) }],
      }
    },
  )

  server.tool("date-timeZone", "Returns a random IANA time zone name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.date.timeZone() }],
    }
  })

  server.tool(
    "date-birthdate",
    "Returns a random birthdate. By default, the birthdate is generated for an adult between 18 and 80 years old. But you can customize the 'age' range or the 'year' range to generate a more specific birthdate.",
    {
      union: z.union([
        z.object({ refDate: refDateSchema }),
        z.object({ mode: z.literal("age"), min: z.number(), max: z.number(), refDate: refDateSchema }),
        z.object({ mode: z.literal("year"), min: z.number(), max: z.number() }),
      ]),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.date.birthdate(args.union).toISOString() }],
      }
    },
  )

  return server
}

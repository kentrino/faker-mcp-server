import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function word(server: McpServer) {
  // Define the strategy enum for word methods
  const StrategyEnum = z.enum(["fail", "closest", "shortest", "longest", "any-length"])

  // Define the common length schema that can be either a number or a min/max object
  const lengthSchema = z.union([
    z.number(),
    z.object({
      min: z.number().describe("The minimum length of the word."),
      max: z.number().describe("The maximum length of the word."),
    }),
  ])

  // Define the common count schema for the words method
  const countSchema = z.union([
    z.number(),
    z.object({
      min: z.number().describe("The minimum number of words to return."),
      max: z.number().describe("The maximum number of words to return."),
    }),
  ])

  // Define the common word options schema
  const wordOptionsSchema = z.union([
    z.number(),
    z.object({
      length: lengthSchema.optional().describe("The expected length of the word."),
      strategy: StrategyEnum.optional().describe(
        "The strategy to apply when no words with a matching length are found.",
      ),
    }),
  ])

  server.tool(
    "word-adjective",
    "Returns a random adjective.",
    {
      options: wordOptionsSchema.optional().describe("The expected length of the word or the options to use."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.word.adjective(args.options) }],
      }
    },
  )

  server.tool(
    "word-adverb",
    "Returns a random adverb.",
    {
      options: wordOptionsSchema.optional().describe("The expected length of the word or the options to use."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.word.adverb(args.options) }],
      }
    },
  )

  server.tool(
    "word-conjunction",
    "Returns a random conjunction.",
    {
      options: wordOptionsSchema.optional().describe("The expected length of the word or the options to use."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.word.conjunction(args.options) }],
      }
    },
  )

  server.tool(
    "word-interjection",
    "Returns a random interjection.",
    {
      options: wordOptionsSchema.optional().describe("The expected length of the word or the options to use."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.word.interjection(args.options) }],
      }
    },
  )

  server.tool(
    "word-noun",
    "Returns a random noun.",
    {
      options: wordOptionsSchema.optional().describe("The expected length of the word or the options to use."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.word.noun(args.options) }],
      }
    },
  )

  server.tool(
    "word-preposition",
    "Returns a random preposition.",
    {
      options: wordOptionsSchema.optional().describe("The expected length of the word or the options to use."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.word.preposition(args.options) }],
      }
    },
  )

  server.tool(
    "word-verb",
    "Returns a random verb.",
    {
      options: wordOptionsSchema.optional().describe("The expected length of the word or the options to use."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.word.verb(args.options) }],
      }
    },
  )

  server.tool(
    "word-sample",
    "Returns a random word, that can be an adjective, adverb, conjunction, interjection, noun, preposition, or verb.",
    {
      options: wordOptionsSchema.optional().describe("The expected length of the word or the options to use."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.word.sample(args.options) }],
      }
    },
  )

  server.tool(
    "word-words",
    "Returns a random string containing some words separated by spaces.",
    {
      options: z
        .union([
          z.number(),
          z.object({
            count: countSchema.optional().describe("The number of words to return."),
          }),
        ])
        .optional()
        .describe("The optional options object or the number of words to return."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.word.words(args.options) }],
      }
    },
  )

  return server
}

import { faker } from "@faker-js/faker"
import type { ServerBuilder } from "../ToolServer.js"
import { z } from "zod"
import { ModuleBuilder } from "../ModuleBuilder.js"

export function lorem(): Parameters<ServerBuilder["register"]>[0] {
  // Define the strategy enum for the word method
  const StrategyEnum = z.enum(["fail", "closest", "shortest", "longest", "any-length"])

  // Define the common count schema that can be either a number or a min/max object
  const countSchema = <T extends z.ZodTypeAny>(schema: T) =>
    z.union([
      schema,
      z.object({
        min: z.number().describe("The minimum number to generate."),
        max: z.number().describe("The maximum number to generate."),
      }),
    ])

  return new ModuleBuilder()
    .method(
      "word",
      "Generates a word of a specified length.",
      z.object({
        length: z
          .union([
            z.number(),
            z.object({
              min: z.number().describe("The minimum length of the word."),
              max: z.number().describe("The maximum length of the word."),
            }),
          ])
          .optional()
          .describe("The expected length of the word."),
        strategy: StrategyEnum.optional().describe(
          "The strategy to apply when no words with a matching length are found. Available strategies: 'fail', 'shortest', 'closest', 'longest', 'any-length'.",
        ),
      }),
      (input) => {
        return faker.lorem.word(input)
      },
    )
    .method(
      "words",
      "Generates a space separated list of words.",
      z.object({
        count: countSchema(z.number()).optional().describe("The number of words to generate."),
      }),
      (input) => {
        return faker.lorem.words(input.count)
      },
    )
    .method(
      "sentence",
      "Generates a space separated list of words beginning with a capital letter and ending with a period.",
      z.object({
        wordCount: countSchema(z.number()).optional().describe("The number of words that should be in the sentence."),
      }),
      (input) => {
        return faker.lorem.sentence(input.wordCount)
      },
    )
    .method(
      "slug",
      "Generates a slugified text consisting of the given number of hyphen separated words.",
      z.object({
        wordCount: countSchema(z.number()).optional().describe("The number of words to generate."),
      }),
      (input) => {
        return faker.lorem.slug(input.wordCount)
      },
    )
    .method(
      "sentences",
      "Generates the given number of sentences.",
      z.object({
        sentenceCount: countSchema(z.number()).optional().describe("The number of sentences to generate."),
        separator: z.string().optional().describe("The separator to add between sentences."),
      }),
      (input) => {
        return faker.lorem.sentences(input.sentenceCount, input.separator)
      },
    )
    .method(
      "paragraph",
      "Generates a paragraph with the given number of sentences.",
      z.object({
        sentenceCount: countSchema(z.number()).optional().describe("The number of sentences to generate."),
      }),
      (input) => {
        return faker.lorem.paragraph(input.sentenceCount)
      },
    )
    .method(
      "paragraphs",
      "Generates the given number of paragraphs.",
      z.object({
        paragraphCount: countSchema(z.number()).optional().describe("The number of paragraphs to generate."),
        separator: z.string().optional().describe("The separator to use."),
      }),
      (input) => {
        return faker.lorem.paragraphs(input.paragraphCount, input.separator)
      },
    )
    .method("text", "Generates a random text based on a random lorem method.", z.object({}), () => {
      return faker.lorem.text()
    })
    .method(
      "lines",
      "Generates the given number lines of lorem separated by '\\n'.",
      z.object({
        lineCount: countSchema(z.number()).optional().describe("The number of lines to generate."),
      }),
      (input) => {
        return faker.lorem.lines(input.lineCount)
      },
    )
    .build({
      name: "generate_lorem",
      description: "Generate random texts and words",
    })
}

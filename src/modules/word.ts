import { faker } from "@faker-js/faker"
import type { ToolServer } from "../ToolServer.js"
import { z } from "zod"
import { ModuleBuilder } from "../ModuleBuilder.js"

export function word(): Parameters<ToolServer["register"]>[0] {
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

  return new ModuleBuilder()
    .method(
      "adjective",
      "Returns a random adjective.",
      z.object({
        options: wordOptionsSchema.optional().describe("The expected length of the word or the options to use."),
      }),
      (input) => {
        return faker.word.adjective(input.options)
      },
    )
    .method(
      "adverb",
      "Returns a random adverb.",
      z.object({
        options: wordOptionsSchema.optional().describe("The expected length of the word or the options to use."),
      }),
      (input) => {
        return faker.word.adverb(input.options)
      },
    )
    .method(
      "conjunction",
      "Returns a random conjunction.",
      z.object({
        options: wordOptionsSchema.optional().describe("The expected length of the word or the options to use."),
      }),
      (input) => {
        return faker.word.conjunction(input.options)
      },
    )
    .method(
      "interjection",
      "Returns a random interjection.",
      z.object({
        options: wordOptionsSchema.optional().describe("The expected length of the word or the options to use."),
      }),
      (input) => {
        return faker.word.interjection(input.options)
      },
    )
    .method(
      "noun",
      "Returns a random noun.",
      z.object({
        options: wordOptionsSchema.optional().describe("The expected length of the word or the options to use."),
      }),
      (input) => {
        return faker.word.noun(input.options)
      },
    )
    .method(
      "preposition",
      "Returns a random preposition.",
      z.object({
        options: wordOptionsSchema.optional().describe("The expected length of the word or the options to use."),
      }),
      (input) => {
        return faker.word.preposition(input.options)
      },
    )
    .method(
      "verb",
      "Returns a random verb.",
      z.object({
        options: wordOptionsSchema.optional().describe("The expected length of the word or the options to use."),
      }),
      (input) => {
        return faker.word.verb(input.options)
      },
    )
    .method(
      "sample",
      "Returns a random word, that can be an adjective, adverb, conjunction, interjection, noun, preposition, or verb.",
      z.object({
        options: wordOptionsSchema.optional().describe("The expected length of the word or the options to use."),
      }),
      (input) => {
        return faker.word.sample(input.options)
      },
    )
    .method(
      "words",
      "Returns a random string containing some words separated by spaces.",
      z.object({
        options: z
          .union([
            z.number(),
            z.object({
              count: countSchema.optional().describe("The number of words to return."),
            }),
          ])
          .optional()
          .describe("The optional options object or the number of words to return."),
      }),
      (input) => {
        return faker.word.words(input.options)
      },
    )
    .build({
      name: "generate_word",
      description: "Generate various types of words",
    })
}

import { faker } from "@faker-js/faker"
import type { ServerBuilder } from "../ServerBuilder.js"
import { z } from "zod"
import { ModuleBuilder } from "../ModuleBuilder.js"

export function git(): Parameters<ServerBuilder["register"]>[0] {
  const refDateSchema = z.string().optional().describe("The date to use as reference point for the commit.")

  return new ModuleBuilder()
    .method("branch", "Generates a random branch name.", z.object({}), () => {
      return faker.git.branch()
    })
    .method(
      "commitEntry",
      "Generates a random commit entry as printed by `git log`.",
      z.object({
        merge: z.boolean().optional().describe("Set to `true` to generate a merge message line."),
        eol: z
          .enum(["LF", "CRLF"])
          .optional()
          .describe("Choose the end of line character to use. 'LF' = '\\n', 'CRLF' = '\\r\\n'"),
        refDate: refDateSchema,
      }),
      (input) => {
        return faker.git.commitEntry(input)
      },
    )
    .method("commitMessage", "Generates a random commit message.", z.object({}), () => {
      return faker.git.commitMessage()
    })
    .method(
      "commitDate",
      "Generates a date string for a git commit using the same format as `git log`.",
      z.object({
        refDate: refDateSchema,
      }),
      (input) => {
        return faker.git.commitDate(input)
      },
    )
    .method(
      "commitSha",
      "Generates a random commit sha.",
      z.object({
        length: z.number().optional().describe("The length of the commit sha."),
      }),
      (input) => {
        return faker.git.commitSha(input)
      },
    )
    .build({
      name: "generate_git",
      description: "Generate git related entries",
    })
}

import { faker } from "@faker-js/faker"
import type { ServerBuilder } from "../ToolServer.js"
import { z } from "zod"
import { ModuleBuilder } from "../ModuleBuilder.js"

export function hacker(): Parameters<ServerBuilder["register"]>[0] {
  return new ModuleBuilder()
    .method("abbreviation", "Returns a random hacker/IT abbreviation.", z.object({}), () => {
      return faker.hacker.abbreviation()
    })
    .method("adjective", "Returns a random hacker/IT adjective.", z.object({}), () => {
      return faker.hacker.adjective()
    })
    .method("noun", "Returns a random hacker/IT noun.", z.object({}), () => {
      return faker.hacker.noun()
    })
    .method("verb", "Returns a random hacker/IT verb.", z.object({}), () => {
      return faker.hacker.verb()
    })
    .method(
      "ingverb",
      "Returns a random hacker/IT verb for continuous actions (en: ing suffix; e.g. hacking).",
      z.object({}),
      () => {
        return faker.hacker.ingverb()
      },
    )
    .method("phrase", "Generates a random hacker/IT phrase.", z.object({}), () => {
      return faker.hacker.phrase()
    })
    .build({
      name: "generate_hacker",
      description: "Generate hacker/IT words and phrases",
    })
}

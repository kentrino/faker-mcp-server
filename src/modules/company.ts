import { faker } from "@faker-js/faker"
import type { ToolServer } from "../ToolServer.js"
import { z } from "zod"
import { ModuleBuilder } from "../ModuleBuilder.js"

export function company(): Parameters<ToolServer["register"]>[0] {
  return new ModuleBuilder()
    .method("name", "Generates a random company name.", z.object({}), () => {
      return faker.company.name()
    })
    .method(
      "catchPhrase",
      "Generates a random catch phrase that can be displayed to an end user.",
      z.object({}),
      () => {
        return faker.company.catchPhrase()
      },
    )
    .method(
      "buzzPhrase",
      "Generates a random buzz phrase that can be used to demonstrate data being viewed by a manager.",
      z.object({}),
      () => {
        return faker.company.buzzPhrase()
      },
    )
    .method(
      "catchPhraseAdjective",
      "Returns a random catch phrase adjective that can be displayed to an end user.",
      z.object({}),
      () => {
        return faker.company.catchPhraseAdjective()
      },
    )
    .method(
      "catchPhraseDescriptor",
      "Returns a random catch phrase descriptor that can be displayed to an end user.",
      z.object({}),
      () => {
        return faker.company.catchPhraseDescriptor()
      },
    )
    .method(
      "catchPhraseNoun",
      "Returns a random catch phrase noun that can be displayed to an end user.",
      z.object({}),
      () => {
        return faker.company.catchPhraseNoun()
      },
    )
    .method(
      "buzzAdjective",
      "Returns a random buzz adjective that can be used to demonstrate data being viewed by a manager.",
      z.object({}),
      () => {
        return faker.company.buzzAdjective()
      },
    )
    .method(
      "buzzVerb",
      "Returns a random buzz verb that can be used to demonstrate data being viewed by a manager.",
      z.object({}),
      () => {
        return faker.company.buzzVerb()
      },
    )
    .method(
      "buzzNoun",
      "Returns a random buzz noun that can be used to demonstrate data being viewed by a manager.",
      z.object({}),
      () => {
        return faker.company.buzzNoun()
      },
    )
    .build({
      name: "generate_company",
      description: "Generate fake company data",
    })
}

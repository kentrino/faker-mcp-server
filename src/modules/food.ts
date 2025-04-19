import { faker } from "@faker-js/faker"
import type { ToolServer } from "../ToolServer.js"
import { z } from "zod"
import { ModuleBuilder } from "../ModuleBuilder.js"

export function food(): Parameters<ToolServer["register"]>[0] {
  return new ModuleBuilder()
    .method("adjective", "Generates a random dish adjective.", z.object({}), () => {
      return faker.food.adjective()
    })
    .method("description", "Generates a random dish description.", z.object({}), () => {
      return faker.food.description()
    })
    .method("dish", "Generates a random dish name.", z.object({}), () => {
      return faker.food.dish()
    })
    .method("ethnicCategory", "Generates a random food's ethnic category.", z.object({}), () => {
      return faker.food.ethnicCategory()
    })
    .method("fruit", "Generates a random fruit name.", z.object({}), () => {
      return faker.food.fruit()
    })
    .method("ingredient", "Generates a random ingredient name.", z.object({}), () => {
      return faker.food.ingredient()
    })
    .method("meat", "Generates a random meat.", z.object({}), () => {
      return faker.food.meat()
    })
    .method("spice", "Generates a random spice name.", z.object({}), () => {
      return faker.food.spice()
    })
    .method("vegetable", "Generates a random vegetable name.", z.object({}), () => {
      return faker.food.vegetable()
    })
    .build({
      name: "generate_food",
      description: "Generate fake food data",
    })
}

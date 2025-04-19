import { faker } from "@faker-js/faker"
import type { ServerBuilder } from "../ToolServer.js"
import { z } from "zod"
import { ModuleBuilder } from "../ModuleBuilder.js"

export function animal(): Parameters<ServerBuilder["register"]>[0] {
  return new ModuleBuilder()
    .method("dog", "Returns a random dog breed.", z.object({}), () => {
      return faker.animal.dog()
    })
    .method("cat", "Returns a random cat breed.", z.object({}), () => {
      return faker.animal.cat()
    })
    .method("snake", "Returns a random snake species.", z.object({}), () => {
      return faker.animal.snake()
    })
    .method("bear", "Returns a random bear species.", z.object({}), () => {
      return faker.animal.bear()
    })
    .method("lion", "Returns a random lion species.", z.object({}), () => {
      return faker.animal.lion()
    })
    .method("cetacean", "Returns a random cetacean species.", z.object({}), () => {
      return faker.animal.cetacean()
    })
    .method("horse", "Returns a random horse breed.", z.object({}), () => {
      return faker.animal.horse()
    })
    .method("bird", "Returns a random bird species.", z.object({}), () => {
      return faker.animal.bird()
    })
    .method("cow", "Returns a random cow species.", z.object({}), () => {
      return faker.animal.cow()
    })
    .method("fish", "Returns a random fish species.", z.object({}), () => {
      return faker.animal.fish()
    })
    .method("crocodilia", "Returns a random crocodilian species.", z.object({}), () => {
      return faker.animal.crocodilia()
    })
    .method("insect", "Returns a random insect species.", z.object({}), () => {
      return faker.animal.insect()
    })
    .method("rabbit", "Returns a random rabbit species.", z.object({}), () => {
      return faker.animal.rabbit()
    })
    .method("rodent", "Returns a random rodent breed.", z.object({}), () => {
      return faker.animal.rodent()
    })
    .method("type", "Returns a random animal type.", z.object({}), () => {
      return faker.animal.type()
    })
    .method("petName", "Returns a random pet name.", z.object({}), () => {
      return faker.animal.petName()
    })
    .build({
      name: "generate_animal",
      description: "Generate fake animal data",
    })
}

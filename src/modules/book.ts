import { faker } from "@faker-js/faker"
import type { ServerBuilder } from "../ToolServer.js"
import { z } from "zod"
import { ModuleBuilder } from "../ModuleBuilder.js"

export function book(): Parameters<ServerBuilder["register"]>[0] {
  return new ModuleBuilder()
    .method("author", "Returns a random author name.", z.object({}), () => {
      return faker.book.author()
    })
    .method("format", "Returns a random book format.", z.object({}), () => {
      return faker.book.format()
    })
    .method("genre", "Returns a random genre.", z.object({}), () => {
      return faker.book.genre()
    })
    .method("publisher", "Returns a random publisher.", z.object({}), () => {
      return faker.book.publisher()
    })
    .method("series", "Returns a random series.", z.object({}), () => {
      return faker.book.series()
    })
    .method("title", "Returns a random title.", z.object({}), () => {
      return faker.book.title()
    })
    .build({
      name: "generate_book",
      description: "Generate fake book data",
    })
}

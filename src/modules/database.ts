import { faker } from "@faker-js/faker"
import type { ServerBuilder } from "../ToolServer.js"
import { z } from "zod"
import { ModuleBuilder } from "../ModuleBuilder.js"

export function database(): Parameters<ServerBuilder["register"]>[0] {
  return new ModuleBuilder()
    .method("column", "Returns a random database column name.", z.object({}), () => {
      return faker.database.column()
    })
    .method("type", "Returns a random database column type.", z.object({}), () => {
      return faker.database.type()
    })
    .method("collation", "Returns a random database collation.", z.object({}), () => {
      return faker.database.collation()
    })
    .method("engine", "Returns a random database engine.", z.object({}), () => {
      return faker.database.engine()
    })
    .method("mongodbObjectId", "Returns a MongoDB ObjectId string.", z.object({}), () => {
      return faker.database.mongodbObjectId()
    })
    .build({
      name: "generate_database",
      description: "Generate fake database data",
    })
}

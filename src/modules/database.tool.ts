import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function database(server: McpServer) {
  server.tool("database-column", "Returns a random database column name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.database.column() }],
    }
  })

  server.tool("database-type", "Returns a random database column type.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.database.type() }],
    }
  })

  server.tool("database-collation", "Returns a random database collation.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.database.collation() }],
    }
  })

  server.tool("database-engine", "Returns a random database engine.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.database.engine() }],
    }
  })

  server.tool("database-mongodbObjectId", "Returns a MongoDB ObjectId string.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.database.mongodbObjectId() }],
    }
  })

  return server
}

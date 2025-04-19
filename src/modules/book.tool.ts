import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function book(server: McpServer) {
  server.tool("book-author", "Returns a random author name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.book.author() }],
    }
  })

  server.tool("book-format", "Returns a random book format.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.book.format() }],
    }
  })

  server.tool("book-genre", "Returns a random genre.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.book.genre() }],
    }
  })

  server.tool("book-publisher", "Returns a random publisher.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.book.publisher() }],
    }
  })

  server.tool("book-series", "Returns a random series.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.book.series() }],
    }
  })

  server.tool("book-title", "Returns a random title.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.book.title() }],
    }
  })

  return server
}

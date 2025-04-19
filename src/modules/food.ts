import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function food(server: McpServer) {
  server.tool("food-adjective", "Generates a random dish adjective.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.food.adjective() }],
    }
  })

  server.tool("food-description", "Generates a random dish description.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.food.description() }],
    }
  })

  server.tool("food-dish", "Generates a random dish name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.food.dish() }],
    }
  })

  server.tool("food-ethnicCategory", "Generates a random food's ethnic category.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.food.ethnicCategory() }],
    }
  })

  server.tool("food-fruit", "Generates a random fruit name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.food.fruit() }],
    }
  })

  server.tool("food-ingredient", "Generates a random ingredient name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.food.ingredient() }],
    }
  })

  server.tool("food-meat", "Generates a random meat.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.food.meat() }],
    }
  })

  server.tool("food-spice", "Generates a random spice name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.food.spice() }],
    }
  })

  server.tool("food-vegetable", "Generates a random vegetable name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.food.vegetable() }],
    }
  })

  return server
}

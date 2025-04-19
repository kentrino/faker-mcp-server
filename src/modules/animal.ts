import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function animal(server: McpServer) {
  server.tool(`animal-dog`, "Returns a random dog breed.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.animal.dog() }],
    }
  })

  server.tool(`animal-cat`, "Returns a random cat breed.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.animal.cat() }],
    }
  })

  server.tool(`animal-snake`, "Returns a random snake species.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.animal.snake() }],
    }
  })

  server.tool(`animal-bear`, "Returns a random bear species.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.animal.bear() }],
    }
  })

  server.tool(`animal-lion`, "Returns a random lion species.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.animal.lion() }],
    }
  })

  server.tool(`animal-cetacean`, "Returns a random cetacean species.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.animal.cetacean() }],
    }
  })

  server.tool(`animal-horse`, "Returns a random horse breed.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.animal.horse() }],
    }
  })

  server.tool(`animal-bird`, "Returns a random bird species.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.animal.bird() }],
    }
  })

  server.tool(`animal-cow`, "Returns a random cow species.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.animal.cow() }],
    }
  })

  server.tool(`animal-fish`, "Returns a random fish species.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.animal.fish() }],
    }
  })

  server.tool(`animal-crocodilia`, "Returns a random crocodilian species.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.animal.crocodilia() }],
    }
  })

  server.tool(`animal-insect`, "Returns a random insect species.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.animal.insect() }],
    }
  })

  server.tool(`animal-rabbit`, "Returns a random rabbit species.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.animal.rabbit() }],
    }
  })

  server.tool(`animal-rodent`, "Returns a random rodent breed.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.animal.rodent() }],
    }
  })

  server.tool(`animal-type`, "Returns a random animal type.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.animal.type() }],
    }
  })

  server.tool(`animal-petName`, "Returns a random pet name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.animal.petName() }],
    }
  })

  return server
}

import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function company(server: McpServer) {
  server.tool("company-name", "Generates a random company name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.company.name() }],
    }
  })

  server.tool(
    "company-catchPhrase",
    "Generates a random catch phrase that can be displayed to an end user.",
    {},
    async () => {
      return {
        content: [{ type: "text", text: faker.company.catchPhrase() }],
      }
    },
  )

  server.tool(
    "company-buzzPhrase",
    "Generates a random buzz phrase that can be used to demonstrate data being viewed by a manager.",
    {},
    async () => {
      return {
        content: [{ type: "text", text: faker.company.buzzPhrase() }],
      }
    },
  )

  server.tool(
    "company-catchPhraseAdjective",
    "Returns a random catch phrase adjective that can be displayed to an end user.",
    {},
    async () => {
      return {
        content: [{ type: "text", text: faker.company.catchPhraseAdjective() }],
      }
    },
  )

  server.tool(
    "company-catchPhraseDescriptor",
    "Returns a random catch phrase descriptor that can be displayed to an end user.",
    {},
    async () => {
      return {
        content: [{ type: "text", text: faker.company.catchPhraseDescriptor() }],
      }
    },
  )

  server.tool(
    "company-catchPhraseNoun",
    "Returns a random catch phrase noun that can be displayed to an end user.",
    {},
    async () => {
      return {
        content: [{ type: "text", text: faker.company.catchPhraseNoun() }],
      }
    },
  )

  server.tool(
    "company-buzzAdjective",
    "Returns a random buzz adjective that can be used to demonstrate data being viewed by a manager.",
    {},
    async () => {
      return {
        content: [{ type: "text", text: faker.company.buzzAdjective() }],
      }
    },
  )

  server.tool(
    "company-buzzVerb",
    "Returns a random buzz verb that can be used to demonstrate data being viewed by a manager.",
    {},
    async () => {
      return {
        content: [{ type: "text", text: faker.company.buzzVerb() }],
      }
    },
  )

  server.tool(
    "company-buzzNoun",
    "Returns a random buzz noun that can be used to demonstrate data being viewed by a manager.",
    {},
    async () => {
      return {
        content: [{ type: "text", text: faker.company.buzzNoun() }],
      }
    },
  )

  return server
}

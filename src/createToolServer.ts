import { z } from "zod"
import { ToolServer } from "./ToolServer.js"
import { faker, PersonModule } from "@faker-js/faker"
import { fieldSchemaOf } from "./fieldSchemaOf.js"

export function createToolServer() {
  const toolServer = new ToolServer()

  toolServer.register({
    name: "generate_person",
    description: "Generate fake person data (names, job titles, etc.)",
    input: z.object({
      field: fieldSchemaOf(faker.person, {
        description:
          "The fields to generate (e.g., 'firstName', 'lastName', 'fullName', 'gender', 'jobTitle'). If empty, all fields will be generated.",
      }),
    }),
    handler: async (input) => {
      return {
        content: [
          {
            type: "text",
            text: faker.person[input.field](),
          },
        ],
      }
    },
  })

  return toolServer.createServer(
    {
      name: "faker-server",
      version: "0.1.0",
    },
    {
      capabilities: {
        tools: {},
      },
    },
  )
}

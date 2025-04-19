import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function person(server: McpServer) {
  // Define the SexType enum for use in the schema
  const SexTypeEnum = z.enum(["female", "male"])

  server.tool(
    "person-firstName",
    "Returns a random first name.",
    {
      sex: SexTypeEnum.optional().describe("The optional sex to use. Can be either 'female' or 'male'."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.person.firstName(args.sex) }],
      }
    },
  )

  server.tool(
    "person-lastName",
    "Returns a random last name.",
    {
      sex: SexTypeEnum.optional().describe("The optional sex to use. Can be either 'female' or 'male'."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.person.lastName(args.sex) }],
      }
    },
  )

  server.tool(
    "person-middleName",
    "Returns a random middle name.",
    {
      sex: SexTypeEnum.optional().describe("The optional sex to use. Can be either 'female' or 'male'."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.person.middleName(args.sex) }],
      }
    },
  )

  server.tool(
    "person-fullName",
    "Generates a random full name.",
    {
      firstName: z
        .string()
        .optional()
        .describe("The optional first name to use. If not specified a random one will be chosen."),
      lastName: z
        .string()
        .optional()
        .describe("The optional last name to use. If not specified a random one will be chosen."),
      sex: SexTypeEnum.optional().describe("The optional sex to use. Can be either 'female' or 'male'."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.person.fullName(args) }],
      }
    },
  )

  server.tool("person-gender", "Returns a random gender.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.person.gender() }],
    }
  })

  server.tool("person-sex", "Returns a random sex.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.person.sex() }],
    }
  })

  server.tool(
    "person-sexType",
    "Returns a random sex type. The `SexType` is intended to be used in parameters and conditions.",
    {},
    async () => {
      return {
        content: [{ type: "text", text: faker.person.sexType() }],
      }
    },
  )

  server.tool("person-bio", "Returns a random short biography.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.person.bio() }],
    }
  })

  server.tool(
    "person-prefix",
    "Returns a random person prefix.",
    {
      sex: SexTypeEnum.optional().describe("The optional sex to use. Can be either 'female' or 'male'."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.person.prefix(args.sex) }],
      }
    },
  )

  server.tool("person-suffix", "Returns a random person suffix.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.person.suffix() }],
    }
  })

  server.tool("person-jobTitle", "Generates a random job title.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.person.jobTitle() }],
    }
  })

  server.tool("person-jobDescriptor", "Generates a random job descriptor.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.person.jobDescriptor() }],
    }
  })

  server.tool("person-jobArea", "Generates a random job area.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.person.jobArea() }],
    }
  })

  server.tool("person-jobType", "Generates a random job type.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.person.jobType() }],
    }
  })

  server.tool("person-zodiacSign", "Returns a random zodiac sign.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.person.zodiacSign() }],
    }
  })

  return server
}

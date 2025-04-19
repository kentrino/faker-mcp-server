import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function system(server: McpServer) {
  // Define the common count schema that can be either a number or a min/max object
  const countSchema = <T extends z.ZodTypeAny>(schema: T) =>
    z.union([
      schema,
      z.object({
        min: z.number().describe("Minimum number."),
        max: z.number().describe("Maximum number."),
      }),
    ])

  server.tool(
    "system-fileName",
    "Returns a random file name with extension.",
    {
      extensionCount: countSchema(z.number())
        .optional()
        .describe("Define how many extensions the file name should have."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.system.fileName(args) }],
      }
    },
  )

  server.tool(
    "system-commonFileName",
    "Returns a random file name with a given extension or a commonly used extension.",
    {
      extension: z.string().optional().describe("The file extension to use."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.system.commonFileName(args.extension) }],
      }
    },
  )

  server.tool("system-mimeType", "Returns a mime-type.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.system.mimeType() }],
    }
  })

  server.tool("system-commonFileType", "Returns a commonly used file type.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.system.commonFileType() }],
    }
  })

  server.tool("system-commonFileExt", "Returns a commonly used file extension.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.system.commonFileExt() }],
    }
  })

  server.tool("system-fileType", "Returns a file type.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.system.fileType() }],
    }
  })

  server.tool(
    "system-fileExt",
    "Returns a file extension.",
    {
      mimeType: z.string().optional().describe("Valid mime-type"),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.system.fileExt(args.mimeType) }],
      }
    },
  )

  server.tool("system-directoryPath", "Returns a directory path.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.system.directoryPath() }],
    }
  })

  server.tool("system-filePath", "Returns a file path.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.system.filePath() }],
    }
  })

  server.tool("system-semver", "Returns a semantic version.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.system.semver() }],
    }
  })

  server.tool(
    "system-networkInterface",
    "Returns a random network interface.",
    {
      interfaceType: z
        .enum(["en", "wl", "ww"])
        .optional()
        .describe("The interface type. Can be one of 'en', 'wl', 'ww'."),
      interfaceSchema: z
        .enum(["index", "slot", "mac", "pci"])
        .optional()
        .describe("The interface schema. Can be one of 'index', 'slot', 'mac', 'pci'."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.system.networkInterface(args) }],
      }
    },
  )

  server.tool(
    "system-cron",
    "Returns a random cron expression.",
    {
      includeYear: z.boolean().optional().describe("Whether to include a year in the generated expression."),
      includeNonStandard: z
        .boolean()
        .optional()
        .describe("Whether to include a '@yearly', '@monthly', '@daily', etc text labels in the generated expression."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.system.cron(args) }],
      }
    },
  )

  return server
}

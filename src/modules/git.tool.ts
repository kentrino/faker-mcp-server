import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function git(server: McpServer) {
  const refDateSchema = z.string().optional().describe("The date to use as reference point for the commit.")

  server.tool("git-branch", "Generates a random branch name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.git.branch() }],
    }
  })

  server.tool(
    "git-commitEntry",
    "Generates a random commit entry as printed by `git log`.",
    {
      merge: z.boolean().optional().describe("Set to `true` to generate a merge message line."),
      eol: z
        .enum(["LF", "CRLF"])
        .optional()
        .describe("Choose the end of line character to use. 'LF' = '\\n', 'CRLF' = '\\r\\n'"),
      refDate: refDateSchema,
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.git.commitEntry(args) }],
      }
    },
  )

  server.tool("git-commitMessage", "Generates a random commit message.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.git.commitMessage() }],
    }
  })

  server.tool(
    "git-commitDate",
    "Generates a date string for a git commit using the same format as `git log`.",
    {
      refDate: refDateSchema,
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.git.commitDate(args) }],
      }
    },
  )

  server.tool(
    "git-commitSha",
    "Generates a random commit sha.",
    {
      length: z.number().optional().describe("The length of the commit sha."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.git.commitSha(args) }],
      }
    },
  )

  return server
}

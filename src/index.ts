#!/usr/bin/env node

import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import type { Readable, Writable } from "node:stream"
import chalk, { Chalk } from "chalk"
import { createFakerServer } from "./createFakerServer.js"
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { animal } from "./modules/animal.tool.js"
import { airline } from "./modules/airline.tool.js"

/**
 * Start the server using stdio transport.
 * This allows the server to communicate via standard input/output streams.
 */
export async function main(stdin: Readable, stdout: Writable) {
  const transport = new StdioServerTransport()
  // const server = await createFakerServer()
  const server = new McpServer(
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
  animal(server)
  airline(server)
  await server.connect(transport)
  console.error(chalk.gray("Faker MCP server running on stdio"))
}

main(process.stdin, process.stdout).catch((error) => {
  console.error("Server error:", error)
  process.exit(1)
})

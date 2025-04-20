#!/usr/bin/env node

import type { Readable, Writable } from "node:stream"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import chalk from "chalk"
import { createFakerServer } from "./createFakerServer.js"

/**
 * Start the server using stdio transport.
 * This allows the server to communicate via standard input/output streams.
 */
export async function main(stdin: Readable, stdout: Writable) {
  const transport = new StdioServerTransport(stdin, stdout)
  const server = createFakerServer(
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
  await server.connect(transport)
  console.error(chalk.gray("Faker MCP server running on stdio"))
}

main(process.stdin, process.stdout).catch((error) => {
  console.error("Server error:", error)
  process.exit(1)
})

#!/usr/bin/env node

import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import { server } from "./server.js"
import type { Readable, Writable } from "node:stream"
import chalk, { Chalk } from "chalk"

/**
 * Start the server using stdio transport.
 * This allows the server to communicate via standard input/output streams.
 */
export async function main(stdin: Readable, stdout: Writable) {
  const transport = new StdioServerTransport(stdin, stdout)
  await server.connect(transport)
  console.error(chalk.gray("Faker MCP server running on stdio"))
}

main(process.stdin, process.stdout).catch((error) => {
  console.error("Server error:", error)
  process.exit(1)
})

import { ToolServer } from "./ToolServer.js"

export function createToolServer() {
  const toolServer = new ToolServer()

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

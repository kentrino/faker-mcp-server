import { zodToJsonSchema } from "zod-to-json-schema"
import type { z } from "zod"
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
  type CallToolResult,
  type ListToolsRequest,
  type ListToolsResult,
} from "@modelcontextprotocol/sdk/types.js"
import { Server } from "@modelcontextprotocol/sdk/server/index.js"

type UnknownZodShape = Record<string, z.ZodTypeAny>
type UnknownZodObject = z.ZodObject<UnknownZodShape>

type Handler<T extends z.ZodObject<UnknownZodShape>> = (input: z.infer<T>) => Promise<CallToolResult>

type ConstructorParameters<T> = T extends new (...args: infer P) => infer R ? P : never

export class ToolServer {
  handlers: Record<string, Handler<UnknownZodObject>> = {}
  inputs: Record<string, ListToolsResult["tools"][number]> = {}

  register<T extends z.ZodTypeAny>(opts: {
    name: string
    description: string
    input: T
    handler: (input: z.infer<T>) => Promise<CallToolResult>
  }) {
    this.handlers[opts.name] = opts.handler
    this.inputs[opts.name] = {
      name: opts.name,
      description: opts.description,
      inputSchema: zodToJsonSchema(opts.input) as unknown as ListToolsResult["tools"][number]["inputSchema"],
    }
  }

  async createServer(...parameters: ConstructorParameters<typeof Server>) {
    const server = new Server(...parameters)

    server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: Object.values(this.inputs),
      }
    })

    server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const handler = this.handlers[request.params.name]
      if (!handler) {
        throw new McpError(ErrorCode.MethodNotFound, `Unknown tool: ${request.params.name}`)
      }
      return handler(request.params.arguments as never)
    })

    return server
  }
}

import { z } from "zod"
import type { ToolServer } from "./ToolServer.js"
import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js"

type UnknownZodShape = Record<string, z.ZodTypeAny>

export class ModuleBuilder {
  inputs: Record<string, z.ZodTypeAny> = {}
  handlers: Record<string, (args: never) => string> = {}

  method<T extends z.ZodTypeAny>(name: string, description: string, args: T, handler: (args: z.infer<T>) => string) {
    if (this.inputs[name]) {
      throw new Error(`Method ${name} already exists`)
    }
    this.inputs[name] = z.object({
      method: z.literal(name).describe(description),
      args: args.optional(),
    })
    this.handlers[name] = handler
    return this
  }

  build({
    name,
    description,
  }: {
    name: string
    description: string
  }): Parameters<ToolServer["register"]>[0] {
    return {
      name,
      description,
      input: z.union(Object.values(this.inputs) as never as [z.ZodTypeAny, z.ZodTypeAny, ...z.ZodTypeAny[]]),
      handler: async (input): Promise<CallToolResult> => {
        const handler = this.handlers[input.method]
        if (!handler) {
          throw new Error(`Handler for ${input.method} not found`)
        }
        return {
          content: [
            {
              type: "text",
              text: handler(input.args as never),
            },
          ],
        }
      },
    }
  }
}

import { z } from "zod"
import type { ServerBuilder } from "./ServerBuilder.js"
import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js"

export class ModuleBuilder {
  handlers: Record<string, (args: never) => string> = {}
  args: Record<string, z.ZodTypeAny> = {}
  methods: { name: string; description: string }[] = []

  method<T extends z.ZodTypeAny>(name: string, description: string, args: T, handler: (args: z.infer<T>) => string) {
    if (this.handlers[name]) {
      throw new Error(`Method ${name} already exists`)
    }
    this.args[name] = args
    this.handlers[name] = handler
    this.methods.push({ name, description })
    return this
  }

  build({
    name,
    description,
  }: {
    name: string
    description: string
  }): Parameters<ServerBuilder["register"]>[0] {
    return {
      name,
      description,
      input: z.object({
        method: z
          .enum(this.methods.map((m) => m.name) as never)
          .describe(
            this.methods.reduce((acc, m) => `${acc}\n  - ${m.name}: ${m.description}`, "Available methods are below: "),
          ),
        args: z.union(Object.values(this.args) as never),
      }),
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

import { PassThrough } from "node:stream"
import { type JSONRPCResponse, JSONRPCResponseSchema } from "@modelcontextprotocol/sdk/types.js"
import { z } from "zod"
import type { main as mainFn } from "../../src/index"
import { Output } from "./Output"

export const Response = z.object({
  jsonrpc: z.string(),
  id: z.string(),
  result: z.object({
    content: z.array(
      z.object({
        type: z.string(),
        text: z.string(),
      }),
    ),
  }),
})
export type Response = z.infer<typeof Response>

export async function run(main: typeof mainFn, method: string, name: string, args: unknown): Promise<Response> {
  const stdin = new PassThrough()
  const stdout = new Output()

  await main(stdin, stdout)

  const req = {
    jsonrpc: "2.0",
    id: "1",
    method,
    params: {
      name,
      arguments: args,
    },
  }
  stdin.write(JSON.stringify(req) + "\n")

  // Wait for a complete response
  const responseData = await stdout.waitForCompleteJson()

  // Parse the response only after we have a complete JSON
  const response = JSON.parse(responseData.toString())
  try {
    return Response.parse(response)
  } catch (e) {
    if (e instanceof z.ZodError) {
      console.error("response could not be parsed", e.format(), {
        original: response,
      })
    }
    throw e
  }
}

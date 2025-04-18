import { describe, it, expect, vi } from "vitest"
import { Duplex, PassThrough, Readable, Writable } from "node:stream"
import { main } from "../../src/index"
import { Output } from "../util/Output"

describe("main", () => {
  it("should handle requests", async () => {
    const stdin = new PassThrough()
    const stdout = new Output()

    await main(stdin, stdout)

    const req = {
      jsonrpc: "2.0",
      id: "1",
      method: "tools/call",
      params: {
        name: "generate_lorem",
        arguments: {},
      },
    }
    stdin.write(JSON.stringify(req) + "\n")

    // Wait for a complete response
    const responseData = await stdout.waitForCompleteJson()

    // Parse the response only after we have a complete JSON
    const response = JSON.parse(responseData.toString())

    // Validate the response
    expect(response.jsonrpc).toBe("2.0")
    expect(response.id).toBe("1")
    expect(response.result).toBeDefined()
    expect(response.result.content).toBeDefined()
    expect(response.result.content[0].type).toBe("text")
    expect(typeof response.result.content[0].text).toBe("string")
  })
})

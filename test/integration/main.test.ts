import { describe, it, expect, vi } from "vitest"
import { Duplex, PassThrough, Readable, Writable } from "node:stream"
import { main } from "../../src/index"

class Output extends Writable {
  data: Buffer = Buffer.alloc(0)

  constructor() {
    super({
      write: (chunk: Buffer, encoding: BufferEncoding, callback: (error?: Error | null) => void): void => {
        console.log("chunk ------", chunk)
        this.data = Buffer.concat([this.data, chunk])
        callback()
      },
    })
  }
}

describe("Main Integration Test", () => {
  it("should start the server and handle requests", async () => {
    const stdin = new PassThrough()
    const stdout = new Output()
    const serverPromise = main(stdin, stdout)

    const req = {
      jsonrpc: "2.0",
      id: "1",
      method: "tools/call",
      params: {
        name: "generate_lorem",
        arguments: {},
      },
    }

    // Write the request to stdin
    stdin.write(JSON.stringify(req) + "\n")

    // Wait for the response to be processed
    await new Promise((resolve) => {
      const checkInterval = setInterval(() => {
        if (stdout.data.length > 0) {
          clearInterval(checkInterval)
          resolve(true)
        }
      }, 50)

      // Timeout after 2 seconds
      setTimeout(() => {
        clearInterval(checkInterval)
        resolve(false)
      }, 2000)
    })
    await serverPromise

    const response = JSON.parse(stdout.data.toString())

    expect(response.jsonrpc).toBe("2.0")
    expect(response.id).toBe("1")
    expect(response.result).toBeDefined()
    expect(response.result.content).toBeDefined()
    expect(response.result.content[0].type).toBe("text")
    expect(typeof response.result.content[0].text).toBe("string")
  })
})

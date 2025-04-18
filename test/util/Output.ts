import { Writable } from "node:stream"
import { isJsonValid } from "./isJsonValid"

export class Output extends Writable {
  data: Buffer = Buffer.alloc(0)
  private completeResponsePromise: Promise<Buffer> | null = null
  private resolveResponse: ((data: Buffer) => void) | null = null

  constructor() {
    super({
      write: (chunk: Buffer, encoding: BufferEncoding, callback: (error?: Error | null) => void): void => {
        this.data = Buffer.concat([this.data, chunk])

        if (this.resolveResponse && isJsonValid(this.data.toString())) {
          this.resolveResponse(this.data)
          this.resolveResponse = null
        }

        callback()
      },
    })
  }

  /**
   * Waits for a complete JSON response to be received
   * @param timeout Timeout in milliseconds
   * @returns Promise that resolves with the complete response data
   */
  waitForCompleteJson(timeout = 2000): Promise<Buffer> {
    // If we already have a complete response, return it immediately
    if (isJsonValid(this.data.toString())) {
      return Promise.resolve(this.data)
    }

    // If we're already waiting for a response, return the existing promise
    if (this.completeResponsePromise) {
      return this.completeResponsePromise
    }

    // Create a new promise that will resolve when we get a complete response
    this.completeResponsePromise = new Promise<Buffer>((resolve, reject) => {
      this.resolveResponse = resolve

      // Set a timeout to reject the promise if we don't get a complete response
      setTimeout(() => {
        if (this.resolveResponse) {
          this.resolveResponse = null
          reject(new Error(`Timeout waiting for complete response after ${timeout}ms`))
        }
      }, timeout)
    })

    return this.completeResponsePromise
  }
}

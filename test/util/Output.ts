import { Writable } from "node:stream"
import { isJsonValid } from "./isJsonValid"

export class Output extends Writable {
  data: Buffer = Buffer.alloc(0)
  private completedPromise: Promise<Buffer> | null = null
  private resolve: ((data: Buffer) => void) | null = null

  constructor() {
    super({
      write: (chunk: Buffer, encoding: BufferEncoding, callback: (error?: Error | null) => void): void => {
        this.data = Buffer.concat([this.data, chunk])
        if (this.resolve && isJsonValid(this.data.toString())) {
          this.resolve(this.data)
          this.resolve = null
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
  waitForCompleteJson(timeout = 200): Promise<Buffer> {
    // If we already have a complete response, return it immediately
    if (isJsonValid(this.data.toString())) {
      return Promise.resolve(this.data)
    }

    // If we're already waiting for a response, return the existing promise
    if (this.completedPromise) {
      return this.completedPromise
    }

    // Create a new promise that will resolve when we get a complete response
    this.completedPromise = new Promise<Buffer>((resolve, reject) => {
      this.resolve = resolve

      // Set a timeout to reject the promise if we don't get a complete response
      setTimeout(() => {
        if (this.resolve) {
          this.resolve = null
          reject(new Error(`Timeout waiting for complete response after ${timeout}ms`))
        }
      }, timeout)
    })

    return this.completedPromise
  }
}

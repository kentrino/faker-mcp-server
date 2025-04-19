import { describe, it, expect } from "vitest"
import { z } from "zod"
import { zodToJsonSchema } from "zod-to-json-schema"

describe("zod-to-json-schema", () => {
  it("should convert zod to json schema", () => {
    const schema = zodToJsonSchema(
      z.object({
        name: z.string(),
      }),
    )

    expect(schema).toEqual({
      $schema: "http://json-schema.org/draft-07/schema#",
      additionalProperties: false,
      properties: {
        name: {
          type: "string",
        },
      },
      required: ["name"],
      type: "object",
    })
  })
})

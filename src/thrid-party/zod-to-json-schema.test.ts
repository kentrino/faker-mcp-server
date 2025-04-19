import { describe, it, expect } from "vitest"
import { z } from "zod"
import { zodToJsonSchema } from "zod-to-json-schema"

describe("zod-to-json-schema", () => {
  it("should convert zod to json schema", () => {
    const schema = zodToJsonSchema(
      z.object({
        name: z.string(),
        foo: z.enum(["bar"]),
        uni: z.union([
          z.object({
            a: z.string(),
          }),
          z.object({
            b: z.number(),
          }),
        ]),
      }),
    )

    expect(schema).toEqual({
      $schema: "http://json-schema.org/draft-07/schema#",
      additionalProperties: false,
      properties: {
        name: {
          type: "string",
        },
        foo: {
          enum: ["bar"],
          type: "string",
        },
        uni: {
          anyOf: [
            {
              additionalProperties: false,
              properties: {
                a: {
                  type: "string",
                },
              },
              required: ["a"],
              type: "object",
            },
            {
              additionalProperties: false,
              properties: {
                b: {
                  type: "number",
                },
              },
              required: ["b"],
              type: "object",
            },
          ],
        },
      },
      required: ["name", "foo", "uni"],
      type: "object",
    })
  })
})

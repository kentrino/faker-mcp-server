import { faker } from "@faker-js/faker"
import type { ServerBuilder } from "../ToolServer.js"
import { z } from "zod"
import { ModuleBuilder } from "../ModuleBuilder.js"

export function color(): Parameters<ServerBuilder["register"]>[0] {
  // Define common schemas
  const casingSchema = z
    .enum(["lower", "upper", "mixed"])
    .optional()
    .describe("Letter type case of the generated hex color.")
  const includeAlphaSchema = z.boolean().optional().describe("Adds an alpha value to the color.")
  const cssSpaceSchema = z
    .enum(["sRGB", "display-p3", "rec2020", "a98-rgb", "prophoto-rgb"])
    .optional()
    .describe("Color space to generate the color for.")

  return new ModuleBuilder()
    .method("human", "Returns a random human-readable color name.", z.object({}), () => {
      return faker.color.human()
    })
    .method(
      "space",
      "Returns a random color space name from the worldwide accepted color spaces.",
      z.object({}),
      () => {
        return faker.color.space()
      },
    )
    .method("cssSupportedFunction", "Returns a random css supported color function name.", z.object({}), () => {
      return faker.color.cssSupportedFunction()
    })
    .method("cssSupportedSpace", "Returns a random css supported color space name.", z.object({}), () => {
      return faker.color.cssSupportedSpace()
    })
    .method(
      "rgb",
      "Returns an RGB color.",
      z.object({
        prefix: z
          .string()
          .optional()
          .describe("Prefix of the generated hex color. Only applied when 'hex' format is used."),
        casing: casingSchema,
        format: z
          .union([z.literal("hex"), z.enum(["css", "binary"]), z.literal("decimal")])
          .optional()
          .describe("Format of generated RGB color."),
        includeAlpha: includeAlphaSchema,
      }),
      (input) => {
        const result = faker.color.rgb(input)
        return Array.isArray(result) ? JSON.stringify(result) : result
      },
    )
    .method(
      "cmyk",
      "Returns a CMYK color.",
      z.object({
        format: z
          .union([z.enum(["css", "binary"]), z.literal("decimal")])
          .optional()
          .describe("Format of generated CMYK color."),
      }),
      (input) => {
        const result = faker.color.cmyk(input)
        return Array.isArray(result) ? JSON.stringify(result) : result
      },
    )
    .method(
      "hsl",
      "Returns an HSL color.",
      z.object({
        format: z
          .union([z.enum(["css", "binary"]), z.literal("decimal")])
          .optional()
          .describe("Format of generated HSL color."),
        includeAlpha: includeAlphaSchema,
      }),
      (input) => {
        const result = faker.color.hsl(input)
        return Array.isArray(result) ? JSON.stringify(result) : result
      },
    )
    .method(
      "hwb",
      "Returns an HWB color.",
      z.object({
        format: z
          .union([z.enum(["css", "binary"]), z.literal("decimal")])
          .optional()
          .describe("Format of generated HWB color."),
      }),
      (input) => {
        const result = faker.color.hwb(input)
        return Array.isArray(result) ? JSON.stringify(result) : result
      },
    )
    .method(
      "lab",
      "Returns a LAB (CIELAB) color.",
      z.object({
        format: z
          .union([z.enum(["css", "binary"]), z.literal("decimal")])
          .optional()
          .describe("Format of generated LAB color."),
      }),
      (input) => {
        const result = faker.color.lab(input)
        return Array.isArray(result) ? JSON.stringify(result) : result
      },
    )
    .method(
      "lch",
      "Returns an LCH color.",
      z.object({
        format: z
          .union([z.enum(["css", "binary"]), z.literal("decimal")])
          .optional()
          .describe("Format of generated LCH color."),
      }),
      (input) => {
        const result = faker.color.lch(input)
        return Array.isArray(result) ? JSON.stringify(result) : result
      },
    )
    .method(
      "colorByCSSColorSpace",
      "Returns a random color based on CSS color space specified.",
      z.object({
        format: z
          .union([z.enum(["css", "binary"]), z.literal("decimal")])
          .optional()
          .describe("Format of generated color."),
        space: cssSpaceSchema,
      }),
      (input) => {
        const result = faker.color.colorByCSSColorSpace(input)
        return Array.isArray(result) ? JSON.stringify(result) : result
      },
    )
    .build({
      name: "generate_color",
      description: "Generate fake color data",
    })
}

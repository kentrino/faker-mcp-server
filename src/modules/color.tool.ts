import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function color(server: McpServer) {
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

  server.tool("color-human", "Returns a random human-readable color name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.color.human() }],
    }
  })

  server.tool(
    "color-space",
    "Returns a random color space name from the worldwide accepted color spaces.",
    {},
    async () => {
      return {
        content: [{ type: "text", text: faker.color.space() }],
      }
    },
  )

  server.tool("color-cssSupportedFunction", "Returns a random css supported color function name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.color.cssSupportedFunction() }],
    }
  })

  server.tool("color-cssSupportedSpace", "Returns a random css supported color space name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.color.cssSupportedSpace() }],
    }
  })

  server.tool(
    "color-rgb",
    "Returns an RGB color.",
    {
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
    },
    async (args) => {
      const result = faker.color.rgb(args)
      return {
        content: [{ type: "text", text: Array.isArray(result) ? JSON.stringify(result) : result }],
      }
    },
  )

  server.tool(
    "color-cmyk",
    "Returns a CMYK color.",
    {
      format: z
        .union([z.enum(["css", "binary"]), z.literal("decimal")])
        .optional()
        .describe("Format of generated CMYK color."),
    },
    async (args) => {
      const result = faker.color.cmyk(args)
      return {
        content: [{ type: "text", text: Array.isArray(result) ? JSON.stringify(result) : result }],
      }
    },
  )

  server.tool(
    "color-hsl",
    "Returns an HSL color.",
    {
      format: z
        .union([z.enum(["css", "binary"]), z.literal("decimal")])
        .optional()
        .describe("Format of generated HSL color."),
      includeAlpha: includeAlphaSchema,
    },
    async (args) => {
      const result = faker.color.hsl(args)
      return {
        content: [{ type: "text", text: Array.isArray(result) ? JSON.stringify(result) : result }],
      }
    },
  )

  server.tool(
    "color-hwb",
    "Returns an HWB color.",
    {
      format: z
        .union([z.enum(["css", "binary"]), z.literal("decimal")])
        .optional()
        .describe("Format of generated HWB color."),
    },
    async (args) => {
      const result = faker.color.hwb(args)
      return {
        content: [{ type: "text", text: Array.isArray(result) ? JSON.stringify(result) : result }],
      }
    },
  )

  server.tool(
    "color-lab",
    "Returns a LAB (CIELAB) color.",
    {
      format: z
        .union([z.enum(["css", "binary"]), z.literal("decimal")])
        .optional()
        .describe("Format of generated LAB color."),
    },
    async (args) => {
      const result = faker.color.lab(args)
      return {
        content: [{ type: "text", text: Array.isArray(result) ? JSON.stringify(result) : result }],
      }
    },
  )

  server.tool(
    "color-lch",
    "Returns an LCH color.",
    {
      format: z
        .union([z.enum(["css", "binary"]), z.literal("decimal")])
        .optional()
        .describe("Format of generated LCH color."),
    },
    async (args) => {
      const result = faker.color.lch(args)
      return {
        content: [{ type: "text", text: Array.isArray(result) ? JSON.stringify(result) : result }],
      }
    },
  )

  server.tool(
    "color-colorByCSSColorSpace",
    "Returns a random color based on CSS color space specified.",
    {
      format: z
        .union([z.enum(["css", "binary"]), z.literal("decimal")])
        .optional()
        .describe("Format of generated color."),
      space: cssSpaceSchema,
    },
    async (args) => {
      const result = faker.color.colorByCSSColorSpace(args)
      return {
        content: [{ type: "text", text: Array.isArray(result) ? JSON.stringify(result) : result }],
      }
    },
  )

  return server
}

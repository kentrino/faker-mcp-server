import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function image(server: McpServer) {
  // Define the SexType enum for use in the personPortrait method
  const SexTypeEnum = z.enum(["female", "male"])

  server.tool("image-avatar", "Generates a random avatar image url.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.image.avatar() }],
    }
  })

  server.tool("image-avatarGitHub", "Generates a random avatar from GitHub.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.image.avatarGitHub() }],
    }
  })

  server.tool(
    "image-personPortrait",
    "Generates a random square portrait (avatar) of a person. These are static images of fictional people created by an AI, Stable Diffusion 3.",
    {
      sex: SexTypeEnum.optional().describe("The sex of the person for the avatar. Can be 'female' or 'male'."),
      size: z
        .union([z.literal(512), z.literal(256), z.literal(128), z.literal(64), z.literal(32)])
        .optional()
        .describe("The size of the image. Can be 512, 256, 128, 64 or 32."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.image.personPortrait(args) }],
      }
    },
  )

  server.tool(
    "image-avatarLegacy",
    "Generates a random avatar from `https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar`. (Deprecated: The links are no longer working. Use `avatar()` instead.)",
    {},
    async () => {
      return {
        content: [{ type: "text", text: faker.image.avatarLegacy() }],
      }
    },
  )

  server.tool(
    "image-url",
    "Generates a random image url.",
    {
      width: z.number().optional().describe("The width of the image."),
      height: z.number().optional().describe("The height of the image."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.image.url(args) }],
      }
    },
  )

  server.tool(
    "image-urlLoremFlickr",
    "Generates a random image url provided via https://loremflickr.com.",
    {
      width: z.number().optional().describe("The width of the image."),
      height: z.number().optional().describe("The height of the image."),
      category: z.string().optional().describe("Category to use for the image."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.image.urlLoremFlickr(args) }],
      }
    },
  )

  server.tool(
    "image-urlPicsumPhotos",
    "Generates a random image url provided via https://picsum.photos.",
    {
      width: z.number().optional().describe("The width of the image."),
      height: z.number().optional().describe("The height of the image."),
      grayscale: z.boolean().optional().describe("Whether the image should be grayscale."),
      blur: z
        .union([
          z.literal(0),
          z.literal(1),
          z.literal(2),
          z.literal(3),
          z.literal(4),
          z.literal(5),
          z.literal(6),
          z.literal(7),
          z.literal(8),
          z.literal(9),
          z.literal(10),
        ])
        .optional()
        .describe("Whether the image should be blurred. 0 disables the blur."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.image.urlPicsumPhotos(args) }],
      }
    },
  )

  server.tool(
    "image-urlPlaceholder",
    "Generates a random image url provided via https://via.placeholder.com/. (Deprecated: The service has bad uptime. Use `faker.image.url()` or `faker.image.dataUri()` instead.)",
    {
      width: z.number().optional().describe("The width of the image."),
      height: z.number().optional().describe("The height of the image."),
      backgroundColor: z.string().optional().describe("The background color of the image."),
      textColor: z.string().optional().describe("The text color of the image."),
      format: z.enum(["gif", "jpeg", "jpg", "png", "webp"]).optional().describe("The format of the image."),
      text: z.string().optional().describe("The text to display on the image."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.image.urlPlaceholder(args) }],
      }
    },
  )

  server.tool(
    "image-dataUri",
    "Generates a random data uri containing an URL-encoded SVG image or a Base64-encoded SVG image.",
    {
      width: z.number().optional().describe("The width of the image."),
      height: z.number().optional().describe("The height of the image."),
      color: z.string().optional().describe("The color of the image. Must be a color supported by svg."),
      type: z.enum(["svg-uri", "svg-base64"]).optional().describe("The type of the image to return."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.image.dataUri(args) }],
      }
    },
  )

  return server
}

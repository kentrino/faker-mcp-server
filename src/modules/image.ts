import { faker } from "@faker-js/faker"
import type { ToolServer } from "../ToolServer.js"
import { z } from "zod"
import { ModuleBuilder } from "../ModuleBuilder.js"

export function image(): Parameters<ToolServer["register"]>[0] {
  // Define the SexType enum for use in the personPortrait method
  const SexTypeEnum = z.enum(["female", "male"])

  return new ModuleBuilder()
    .method("avatar", "Generates a random avatar image url.", z.object({}), () => {
      return faker.image.avatar()
    })
    .method("avatarGitHub", "Generates a random avatar from GitHub.", z.object({}), () => {
      return faker.image.avatarGitHub()
    })
    .method(
      "personPortrait",
      "Generates a random square portrait (avatar) of a person. These are static images of fictional people created by an AI, Stable Diffusion 3.",
      z.object({
        sex: SexTypeEnum.optional().describe("The sex of the person for the avatar. Can be 'female' or 'male'."),
        size: z
          .union([z.literal(512), z.literal(256), z.literal(128), z.literal(64), z.literal(32)])
          .optional()
          .describe("The size of the image. Can be 512, 256, 128, 64 or 32."),
      }),
      (input) => {
        return faker.image.personPortrait(input)
      },
    )
    .method(
      "avatarLegacy",
      "Generates a random avatar from `https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar`. (Deprecated: The links are no longer working. Use `avatar()` instead.)",
      z.object({}),
      () => {
        return faker.image.avatarLegacy()
      },
    )
    .method(
      "url",
      "Generates a random image url.",
      z.object({
        width: z.number().optional().describe("The width of the image."),
        height: z.number().optional().describe("The height of the image."),
      }),
      (input) => {
        return faker.image.url(input)
      },
    )
    .method(
      "urlLoremFlickr",
      "Generates a random image url provided via https://loremflickr.com.",
      z.object({
        width: z.number().optional().describe("The width of the image."),
        height: z.number().optional().describe("The height of the image."),
        category: z.string().optional().describe("Category to use for the image."),
      }),
      (input) => {
        return faker.image.urlLoremFlickr(input)
      },
    )
    .method(
      "urlPicsumPhotos",
      "Generates a random image url provided via https://picsum.photos.",
      z.object({
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
      }),
      (input) => {
        return faker.image.urlPicsumPhotos(input)
      },
    )
    .method(
      "urlPlaceholder",
      "Generates a random image url provided via https://via.placeholder.com/. (Deprecated: The service has bad uptime. Use `faker.image.url()` or `faker.image.dataUri()` instead.)",
      z.object({
        width: z.number().optional().describe("The width of the image."),
        height: z.number().optional().describe("The height of the image."),
        backgroundColor: z.string().optional().describe("The background color of the image."),
        textColor: z.string().optional().describe("The text color of the image."),
        format: z.enum(["gif", "jpeg", "jpg", "png", "webp"]).optional().describe("The format of the image."),
        text: z.string().optional().describe("The text to display on the image."),
      }),
      (input) => {
        return faker.image.urlPlaceholder(input)
      },
    )
    .method(
      "dataUri",
      "Generates a random data uri containing an URL-encoded SVG image or a Base64-encoded SVG image.",
      z.object({
        width: z.number().optional().describe("The width of the image."),
        height: z.number().optional().describe("The height of the image."),
        color: z.string().optional().describe("The color of the image. Must be a color supported by svg."),
        type: z.enum(["svg-uri", "svg-base64"]).optional().describe("The type of the image to return."),
      }),
      (input) => {
        return faker.image.dataUri(input)
      },
    )
    .build({
      name: "generate_image",
      description: "Generate image URLs and data URIs",
    })
}

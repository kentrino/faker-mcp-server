import { faker } from "@faker-js/faker"
import type { ToolServer } from "../ToolServer.js"
import { z } from "zod"
import { ModuleBuilder } from "../ModuleBuilder.js"

export function system(): Parameters<ToolServer["register"]>[0] {
  // Define the common count schema that can be either a number or a min/max object
  const countSchema = <T extends z.ZodTypeAny>(schema: T) =>
    z.union([
      schema,
      z.object({
        min: z.number().describe("Minimum number."),
        max: z.number().describe("Maximum number."),
      }),
    ])

  return new ModuleBuilder()
    .method(
      "fileName",
      "Returns a random file name with extension.",
      z.object({
        extensionCount: countSchema(z.number())
          .optional()
          .describe("Define how many extensions the file name should have."),
      }),
      (input) => {
        return faker.system.fileName(input)
      },
    )
    .method(
      "commonFileName",
      "Returns a random file name with a given extension or a commonly used extension.",
      z.object({
        extension: z.string().optional().describe("The file extension to use."),
      }),
      (input) => {
        return faker.system.commonFileName(input.extension)
      },
    )
    .method("mimeType", "Returns a mime-type.", z.object({}), () => {
      return faker.system.mimeType()
    })
    .method("commonFileType", "Returns a commonly used file type.", z.object({}), () => {
      return faker.system.commonFileType()
    })
    .method("commonFileExt", "Returns a commonly used file extension.", z.object({}), () => {
      return faker.system.commonFileExt()
    })
    .method("fileType", "Returns a file type.", z.object({}), () => {
      return faker.system.fileType()
    })
    .method(
      "fileExt",
      "Returns a file extension.",
      z.object({
        mimeType: z.string().optional().describe("Valid mime-type"),
      }),
      (input) => {
        return faker.system.fileExt(input.mimeType)
      },
    )
    .method("directoryPath", "Returns a directory path.", z.object({}), () => {
      return faker.system.directoryPath()
    })
    .method("filePath", "Returns a file path.", z.object({}), () => {
      return faker.system.filePath()
    })
    .method("semver", "Returns a semantic version.", z.object({}), () => {
      return faker.system.semver()
    })
    .method(
      "networkInterface",
      "Returns a random network interface.",
      z.object({
        interfaceType: z
          .enum(["en", "wl", "ww"])
          .optional()
          .describe("The interface type. Can be one of 'en', 'wl', 'ww'."),
        interfaceSchema: z
          .enum(["index", "slot", "mac", "pci"])
          .optional()
          .describe("The interface schema. Can be one of 'index', 'slot', 'mac', 'pci'."),
      }),
      (input) => {
        return faker.system.networkInterface(input)
      },
    )
    .method(
      "cron",
      "Returns a random cron expression.",
      z.object({
        includeYear: z.boolean().optional().describe("Whether to include a year in the generated expression."),
        includeNonStandard: z
          .boolean()
          .optional()
          .describe(
            "Whether to include a '@yearly', '@monthly', '@daily', etc text labels in the generated expression.",
          ),
      }),
      (input) => {
        return faker.system.cron(input)
      },
    )
    .build({
      name: "generate_system",
      description: "Generate fake data for many computer systems properties",
    })
}

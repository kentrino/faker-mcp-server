import { faker } from "@faker-js/faker"
import type { ServerBuilder } from "../ToolServer.js"
import { z } from "zod"
import { ModuleBuilder } from "../ModuleBuilder.js"

export function airline(): Parameters<ServerBuilder["register"]>[0] {
  return new ModuleBuilder()
    .method("airport", "Generates a random airport.", z.object({}), () => {
      const airport = faker.airline.airport()
      return JSON.stringify(airport)
    })
    .method("airline", "Generates a random airline.", z.object({}), () => {
      const airline = faker.airline.airline()
      return JSON.stringify(airline)
    })
    .method("airplane", "Generates a random airplane.", z.object({}), () => {
      const airplane = faker.airline.airplane()
      return JSON.stringify(airplane)
    })
    .method(
      "recordLocator",
      "Generates a random record locator (booking reference number).",
      z.object({
        allowNumerics: z.boolean().optional().describe("Whether to allow numeric characters."),
        allowVisuallySimilarCharacters: z
          .boolean()
          .optional()
          .describe("Whether to allow visually similar characters such as '1' and 'I'."),
      }),
      (input) => {
        return faker.airline.recordLocator(input)
      },
    )
    .method(
      "seat",
      "Generates a random seat.",
      z.object({
        aircraftType: z
          .enum(["narrowbody", "regional", "widebody"])
          .optional()
          .describe("The aircraft type. Can be one of 'narrowbody', 'regional', 'widebody'."),
      }),
      (input) => {
        return faker.airline.seat(input)
      },
    )
    .method("aircraftType", "Returns a random aircraft type.", z.object({}), () => {
      return faker.airline.aircraftType()
    })
    .method(
      "flightNumber",
      "Returns a random flight number.",
      z.object({
        length: z
          .union([
            z.number(),
            z.object({
              min: z.number().describe("The minimum number of digits to generate."),
              max: z.number().describe("The maximum number of digits to generate."),
            }),
          ])
          .optional()
          .describe("The number or range of digits to generate."),
        addLeadingZeros: z
          .boolean()
          .optional()
          .describe("Whether to pad the flight number up to 4 digits with leading zeros."),
      }),
      (input) => {
        return faker.airline.flightNumber(input)
      },
    )
    .build({
      name: "generate_airline",
      description: "Generate fake airline data",
    })
}

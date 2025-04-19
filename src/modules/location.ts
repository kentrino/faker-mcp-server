import { faker } from "@faker-js/faker"
import type { ServerBuilder } from "../ServerBuilder.js"
import { z } from "zod"
import { ModuleBuilder } from "../ModuleBuilder.js"

export function location(): Parameters<ServerBuilder["register"]>[0] {
  return new ModuleBuilder()
    .method("buildingNumber", "Generates a random building number.", z.object({}), () => {
      return faker.location.buildingNumber()
    })
    .method(
      "cardinalDirection",
      "Returns a random cardinal direction (north, east, south, west).",
      z.object({
        abbreviated: z.boolean().optional().describe("If true this will return abbreviated directions (N, E, etc)."),
      }),
      (input) => {
        return faker.location.cardinalDirection(input)
      },
    )
    .method("city", "Generates a random localized city name.", z.object({}), () => {
      return faker.location.city()
    })
    .method("continent", "Returns a random continent name.", z.object({}), () => {
      return faker.location.continent()
    })
    .method("country", "Returns a random country name.", z.object({}), () => {
      return faker.location.country()
    })
    .method(
      "countryCode",
      "Returns a random ISO_3166-1 country code.",
      z.object({
        variant: z
          .enum(["alpha-2", "alpha-3", "numeric"])
          .optional()
          .describe("The code to return. Can be either 'alpha-2', 'alpha-3', or 'numeric'."),
      }),
      (input) => {
        return faker.location.countryCode(input)
      },
    )
    .method(
      "county",
      "Returns a random localized county, or other equivalent second-level administrative entity for the locale's country such as a district or department.",
      z.object({}),
      () => {
        return faker.location.county()
      },
    )
    .method(
      "direction",
      "Returns a random direction (cardinal and ordinal; northwest, east, etc).",
      z.object({
        abbreviated: z.boolean().optional().describe("If true this will return abbreviated directions (NW, E, etc)."),
      }),
      (input) => {
        return faker.location.direction(input)
      },
    )
    .method("language", "Returns a random spoken language.", z.object({}), () => {
      // The language method returns an object with alpha2, alpha3, and name properties
      // We'll convert it to a string representation
      const language = faker.location.language()
      return JSON.stringify(language)
    })
    .method(
      "latitude",
      "Generates a random latitude.",
      z.object({
        max: z.number().optional().describe("The upper bound for the latitude to generate."),
        min: z.number().optional().describe("The lower bound for the latitude to generate."),
        precision: z.number().optional().describe("The number of decimal points of precision for the latitude."),
      }),
      (input) => {
        return faker.location.latitude(input).toString()
      },
    )
    .method(
      "longitude",
      "Generates a random longitude.",
      z.object({
        max: z.number().optional().describe("The upper bound for the longitude to generate."),
        min: z.number().optional().describe("The lower bound for the longitude to generate."),
        precision: z.number().optional().describe("The number of decimal points of precision for the longitude."),
      }),
      (input) => {
        return faker.location.longitude(input).toString()
      },
    )
    .method(
      "nearbyGPSCoordinate",
      "Generates a random GPS coordinate within the specified radius from the given coordinate.",
      z.object({
        origin: z
          .tuple([z.number(), z.number()])
          .optional()
          .describe("The original coordinate to get a new coordinate close to."),
        radius: z.number().optional().describe("The maximum distance from the given coordinate to the new coordinate."),
        isMetric: z.boolean().optional().describe("If true assume the radius to be in kilometers. If false for miles."),
      }),
      (input) => {
        const coordinates = faker.location.nearbyGPSCoordinate(input)
        return JSON.stringify(coordinates)
      },
    )
    .method(
      "ordinalDirection",
      "Returns a random ordinal direction (northwest, southeast, etc).",
      z.object({
        abbreviated: z.boolean().optional().describe("If true this will return abbreviated directions (NW, SE, etc)."),
      }),
      (input) => {
        return faker.location.ordinalDirection(input)
      },
    )
    .method(
      "secondaryAddress",
      "Generates a random localized secondary address. This refers to a specific location at a given address such as an apartment or room number.",
      z.object({}),
      () => {
        return faker.location.secondaryAddress()
      },
    )
    .method(
      "state",
      "Returns a random state, or other equivalent first-level administrative entity for the locale's country such as a province, region, or prefecture.",
      z.object({
        abbreviated: z.boolean().optional().describe("If true this will return abbreviated state names."),
      }),
      (input) => {
        return faker.location.state(input)
      },
    )
    .method("street", "Returns a random street name.", z.object({}), () => {
      return faker.location.street()
    })
    .method(
      "streetAddress",
      "Generates a random localized street address.",
      z.object({
        useFullAddress: z
          .boolean()
          .optional()
          .describe("When true this will generate a full address. Otherwise it will just generate a street address."),
      }),
      (input) => {
        return faker.location.streetAddress(input)
      },
    )
    .method("timeZone", "Returns a random time zone.", z.object({}), () => {
      return faker.location.timeZone()
    })
    .method(
      "zipCode",
      "Generates a random localized zip code.",
      z.object({
        state: z.string().optional().describe("The state to generate a zip code for."),
        format: z.string().optional().describe("The format the zip code should use."),
      }),
      (input) => {
        return faker.location.zipCode(input)
      },
    )
    .build({
      name: "generate_location",
      description: "Generate addresses and locations",
    })
}

import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function location(server: McpServer) {
  server.tool("location-buildingNumber", "Generates a random building number.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.location.buildingNumber() }],
    }
  })

  server.tool(
    "location-cardinalDirection",
    "Returns a random cardinal direction (north, east, south, west).",
    {
      abbreviated: z.boolean().optional().describe("If true this will return abbreviated directions (N, E, etc)."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.location.cardinalDirection(args) }],
      }
    },
  )

  server.tool("location-city", "Generates a random localized city name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.location.city() }],
    }
  })

  server.tool("location-continent", "Returns a random continent name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.location.continent() }],
    }
  })

  server.tool("location-country", "Returns a random country name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.location.country() }],
    }
  })

  server.tool(
    "location-countryCode",
    "Returns a random ISO_3166-1 country code.",
    {
      variant: z
        .enum(["alpha-2", "alpha-3", "numeric"])
        .optional()
        .describe("The code to return. Can be either 'alpha-2', 'alpha-3', or 'numeric'."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.location.countryCode(args) }],
      }
    },
  )

  server.tool(
    "location-county",
    "Returns a random localized county, or other equivalent second-level administrative entity for the locale's country such as a district or department.",
    {},
    async () => {
      return {
        content: [{ type: "text", text: faker.location.county() }],
      }
    },
  )

  server.tool(
    "location-direction",
    "Returns a random direction (cardinal and ordinal; northwest, east, etc).",
    {
      abbreviated: z.boolean().optional().describe("If true this will return abbreviated directions (NW, E, etc)."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.location.direction(args) }],
      }
    },
  )

  server.tool("location-language", "Returns a random spoken language.", {}, async () => {
    // The language method returns an object with alpha2, alpha3, and name properties
    // We'll convert it to a string representation
    const language = faker.location.language()
    return {
      content: [{ type: "text", text: JSON.stringify(language) }],
    }
  })

  server.tool(
    "location-latitude",
    "Generates a random latitude.",
    {
      max: z.number().optional().describe("The upper bound for the latitude to generate."),
      min: z.number().optional().describe("The lower bound for the latitude to generate."),
      precision: z.number().optional().describe("The number of decimal points of precision for the latitude."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.location.latitude(args).toString() }],
      }
    },
  )

  server.tool(
    "location-longitude",
    "Generates a random longitude.",
    {
      max: z.number().optional().describe("The upper bound for the longitude to generate."),
      min: z.number().optional().describe("The lower bound for the longitude to generate."),
      precision: z.number().optional().describe("The number of decimal points of precision for the longitude."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.location.longitude(args).toString() }],
      }
    },
  )

  server.tool(
    "location-nearbyGPSCoordinate",
    "Generates a random GPS coordinate within the specified radius from the given coordinate.",
    {
      origin: z
        .tuple([z.number(), z.number()])
        .optional()
        .describe("The original coordinate to get a new coordinate close to."),
      radius: z.number().optional().describe("The maximum distance from the given coordinate to the new coordinate."),
      isMetric: z.boolean().optional().describe("If true assume the radius to be in kilometers. If false for miles."),
    },
    async (args) => {
      const coordinates = faker.location.nearbyGPSCoordinate(args)
      return {
        content: [{ type: "text", text: JSON.stringify(coordinates) }],
      }
    },
  )

  server.tool(
    "location-ordinalDirection",
    "Returns a random ordinal direction (northwest, southeast, etc).",
    {
      abbreviated: z.boolean().optional().describe("If true this will return abbreviated directions (NW, SE, etc)."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.location.ordinalDirection(args) }],
      }
    },
  )

  server.tool(
    "location-secondaryAddress",
    "Generates a random localized secondary address. This refers to a specific location at a given address such as an apartment or room number.",
    {},
    async () => {
      return {
        content: [{ type: "text", text: faker.location.secondaryAddress() }],
      }
    },
  )

  server.tool(
    "location-state",
    "Returns a random state, or other equivalent first-level administrative entity for the locale's country such as a province, region, or prefecture.",
    {
      abbreviated: z.boolean().optional().describe("If true this will return abbreviated state names."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.location.state(args) }],
      }
    },
  )

  server.tool("location-street", "Returns a random street name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.location.street() }],
    }
  })

  server.tool(
    "location-streetAddress",
    "Generates a random localized street address.",
    {
      useFullAddress: z
        .boolean()
        .optional()
        .describe("When true this will generate a full address. Otherwise it will just generate a street address."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.location.streetAddress(args) }],
      }
    },
  )

  server.tool("location-timeZone", "Returns a random time zone.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.location.timeZone() }],
    }
  })

  server.tool(
    "location-zipCode",
    "Generates a random localized zip code.",
    {
      state: z.string().optional().describe("The state to generate a zip code for."),
      format: z.string().optional().describe("The format the zip code should use."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.location.zipCode(args) }],
      }
    },
  )

  return server
}

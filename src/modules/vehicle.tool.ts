import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function vehicle(server: McpServer) {
  server.tool("vehicle-vehicle", "Returns a random vehicle.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.vehicle.vehicle() }],
    }
  })

  server.tool("vehicle-manufacturer", "Returns a manufacturer name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.vehicle.manufacturer() }],
    }
  })

  server.tool("vehicle-model", "Returns a vehicle model.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.vehicle.model() }],
    }
  })

  server.tool("vehicle-type", "Returns a vehicle type.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.vehicle.type() }],
    }
  })

  server.tool("vehicle-fuel", "Returns a fuel type.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.vehicle.fuel() }],
    }
  })

  server.tool("vehicle-vin", "Returns a vehicle identification number (VIN).", {}, async () => {
    return {
      content: [{ type: "text", text: faker.vehicle.vin() }],
    }
  })

  server.tool("vehicle-color", "Returns a vehicle color.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.vehicle.color() }],
    }
  })

  server.tool(
    "vehicle-vrm",
    "Returns a vehicle registration number (Vehicle Registration Mark - VRM).",
    {},
    async () => {
      return {
        content: [{ type: "text", text: faker.vehicle.vrm() }],
      }
    },
  )

  server.tool("vehicle-bicycle", "Returns a type of bicycle.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.vehicle.bicycle() }],
    }
  })

  return server
}

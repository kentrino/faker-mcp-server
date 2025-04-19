import { faker } from "@faker-js/faker"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { main } from "../../src/index"
import { run } from "../util/run"

describe("main", () => {
  beforeEach(() => {
    faker.seed(1)
    vi.useFakeTimers({
      now: new Date("2025-02-17T15:09:18.790Z"),
    })
  })

  it("should handle requests", async () => {
    const response = await run(main, "tools/call", "generate_lorem", {
      method: "lines",
      args: {},
    })

    expect(response.jsonrpc).toBe("2.0")
    expect(response.id).toBe("1")
    expect(response.result).toBeDefined()
    expect(response.result.content).toBeDefined()
    expect(response.result.content[0].type).toBe("text")
    expect(response.result.content[0].text).toMatch(/^A cognatus arca aliquam audentia.+/)
  })

  it("should generate food", async () => {
    faker.seed(1)
    const response = await run(main, "tools/call", "generate_food", {
      method: "dish",
      args: {},
    })
    expect(response.result.content[0].type).toBe("text")
    expect(response.result.content[0].text).toEqual("Emu With Blackberry Sauce")
  })

  it("should generate date", async () => {
    const response = await run(main, "tools/call", "generate_date", { method: ["anytime"] })
    expect(response.result.content[0].text).toEqual("2024-12-19T01:22:50.671Z")
  })

  it("should generate airline.flightNumber", async () => {
    const response = await run(main, "tools/call", "generate_airline", {
      method: ["flightNumber"],
      args: { length: { min: 1, max: 4 } },
    })
    expect(response.result.content[0].text).toEqual("70")
  })
})

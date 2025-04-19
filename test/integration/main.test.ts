import { faker } from "@faker-js/faker"
import { beforeEach, describe, expect, it } from "vitest"
import { main } from "../../src/index"
import { run } from "../util/run"

describe("main", () => {
  beforeEach(() => {
    faker.seed(1)
  })

  it("should handle requests", async () => {
    const response = await run(main, "tools/call", "generate_lorem", {})

    expect(response.jsonrpc).toBe("2.0")
    expect(response.id).toBe("1")
    expect(response.result).toBeDefined()
    expect(response.result.content).toBeDefined()
    expect(response.result.content[0].type).toBe("text")
    expect(response.result.content[0].text).toMatch(/^Suppellex a cognatus arca aliquam audentia\..+/)
  })

  it("should generate food", async () => {
    faker.seed(1)
    const response = await run(main, "tools/call", "generate_food", {})
    expect(response.result.content[0].type).toBe("text")
    expect(JSON.parse(response.result.content[0].text).dish).toEqual("Emu With Blackberry Sauce")
  })
})

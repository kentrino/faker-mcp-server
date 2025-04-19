/**
 * This is an MCP server that provides tools for generating fake data using Faker.js.
 * It implements tools for all Faker.js modules to generate various types of fake data.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { airline } from "./modules/airline.tool.js"
import { animal } from "./modules/animal.tool.js"
import { book } from "./modules/book.tool.js"
import { color } from "./modules/color.tool.js"
import { commerce } from "./modules/commerce.tool.js"
import { company } from "./modules/company.tool.js"
import { database } from "./modules/database.tool.js"
import { date } from "./modules/date.tool.js"
import { finance } from "./modules/finance.tool.js"
import { food } from "./modules/food.tool.js"
import { git } from "./modules/git.tool.js"
import { hacker } from "./modules/hacker.tool.js"
import { image } from "./modules/image.tool.js"
import { internet } from "./modules/internet.tool.js"
import { location } from "./modules/location.tool.js"
import { lorem } from "./modules/lorem.tool.js"
import { music } from "./modules/music.tool.js"
import { person } from "./modules/person.tool.js"
import { phone } from "./modules/phone.tool.js"
import { science } from "./modules/science.tool.js"
import { system } from "./modules/system.tool.js"
import { vehicle } from "./modules/vehicle.tool.js"
import { word } from "./modules/word.tool.js"

export function createFakerServer() {
  const server = new McpServer(
    {
      name: "faker-server",
      version: "0.1.0",
    },
    {
      capabilities: {
        tools: {},
      },
    },
  )
  airline(server)
  animal(server)
  book(server)
  color(server)
  commerce(server)
  company(server)
  database(server)
  date(server)
  finance(server)
  food(server)
  git(server)
  hacker(server)
  image(server)
  internet(server)
  location(server)
  lorem(server)
  music(server)
  person(server)
  phone(server)
  science(server)
  system(server)
  vehicle(server)
  word(server)

  return server
}

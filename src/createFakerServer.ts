/**
 * This is an MCP server that provides tools for generating fake data using Faker.js.
 * It implements tools for all Faker.js modules to generate various types of fake data.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { airline } from "./modules/airline.js"
import { animal } from "./modules/animal.js"
import { book } from "./modules/book.js"
import { color } from "./modules/color.js"
import { commerce } from "./modules/commerce.js"
import { company } from "./modules/company.js"
import { database } from "./modules/database.js"
import { date } from "./modules/date.js"
import { finance } from "./modules/finance.js"
import { food } from "./modules/food.js"
import { git } from "./modules/git.js"
import { hacker } from "./modules/hacker.js"
import { image } from "./modules/image.js"
import { internet } from "./modules/internet.js"
import { location } from "./modules/location.js"
import { lorem } from "./modules/lorem.js"
import { music } from "./modules/music.js"
import { person } from "./modules/person.js"
import { phone } from "./modules/phone.js"
import { science } from "./modules/science.js"
import { system } from "./modules/system.js"
import { vehicle } from "./modules/vehicle.js"
import { word } from "./modules/word.js"

export function createFakerServer(...args: ConstructorParameters<typeof McpServer>) {
  const server = new McpServer(...args)
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

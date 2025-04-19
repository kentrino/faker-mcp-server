/**
 * This is an MCP server that provides tools for generating fake data using Faker.js.
 * It implements tools for all Faker.js modules to generate various types of fake data.
 */

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
import { ServerBuilder } from "./ServerBuilder.js"

export function createFakerServer() {
  const toolServer = new ServerBuilder()

  toolServer.register(airline())
  toolServer.register(animal())
  toolServer.register(book())
  toolServer.register(color())
  toolServer.register(commerce())
  toolServer.register(company())
  toolServer.register(database())
  toolServer.register(date())
  toolServer.register(finance())
  toolServer.register(food())
  toolServer.register(git())
  toolServer.register(hacker())
  toolServer.register(image())
  toolServer.register(internet())
  toolServer.register(location())
  toolServer.register(lorem())
  toolServer.register(music())
  toolServer.register(person())
  toolServer.register(phone())
  toolServer.register(science())
  toolServer.register(system())
  toolServer.register(vehicle())
  toolServer.register(word())

  return toolServer.createServer(
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
}

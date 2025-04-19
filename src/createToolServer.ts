/**
 * This is an MCP server that provides tools for generating fake data using Faker.js.
 * It implements tools for all Faker.js modules to generate various types of fake data.
 */

import { z } from "zod"
import { ToolServer } from "./ToolServer.js"
import { faker } from "@faker-js/faker"
import { fieldSchemaOf } from "./fieldSchemaOf.js"

// Define common input schemas
const localeSchema = z.string().optional().describe("The locale to use (e.g., 'en', 'ja', 'fr'). Defaults to 'en'.")
const fieldsSchema = z
  .array(z.string())
  .optional()
  .describe("The fields to generate. If empty, all fields will be generated.")

// Define specific input schemas
const loremTypeSchema = z
  .string()
  .optional()
  .describe(
    "The type of text to generate (word, words, sentence, sentences, paragraph, paragraphs, text). Defaults to 'paragraph'.",
  )
const loremCountSchema = z
  .number()
  .optional()
  .describe(
    "The number of items to generate (e.g., number of words, sentences, paragraphs). Defaults to a random number appropriate for the type.",
  )

const dateTypeSchema = z
  .string()
  .optional()
  .describe("The type of date to generate (past, future, recent, soon, between). Defaults to 'recent'.")
const dateRefSchema = z.string().optional().describe("The reference date as ISO string. Defaults to now.")

const numberMinSchema = z
  .number()
  .optional()
  .describe("The minimum value for number generation (for applicable methods)")
const numberMaxSchema = z
  .number()
  .optional()
  .describe("The maximum value for number generation (for applicable methods)")

const stringLengthSchema = z
  .number()
  .optional()
  .describe("The length of the string to generate (for applicable methods)")

export function createToolServer() {
  const toolServer = new ToolServer()

  // Person module
  toolServer.register({
    name: "generate_person",
    description: "Generate fake person data (names, job titles, etc.)",
    input: z.object({
      locale: localeSchema,
      fields: fieldsSchema.describe(
        "The fields to generate (e.g., 'firstName', 'lastName', 'fullName', 'gender', 'jobTitle'). If empty, all fields will be generated.",
      ),
    }),
    handler: async (input) => {
      const fields = input.fields || []
      const result: Record<string, string> = {}

      // If no specific fields are requested, generate all common person fields
      if (fields.length === 0) {
        result.firstName = faker.person.firstName()
        result.lastName = faker.person.lastName()
        result.fullName = faker.person.fullName()
        result.gender = faker.person.gender()
        result.jobTitle = faker.person.jobTitle()
        result.jobArea = faker.person.jobArea()
        result.bio = faker.person.bio()
      } else {
        // Generate only the requested fields
        for (const field of fields) {
          try {
            const generator = faker.person[field as keyof typeof faker.person]
            if (typeof generator === "function") {
              result[field] = generator()
            } else {
              result[field] = `Unknown field: ${field}`
            }
          } catch (error) {
            result[field] = `Error generating field: ${field}`
          }
        }
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      }
    },
  })

  // Internet module
  toolServer.register({
    name: "generate_internet",
    description: "Generate fake internet data (emails, usernames, URLs, etc.)",
    input: z.object({
      fields: fieldsSchema.describe(
        "The fields to generate (e.g., 'email', 'userName', 'domainName', 'url', 'ip'). If empty, all fields will be generated.",
      ),
    }),
    handler: async (input) => {
      const fields = input.fields || []
      const result: Record<string, string | number> = {}

      // If no specific fields are requested, generate all common internet fields
      if (fields.length === 0) {
        result.email = faker.internet.email()
        result.userName = faker.internet.userName()
        result.domainName = faker.internet.domainName()
        result.url = faker.internet.url()
        result.ip = faker.internet.ip()
        result.password = faker.internet.password()
        result.userAgent = faker.internet.userAgent()
      } else {
        // Generate only the requested fields
        for (const field of fields) {
          try {
            const generator = faker.internet[field as keyof typeof faker.internet]
            if (typeof generator === "function") {
              result[field] = generator()
            } else {
              result[field] = `Unknown field: ${field}`
            }
          } catch (error) {
            result[field] = `Error generating field: ${field}`
          }
        }
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      }
    },
  })

  // Date module
  toolServer.register({
    name: "generate_date",
    description: "Generate fake dates",
    input: z.object({
      type: dateTypeSchema,
      refDate: dateRefSchema,
    }),
    handler: async (input) => {
      const type = input.type || "recent"
      const refDate = input.refDate

      let result: Date

      const referenceDate = refDate ? new Date(refDate) : undefined

      switch (type) {
        case "past":
          result = faker.date.past({ refDate: referenceDate })
          break
        case "future":
          result = faker.date.future({ refDate: referenceDate })
          break
        case "recent":
          result = faker.date.recent({ refDate: referenceDate })
          break
        case "soon":
          result = faker.date.soon({ refDate: referenceDate })
          break
        default:
          result = faker.date.recent()
      }

      return {
        content: [
          {
            type: "text",
            text: result.toISOString(),
          },
        ],
      }
    },
  })

  // Commerce module
  toolServer.register({
    name: "generate_commerce",
    description: "Generate fake commerce data (products, prices, etc.)",
    input: z.object({
      fields: fieldsSchema.describe(
        "The fields to generate (e.g., 'product', 'price', 'department', 'productDescription'). If empty, all fields will be generated.",
      ),
    }),
    handler: async (input) => {
      const fields = input.fields || []
      const result: Record<string, string> = {}

      // If no specific fields are requested, generate all common commerce fields
      if (fields.length === 0) {
        result.product = faker.commerce.product()
        result.productName = faker.commerce.productName()
        result.price = faker.commerce.price()
        result.department = faker.commerce.department()
        result.productDescription = faker.commerce.productDescription()
      } else {
        // Generate only the requested fields
        for (const field of fields) {
          try {
            const generator = faker.commerce[field as keyof typeof faker.commerce]
            if (typeof generator === "function") {
              result[field] = generator()
            } else {
              result[field] = `Unknown field: ${field}`
            }
          } catch (error) {
            result[field] = `Error generating field: ${field}`
          }
        }
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      }
    },
  })

  // Airline module
  toolServer.register({
    name: "generate_airline",
    description: "Generate fake airline data",
    input: z.object({
      fields: fieldsSchema.describe(
        "The fields to generate (e.g., 'airline', 'airplane', 'airport', 'flightNumber', 'recordLocator'). If empty, all fields will be generated.",
      ),
    }),
    handler: async (input) => {
      const fields = input.fields || []
      const result: Record<string, string> = {}

      if (fields.length === 0) {
        result.airline = faker.airline.airline().name
        result.airplane = faker.airline.airplane().name
        result.airport = faker.airline.airport().name
        result.flightNumber = faker.airline.flightNumber()
        result.recordLocator = faker.airline.recordLocator()
      } else {
        for (const field of fields) {
          try {
            const generator = faker.airline[field as keyof typeof faker.airline]
            if (typeof generator === "function") {
              if (field === "airline" || field === "airplane" || field === "airport") {
                const value = generator()
                result[field] =
                  typeof value === "object" && value !== null && "name" in value ? value.name : String(value)
              } else {
                result[field] = String(generator())
              }
            } else {
              result[field] = `Unknown field: ${field}`
            }
          } catch (error) {
            result[field] = `Error generating field: ${field}`
          }
        }
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      }
    },
  })

  // Animal module
  toolServer.register({
    name: "generate_animal",
    description: "Generate fake animal data",
    input: z.object({
      fields: fieldsSchema.describe(
        "The fields to generate (e.g., 'type', 'dog', 'cat', 'bird', 'insect', 'bear'). If empty, all fields will be generated.",
      ),
    }),
    handler: async (input) => {
      const fields = input.fields || []
      const result: Record<string, string> = {}

      if (fields.length === 0) {
        result.type = faker.animal.type()
        result.dog = faker.animal.dog()
        result.cat = faker.animal.cat()
        result.bird = faker.animal.bird()
        result.cow = faker.animal.cow()
        result.horse = faker.animal.horse()
        result.insect = faker.animal.insect()
      } else {
        for (const field of fields) {
          try {
            const generator = faker.animal[field as keyof typeof faker.animal]
            if (typeof generator === "function") {
              result[field] = generator()
            } else {
              result[field] = `Unknown field: ${field}`
            }
          } catch (error) {
            result[field] = `Error generating field: ${field}`
          }
        }
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      }
    },
  })

  // Color module
  toolServer.register({
    name: "generate_color",
    description: "Generate fake color data",
    input: z.object({
      fields: fieldsSchema.describe(
        "The fields to generate (e.g., 'rgb', 'hex', 'hsl', 'cmyk', 'colorByCSSColorSpace'). If empty, all fields will be generated.",
      ),
    }),
    handler: async (input) => {
      const fields = input.fields || []
      const result: Record<string, string | number | number[]> = {}

      if (fields.length === 0) {
        result.rgb = faker.color.rgb()
        result.hex = faker.color.rgb({ format: "hex" })
        result.hsl = faker.color.human() // Use human color as a fallback
        result.cmyk = faker.color.human() // Use human color as a fallback
        result.colorName = faker.color.human()
      } else {
        for (const field of fields) {
          try {
            if (field === "hex") {
              result[field] = faker.color.rgb({ format: "hex" })
            } else {
              const generator = faker.color[field as keyof typeof faker.color]
              if (typeof generator === "function") {
                result[field] = generator()
              } else {
                result[field] = `Unknown field: ${field}`
              }
            }
          } catch (error) {
            result[field] = `Error generating field: ${field}`
          }
        }
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      }
    },
  })

  // Database module
  toolServer.register({
    name: "generate_database",
    description: "Generate fake database data",
    input: z.object({
      fields: fieldsSchema.describe(
        "The fields to generate (e.g., 'column', 'type', 'collation', 'engine', 'mongodbObjectId'). If empty, all fields will be generated.",
      ),
    }),
    handler: async (input) => {
      const fields = input.fields || []
      const result: Record<string, string> = {}

      if (fields.length === 0) {
        result.column = faker.database.column()
        result.type = faker.database.type()
        result.collation = faker.database.collation()
        result.engine = faker.database.engine()
        result.mongodbObjectId = faker.database.mongodbObjectId()
      } else {
        for (const field of fields) {
          try {
            const generator = faker.database[field as keyof typeof faker.database]
            if (typeof generator === "function") {
              result[field] = generator()
            } else {
              result[field] = `Unknown field: ${field}`
            }
          } catch (error) {
            result[field] = `Error generating field: ${field}`
          }
        }
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      }
    },
  })

  // Finance module
  toolServer.register({
    name: "generate_finance",
    description: "Generate fake finance data",
    input: z.object({
      fields: fieldsSchema.describe(
        "The fields to generate (e.g., 'accountNumber', 'accountName', 'amount', 'creditCardNumber', 'bitcoinAddress'). If empty, all fields will be generated.",
      ),
    }),
    handler: async (input) => {
      const fields = input.fields || []
      const result: Record<string, string | object> = {}

      if (fields.length === 0) {
        result.accountNumber = faker.finance.accountNumber()
        result.accountName = faker.finance.accountName()
        result.amount = faker.finance.amount()
        result.creditCardNumber = faker.finance.creditCardNumber()
        result.bitcoinAddress = faker.finance.bitcoinAddress()
      } else {
        for (const field of fields) {
          try {
            const generator = faker.finance[field as keyof typeof faker.finance]
            if (typeof generator === "function") {
              result[field] = generator()
            } else {
              result[field] = `Unknown field: ${field}`
            }
          } catch (error) {
            result[field] = `Error generating field: ${field}`
          }
        }
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      }
    },
  })

  // Food module
  toolServer.register({
    name: "generate_food",
    description: "Generate fake food data",
    input: z.object({
      fields: fieldsSchema.describe(
        "The fields to generate (e.g., 'dish', 'ingredient', 'fruit', 'vegetable', 'spice'). If empty, all fields will be generated.",
      ),
    }),
    handler: async (input) => {
      const fields = input.fields || []
      const result: Record<string, string> = {}

      if (fields.length === 0) {
        result.dish = faker.food.dish()
        result.description = faker.food.description()
        result.ingredient = faker.food.ingredient()
        result.fruit = faker.food.fruit()
        result.vegetable = faker.food.vegetable()
        result.spice = faker.food.spice()
      } else {
        for (const field of fields) {
          try {
            const generator = faker.food[field as keyof typeof faker.food]
            if (typeof generator === "function") {
              result[field] = generator()
            } else {
              result[field] = `Unknown field: ${field}`
            }
          } catch (error) {
            result[field] = `Error generating field: ${field}`
          }
        }
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      }
    },
  })

  // Hacker module
  toolServer.register({
    name: "generate_hacker",
    description: "Generate fake hacker data",
    input: z.object({
      fields: fieldsSchema.describe(
        "The fields to generate (e.g., 'abbreviation', 'adjective', 'noun', 'verb', 'phrase'). If empty, all fields will be generated.",
      ),
    }),
    handler: async (input) => {
      const fields = input.fields || []
      const result: Record<string, string> = {}

      if (fields.length === 0) {
        result.abbreviation = faker.hacker.abbreviation()
        result.adjective = faker.hacker.adjective()
        result.noun = faker.hacker.noun()
        result.verb = faker.hacker.verb()
        result.phrase = faker.hacker.phrase()
      } else {
        for (const field of fields) {
          try {
            const generator = faker.hacker[field as keyof typeof faker.hacker]
            if (typeof generator === "function") {
              result[field] = generator()
            } else {
              result[field] = `Unknown field: ${field}`
            }
          } catch (error) {
            result[field] = `Error generating field: ${field}`
          }
        }
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      }
    },
  })

  // Location module
  toolServer.register({
    name: "generate_location",
    description: "Generate fake location data",
    input: z.object({
      fields: fieldsSchema.describe(
        "The fields to generate (e.g., 'street', 'city', 'country', 'zipCode', 'latitude', 'longitude'). If empty, all fields will be generated.",
      ),
    }),
    handler: async (input) => {
      const fields = input.fields || []
      const result: Record<string, string | number | number[] | object> = {}

      if (fields.length === 0) {
        result.street = faker.location.street()
        result.city = faker.location.city()
        result.country = faker.location.country()
        result.zipCode = faker.location.zipCode()
        result.latitude = faker.location.latitude()
        result.longitude = faker.location.longitude()
      } else {
        for (const field of fields) {
          try {
            const generator = faker.location[field as keyof typeof faker.location]
            if (typeof generator === "function") {
              result[field] = generator()
            } else {
              result[field] = `Unknown field: ${field}`
            }
          } catch (error) {
            result[field] = `Error generating field: ${field}`
          }
        }
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      }
    },
  })

  // Music module
  toolServer.register({
    name: "generate_music",
    description: "Generate fake music data",
    input: z.object({
      fields: fieldsSchema.describe(
        "The fields to generate (e.g., 'genre', 'songName', 'artist'). If empty, all fields will be generated.",
      ),
    }),
    handler: async (input) => {
      const fields = input.fields || []
      const result: Record<string, string> = {}

      if (fields.length === 0) {
        result.genre = faker.music.genre()
        result.songName = faker.music.songName()
      } else {
        for (const field of fields) {
          try {
            const generator = faker.music[field as keyof typeof faker.music]
            if (typeof generator === "function") {
              result[field] = generator()
            } else {
              result[field] = `Unknown field: ${field}`
            }
          } catch (error) {
            result[field] = `Error generating field: ${field}`
          }
        }
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      }
    },
  })

  // Number module
  toolServer.register({
    name: "generate_number",
    description: "Generate fake numbers",
    input: z.object({
      fields: fieldsSchema.describe(
        "The fields to generate (e.g., 'int', 'float', 'binary', 'octal', 'hex'). If empty, all fields will be generated.",
      ),
      min: numberMinSchema,
      max: numberMaxSchema,
    }),
    handler: async (input) => {
      const fields = input.fields || []
      const min = input.min
      const max = input.max
      const result: Record<string, string | number | bigint> = {}

      if (fields.length === 0) {
        result.int = faker.number.int({ min, max })
        result.float = faker.number.float({ min, max })
        result.binary = faker.number.binary()
        result.octal = faker.number.octal()
        result.hex = faker.number.hex()
      } else {
        for (const field of fields) {
          try {
            const generator = faker.number[field as keyof typeof faker.number]
            if (typeof generator === "function") {
              if (field === "int" || field === "float") {
                result[field] = generator({ min, max })
              } else {
                result[field] = generator()
              }
            } else {
              result[field] = `Unknown field: ${field}`
            }
          } catch (error) {
            result[field] = `Error generating field: ${field}`
          }
        }
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      }
    },
  })

  // Phone module
  toolServer.register({
    name: "generate_phone",
    description: "Generate fake phone data",
    input: z.object({
      fields: fieldsSchema.describe(
        "The fields to generate (e.g., 'number', 'imei'). If empty, all fields will be generated.",
      ),
    }),
    handler: async (input) => {
      const fields = input.fields || []
      const result: Record<string, string> = {}

      if (fields.length === 0) {
        result.number = faker.phone.number()
        result.imei = faker.phone.imei()
      } else {
        for (const field of fields) {
          try {
            const generator = faker.phone[field as keyof typeof faker.phone]
            if (typeof generator === "function") {
              result[field] = generator()
            } else {
              result[field] = `Unknown field: ${field}`
            }
          } catch (error) {
            result[field] = `Error generating field: ${field}`
          }
        }
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      }
    },
  })

  // String module
  toolServer.register({
    name: "generate_string",
    description: "Generate fake strings",
    input: z.object({
      fields: fieldsSchema.describe(
        "The fields to generate (e.g., 'alpha', 'alphanumeric', 'numeric', 'sample'). If empty, all fields will be generated.",
      ),
      length: stringLengthSchema,
    }),
    handler: async (input) => {
      const fields = input.fields || []
      const length = input.length
      const result: Record<string, string> = {}

      if (fields.length === 0) {
        // Default values for common string fields
        result.alpha = faker.string.alpha()
        result.alphanumeric = faker.string.alphanumeric()
        result.numeric = faker.string.numeric()
        result.uuid = faker.string.uuid()
        result.sample = faker.string.sample()
      } else {
        // Generate only the requested fields
        for (const field of fields) {
          try {
            switch (field) {
              case "alpha":
                result[field] = faker.string.alpha()
                break
              case "alphanumeric":
                result[field] = faker.string.alphanumeric()
                break
              case "numeric":
                result[field] = faker.string.numeric()
                break
              case "uuid":
                result[field] = faker.string.uuid()
                break
              case "sample":
                result[field] = faker.string.sample()
                break
              default:
                result[field] = `Unknown field: ${field}`
            }
          } catch (error) {
            result[field] = `Error generating field: ${field}`
          }
        }
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      }
    },
  })

  // System module
  toolServer.register({
    name: "generate_system",
    description: "Generate fake system data",
    input: z.object({
      fields: fieldsSchema.describe(
        "The fields to generate (e.g., 'fileName', 'commonFileName', 'mimeType', 'fileExt', 'directoryPath'). If empty, all fields will be generated.",
      ),
    }),
    handler: async (input) => {
      const fields = input.fields || []
      const result: Record<string, string> = {}

      if (fields.length === 0) {
        result.fileName = faker.system.fileName()
        result.commonFileName = faker.system.commonFileName()
        result.mimeType = faker.system.mimeType()
        result.fileExt = faker.system.fileExt()
        result.directoryPath = faker.system.directoryPath()
      } else {
        for (const field of fields) {
          try {
            const generator = faker.system[field as keyof typeof faker.system]
            if (typeof generator === "function") {
              result[field] = generator()
            } else {
              result[field] = `Unknown field: ${field}`
            }
          } catch (error) {
            result[field] = `Error generating field: ${field}`
          }
        }
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      }
    },
  })

  // Vehicle module
  toolServer.register({
    name: "generate_vehicle",
    description: "Generate fake vehicle data",
    input: z.object({
      fields: fieldsSchema.describe(
        "The fields to generate (e.g., 'vehicle', 'manufacturer', 'model', 'type', 'fuel', 'vin'). If empty, all fields will be generated.",
      ),
    }),
    handler: async (input) => {
      const fields = input.fields || []
      const result: Record<string, string> = {}

      if (fields.length === 0) {
        result.vehicle = faker.vehicle.vehicle()
        result.manufacturer = faker.vehicle.manufacturer()
        result.model = faker.vehicle.model()
        result.type = faker.vehicle.type()
        result.fuel = faker.vehicle.fuel()
        result.vin = faker.vehicle.vin()
      } else {
        for (const field of fields) {
          try {
            const generator = faker.vehicle[field as keyof typeof faker.vehicle]
            if (typeof generator === "function") {
              result[field] = generator()
            } else {
              result[field] = `Unknown field: ${field}`
            }
          } catch (error) {
            result[field] = `Error generating field: ${field}`
          }
        }
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      }
    },
  })

  // Word module
  toolServer.register({
    name: "generate_word",
    description: "Generate fake words",
    input: z.object({
      fields: fieldsSchema.describe(
        "The fields to generate (e.g., 'adjective', 'adverb', 'conjunction', 'interjection', 'noun', 'preposition', 'verb'). If empty, all fields will be generated.",
      ),
    }),
    handler: async (input) => {
      const fields = input.fields || []
      const result: Record<string, string> = {}

      if (fields.length === 0) {
        result.adjective = faker.word.adjective()
        result.adverb = faker.word.adverb()
        result.conjunction = faker.word.conjunction()
        result.interjection = faker.word.interjection()
        result.noun = faker.word.noun()
        result.preposition = faker.word.preposition()
        result.verb = faker.word.verb()
      } else {
        for (const field of fields) {
          try {
            const generator = faker.word[field as keyof typeof faker.word]
            if (typeof generator === "function") {
              result[field] = generator()
            } else {
              result[field] = `Unknown field: ${field}`
            }
          } catch (error) {
            result[field] = `Error generating field: ${field}`
          }
        }
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      }
    },
  })

  // Datatype module
  toolServer.register({
    name: "generate_datatype",
    description: "Generate fake data types",
    input: z.object({
      fields: fieldsSchema.describe(
        "The fields to generate (e.g., 'boolean', 'number', 'float', 'uuid', 'json'). If empty, all fields will be generated.",
      ),
    }),
    handler: async (input) => {
      const fields = input.fields || []
      const result: Record<string, unknown> = {}

      if (fields.length === 0) {
        result.boolean = faker.datatype.boolean()
        result.number = faker.number.int()
        result.float = faker.number.float()
        result.uuid = faker.string.uuid()
        result.hexadecimal = faker.string.hexadecimal()
      } else {
        for (const field of fields) {
          try {
            if (field === "number") {
              result[field] = faker.number.int()
            } else if (field === "float") {
              result[field] = faker.number.float()
            } else if (field === "uuid") {
              result[field] = faker.string.uuid()
            } else if (field === "hexadecimal") {
              result[field] = faker.string.hexadecimal()
            } else {
              const generator = faker.datatype[field as keyof typeof faker.datatype]
              if (typeof generator === "function") {
                result[field] = generator()
              } else {
                result[field] = `Unknown field: ${field}`
              }
            }
          } catch (error) {
            result[field] = `Error generating field: ${field}`
          }
        }
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      }
    },
  })

  // Lorem module
  toolServer.register({
    name: "generate_lorem",
    description: "Generate fake lorem ipsum text",
    input: z.object({
      type: loremTypeSchema,
      count: loremCountSchema,
    }),
    handler: async (input) => {
      const type = input.type || "paragraph"
      const count = input.count

      let result: string

      switch (type) {
        case "word":
          result = faker.lorem.word()
          break
        case "words":
          result = faker.lorem.words(count)
          break
        case "sentence":
          result = faker.lorem.sentence(count)
          break
        case "sentences":
          result = faker.lorem.sentences(count)
          break
        case "paragraph":
          result = faker.lorem.paragraph(count)
          break
        case "paragraphs":
          result = faker.lorem.paragraphs(count)
          break
        case "text":
          result = faker.lorem.text()
          break
        case "lines":
          result = faker.lorem.lines(count)
          break
        case "slug":
          result = faker.lorem.slug(count)
          break
        default:
          result = faker.lorem.paragraph()
      }

      return {
        content: [
          {
            type: "text",
            text: result,
          },
        ],
      }
    },
  })

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

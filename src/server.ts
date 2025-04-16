
/**
 * This is an MCP server that provides tools for generating fake data using Faker.js.
 * It implements tools for all Faker.js modules to generate various types of fake data.
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ErrorCode,
  McpError,
} from "@modelcontextprotocol/sdk/types.js";
import { faker } from '@faker-js/faker';

// Define interfaces for the tool arguments
interface BaseArgs {
  locale?: string;
  fields?: string[];
}

interface LoremArgs extends BaseArgs {
  type?: string;
  count?: number;
}

interface NumberArgs extends BaseArgs {
  min?: number;
  max?: number;
}

interface StringArgs extends BaseArgs {
  length?: number;
}

interface DateArgs extends BaseArgs {
  type?: string;
  refDate?: string;
}

/**
 * Create an MCP server with capabilities for tools to generate fake data
 */
export const server = new Server(
  {
    name: "faker-server",
    version: "0.1.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

/**
 * Handler that lists available tools.
 * Exposes tools for generating different types of fake data.
 */
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      // Person module
      {
        name: "generate_person",
        description: "Generate fake person data (names, job titles, etc.)",
        inputSchema: {
          type: "object",
          properties: {
            locale: {
              type: "string",
              description: "The locale to use (e.g., 'en', 'ja', 'fr'). Defaults to 'en'."
            },
            fields: {
              type: "array",
              description: "The fields to generate (e.g., 'firstName', 'lastName', 'fullName', 'gender', 'jobTitle'). If empty, all fields will be generated.",
              items: {
                type: "string"
              }
            }
          }
        }
      },
      
      // Lorem module
      {
        name: "generate_lorem",
        description: "Generate fake lorem ipsum text",
        inputSchema: {
          type: "object",
          properties: {
            type: {
              type: "string",
              description: "The type of text to generate (word, words, sentence, sentences, paragraph, paragraphs, text). Defaults to 'paragraph'."
            },
            count: {
              type: "number",
              description: "The number of items to generate (e.g., number of words, sentences, paragraphs). Defaults to a random number appropriate for the type."
            }
          }
        }
      },
      
      // Internet module
      {
        name: "generate_internet",
        description: "Generate fake internet data (emails, usernames, URLs, etc.)",
        inputSchema: {
          type: "object",
          properties: {
            fields: {
              type: "array",
              description: "The fields to generate (e.g., 'email', 'userName', 'domainName', 'url', 'ip'). If empty, all fields will be generated.",
              items: {
                type: "string"
              }
            }
          }
        }
      },
      
      // Date module
      {
        name: "generate_date",
        description: "Generate fake dates",
        inputSchema: {
          type: "object",
          properties: {
            type: {
              type: "string",
              description: "The type of date to generate (past, future, recent, soon, between). Defaults to 'recent'."
            },
            refDate: {
              type: "string",
              description: "The reference date as ISO string. Defaults to now."
            }
          }
        }
      },
      
      // Commerce module
      {
        name: "generate_commerce",
        description: "Generate fake commerce data (products, prices, etc.)",
        inputSchema: {
          type: "object",
          properties: {
            fields: {
              type: "array",
              description: "The fields to generate (e.g., 'product', 'price', 'department', 'productDescription'). If empty, all fields will be generated.",
              items: {
                type: "string"
              }
            }
          }
        }
      },
      
      // Airline module
      {
        name: "generate_airline",
        description: "Generate fake airline data",
        inputSchema: {
          type: "object",
          properties: {
            fields: {
              type: "array",
              description: "The fields to generate (e.g., 'airline', 'airplane', 'airport', 'flightNumber', 'recordLocator'). If empty, all fields will be generated.",
              items: {
                type: "string"
              }
            }
          }
        }
      },
      
      // Animal module
      {
        name: "generate_animal",
        description: "Generate fake animal data",
        inputSchema: {
          type: "object",
          properties: {
            fields: {
              type: "array",
              description: "The fields to generate (e.g., 'type', 'dog', 'cat', 'bird', 'insect', 'bear'). If empty, all fields will be generated.",
              items: {
                type: "string"
              }
            }
          }
        }
      },
      
      // Color module
      {
        name: "generate_color",
        description: "Generate fake color data",
        inputSchema: {
          type: "object",
          properties: {
            fields: {
              type: "array",
              description: "The fields to generate (e.g., 'rgb', 'hex', 'hsl', 'cmyk', 'colorByCSSColorSpace'). If empty, all fields will be generated.",
              items: {
                type: "string"
              }
            }
          }
        }
      },
      
      // Database module
      {
        name: "generate_database",
        description: "Generate fake database data",
        inputSchema: {
          type: "object",
          properties: {
            fields: {
              type: "array",
              description: "The fields to generate (e.g., 'column', 'type', 'collation', 'engine', 'mongodbObjectId'). If empty, all fields will be generated.",
              items: {
                type: "string"
              }
            }
          }
        }
      },
      
      // Datatype module
      {
        name: "generate_datatype",
        description: "Generate fake data types",
        inputSchema: {
          type: "object",
          properties: {
            fields: {
              type: "array",
              description: "The fields to generate (e.g., 'boolean', 'number', 'float', 'uuid', 'json'). If empty, all fields will be generated.",
              items: {
                type: "string"
              }
            }
          }
        }
      },
      
      // Finance module
      {
        name: "generate_finance",
        description: "Generate fake finance data",
        inputSchema: {
          type: "object",
          properties: {
            fields: {
              type: "array",
              description: "The fields to generate (e.g., 'accountNumber', 'accountName', 'amount', 'creditCardNumber', 'bitcoinAddress'). If empty, all fields will be generated.",
              items: {
                type: "string"
              }
            }
          }
        }
      },
      
      // Food module
      {
        name: "generate_food",
        description: "Generate fake food data",
        inputSchema: {
          type: "object",
          properties: {
            fields: {
              type: "array",
              description: "The fields to generate (e.g., 'dish', 'ingredient', 'fruit', 'vegetable', 'spice'). If empty, all fields will be generated.",
              items: {
                type: "string"
              }
            }
          }
        }
      },
      
      // Hacker module
      {
        name: "generate_hacker",
        description: "Generate fake hacker data",
        inputSchema: {
          type: "object",
          properties: {
            fields: {
              type: "array",
              description: "The fields to generate (e.g., 'abbreviation', 'adjective', 'noun', 'verb', 'phrase'). If empty, all fields will be generated.",
              items: {
                type: "string"
              }
            }
          }
        }
      },
      
      // Location module
      {
        name: "generate_location",
        description: "Generate fake location data",
        inputSchema: {
          type: "object",
          properties: {
            fields: {
              type: "array",
              description: "The fields to generate (e.g., 'street', 'city', 'country', 'zipCode', 'latitude', 'longitude'). If empty, all fields will be generated.",
              items: {
                type: "string"
              }
            }
          }
        }
      },
      
      // Music module
      {
        name: "generate_music",
        description: "Generate fake music data",
        inputSchema: {
          type: "object",
          properties: {
            fields: {
              type: "array",
              description: "The fields to generate (e.g., 'genre', 'songName', 'artist'). If empty, all fields will be generated.",
              items: {
                type: "string"
              }
            }
          }
        }
      },
      
      // Number module
      {
        name: "generate_number",
        description: "Generate fake numbers",
        inputSchema: {
          type: "object",
          properties: {
            fields: {
              type: "array",
              description: "The fields to generate (e.g., 'int', 'float', 'binary', 'octal', 'hex'). If empty, all fields will be generated.",
              items: {
                type: "string"
              }
            },
            min: {
              type: "number",
              description: "The minimum value for number generation (for applicable methods)"
            },
            max: {
              type: "number",
              description: "The maximum value for number generation (for applicable methods)"
            }
          }
        }
      },
      
      // Phone module
      {
        name: "generate_phone",
        description: "Generate fake phone data",
        inputSchema: {
          type: "object",
          properties: {
            fields: {
              type: "array",
              description: "The fields to generate (e.g., 'number', 'imei'). If empty, all fields will be generated.",
              items: {
                type: "string"
              }
            }
          }
        }
      },
      
      // String module
      {
        name: "generate_string",
        description: "Generate fake strings",
        inputSchema: {
          type: "object",
          properties: {
            fields: {
              type: "array",
              description: "The fields to generate (e.g., 'alpha', 'alphanumeric', 'numeric', 'sample'). If empty, all fields will be generated.",
              items: {
                type: "string"
              }
            },
            length: {
              type: "number",
              description: "The length of the string to generate (for applicable methods)"
            }
          }
        }
      },
      
      // System module
      {
        name: "generate_system",
        description: "Generate fake system data",
        inputSchema: {
          type: "object",
          properties: {
            fields: {
              type: "array",
              description: "The fields to generate (e.g., 'fileName', 'commonFileName', 'mimeType', 'fileExt', 'directoryPath'). If empty, all fields will be generated.",
              items: {
                type: "string"
              }
            }
          }
        }
      },
      
      // Vehicle module
      {
        name: "generate_vehicle",
        description: "Generate fake vehicle data",
        inputSchema: {
          type: "object",
          properties: {
            fields: {
              type: "array",
              description: "The fields to generate (e.g., 'vehicle', 'manufacturer', 'model', 'type', 'fuel', 'vin'). If empty, all fields will be generated.",
              items: {
                type: "string"
              }
            }
          }
        }
      },
      
      // Word module
      {
        name: "generate_word",
        description: "Generate fake words",
        inputSchema: {
          type: "object",
          properties: {
            fields: {
              type: "array",
              description: "The fields to generate (e.g., 'adjective', 'adverb', 'conjunction', 'interjection', 'noun', 'preposition', 'verb'). If empty, all fields will be generated.",
              items: {
                type: "string"
              }
            }
          }
        }
      }
    ]
  };
});

/**
 * Handler for the tools.
 * Generates fake data based on the requested tool and parameters.
 */
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  switch (request.params.name) {
    case "generate_person": {
      const args = request.params.arguments as BaseArgs || {};
      const fields = args.fields || [];
      
      const result: Record<string, string> = {};
      
      // If no specific fields are requested, generate all common person fields
      if (fields.length === 0) {
        result.firstName = faker.person.firstName();
        result.lastName = faker.person.lastName();
        result.fullName = faker.person.fullName();
        result.gender = faker.person.gender();
        result.jobTitle = faker.person.jobTitle();
        result.jobArea = faker.person.jobArea();
        result.bio = faker.person.bio();
      } else {
        // Generate only the requested fields
        for (const field of fields) {
          switch (field) {
            case 'firstName':
              result.firstName = faker.person.firstName();
              break;
            case 'lastName':
              result.lastName = faker.person.lastName();
              break;
            case 'fullName':
              result.fullName = faker.person.fullName();
              break;
            case 'gender':
              result.gender = faker.person.gender();
              break;
            case 'jobTitle':
              result.jobTitle = faker.person.jobTitle();
              break;
            case 'jobArea':
              result.jobArea = faker.person.jobArea();
              break;
            case 'bio':
              result.bio = faker.person.bio();
              break;
            default:
              result[field] = `Unknown field: ${field}`;
          }
        }
      }
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2)
          }
        ]
      };
    }
    
    case "generate_lorem": {
      const args = request.params.arguments as LoremArgs || {};
      const type = args.type || 'paragraph';
      const count = args.count;
      
      let result: string;
      
      switch (type) {
        case 'word':
          result = faker.lorem.word();
          break;
        case 'words':
          result = faker.lorem.words(count);
          break;
        case 'sentence':
          result = faker.lorem.sentence(count);
          break;
        case 'sentences':
          result = faker.lorem.sentences(count);
          break;
        case 'paragraph':
          result = faker.lorem.paragraph(count);
          break;
        case 'paragraphs':
          result = faker.lorem.paragraphs(count);
          break;
        case 'text':
          result = faker.lorem.text();
          break;
        case 'lines':
          result = faker.lorem.lines(count);
          break;
        case 'slug':
          result = faker.lorem.slug(count);
          break;
        default:
          result = faker.lorem.paragraph();
      }
      
      return {
        content: [
          {
            type: "text",
            text: result
          }
        ]
      };
    }
    
    case "generate_internet": {
      const args = request.params.arguments as BaseArgs || {};
      const fields = args.fields || [];
      
      const result: Record<string, string> = {};
      
      // If no specific fields are requested, generate all common internet fields
      if (fields.length === 0) {
        result.email = faker.internet.email();
        result.userName = faker.internet.userName();
        result.domainName = faker.internet.domainName();
        result.url = faker.internet.url();
        result.ip = faker.internet.ip();
        result.password = faker.internet.password();
        result.userAgent = faker.internet.userAgent();
      } else {
        // Generate only the requested fields
        for (const field of fields) {
          switch (field) {
            case 'email':
              result.email = faker.internet.email();
              break;
            case 'userName':
              result.userName = faker.internet.userName();
              break;
            case 'domainName':
              result.domainName = faker.internet.domainName();
              break;
            case 'url':
              result.url = faker.internet.url();
              break;
            case 'ip':
              result.ip = faker.internet.ip();
              break;
            case 'password':
              result.password = faker.internet.password();
              break;
            case 'userAgent':
              result.userAgent = faker.internet.userAgent();
              break;
            default:
              result[field] = `Unknown field: ${field}`;
          }
        }
      }
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2)
          }
        ]
      };
    }
    
    case "generate_date": {
      const args = request.params.arguments as DateArgs || {};
      const type = args.type || 'recent';
      const refDate = args.refDate;
      
      let result: Date;
      
      const referenceDate = refDate ? new Date(refDate) : undefined;
      
      switch (type) {
        case 'past':
          result = faker.date.past({ refDate: referenceDate });
          break;
        case 'future':
          result = faker.date.future({ refDate: referenceDate });
          break;
        case 'recent':
          result = faker.date.recent({ refDate: referenceDate });
          break;
        case 'soon':
          result = faker.date.soon({ refDate: referenceDate });
          break;
        default:
          result = faker.date.recent();
      }
      
      return {
        content: [
          {
            type: "text",
            text: result.toISOString()
          }
        ]
      };
    }
    
    case "generate_commerce": {
      const args = request.params.arguments as BaseArgs || {};
      const fields = args.fields || [];
      
      const result: Record<string, string> = {};
      
      // If no specific fields are requested, generate all common commerce fields
      if (fields.length === 0) {
        result.product = faker.commerce.product();
        result.productName = faker.commerce.productName();
        result.price = faker.commerce.price();
        result.department = faker.commerce.department();
        result.productDescription = faker.commerce.productDescription();
      } else {
        // Generate only the requested fields
        for (const field of fields) {
          switch (field) {
            case 'product':
              result.product = faker.commerce.product();
              break;
            case 'productName':
              result.productName = faker.commerce.productName();
              break;
            case 'price':
              result.price = faker.commerce.price();
              break;
            case 'department':
              result.department = faker.commerce.department();
              break;
            case 'productDescription':
              result.productDescription = faker.commerce.productDescription();
              break;
            default:
              result[field] = `Unknown field: ${field}`;
          }
        }
      }
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2)
          }
        ]
      };
    }
    
    // Add handlers for the remaining modules
    case "generate_airline":
    case "generate_animal":
    case "generate_color":
    case "generate_database":
    case "generate_datatype":
    case "generate_finance":
    case "generate_food":
    case "generate_hacker":
    case "generate_location":
    case "generate_music":
    case "generate_number":
    case "generate_phone":
    case "generate_string":
    case "generate_system":
    case "generate_vehicle":
    case "generate_word": {
      const args = request.params.arguments as BaseArgs || {};
      const fields = args.fields || [];
      
      // Extract the module name from the tool name
      const moduleName = request.params.name.replace('generate_', '');
      
      // Create a generic result object
      const result: Record<string, string | number | boolean> = {};
      
      // Generate a sample of data from the module
      if (fields.length === 0) {
        // Generate a sample of data based on the module
        switch (moduleName) {
          case 'airline':
            result.airline = faker.airline.airline().name;
            result.airplane = faker.airline.airplane().name;
            result.airport = faker.airline.airport().name;
            result.flightNumber = faker.airline.flightNumber();
            result.recordLocator = faker.airline.recordLocator();
            break;
          case 'animal':
            result.type = faker.animal.type();
            result.dog = faker.animal.dog();
            result.cat = faker.animal.cat();
            result.bird = faker.animal.bird();
            result.cow = faker.animal.cow();
            result.horse = faker.animal.horse();
            result.insect = faker.animal.insect();
            break;
          case 'color':
            result.rgb = faker.color.rgb();
            result.hex = faker.color.rgb({ format: 'hex' });
            result.hsl = faker.color.human();  // Use human color as a fallback
            result.cmyk = faker.color.human(); // Use human color as a fallback
            result.colorName = faker.color.human();
            break;
          case 'database':
            result.column = faker.database.column();
            result.type = faker.database.type();
            result.collation = faker.database.collation();
            result.engine = faker.database.engine();
            result.mongodbObjectId = faker.database.mongodbObjectId();
            break;
          case 'datatype':
            result.boolean = faker.datatype.boolean();
            result.number = faker.number.int();
            result.float = faker.number.float();
            result.uuid = faker.string.uuid();
            result.hexadecimal = faker.string.hexadecimal();
            break;
          case 'finance':
            result.accountNumber = faker.finance.accountNumber();
            result.accountName = faker.finance.accountName();
            result.amount = faker.finance.amount();
            result.creditCardNumber = faker.finance.creditCardNumber();
            result.bitcoinAddress = faker.finance.bitcoinAddress();
            break;
          case 'food':
            result.dish = faker.food.dish();
            result.description = faker.food.description();
            result.ingredient = faker.food.ingredient();
            result.fruit = faker.food.fruit();
            result.vegetable = faker.food.vegetable();
            result.spice = faker.food.spice();
            break;
          case 'hacker':
            result.abbreviation = faker.hacker.abbreviation();
            result.adjective = faker.hacker.adjective();
            result.noun = faker.hacker.noun();
            result.verb = faker.hacker.verb();
            result.phrase = faker.hacker.phrase();
            break;
          case 'location':
            result.street = faker.location.street();
            result.city = faker.location.city();
            result.country = faker.location.country();
            result.zipCode = faker.location.zipCode();
            result.latitude = faker.location.latitude();
            result.longitude = faker.location.longitude();
            break;
          case 'music':
            result.genre = faker.music.genre();
            result.songName = faker.music.songName();
            break;
          case 'number':
            result.int = faker.number.int();
            result.float = faker.number.float();
            result.binary = faker.number.binary();
            result.octal = faker.number.octal();
            result.hex = faker.number.hex();
            break;
          case 'phone':
            result.number = faker.phone.number();
            result.imei = faker.phone.imei();
            break;
          case 'string':
            result.alpha = faker.string.alpha();
            result.alphanumeric = faker.string.alphanumeric();
            result.numeric = faker.string.numeric();
            result.sample = faker.string.sample();
            break;
          case 'system':
            result.fileName = faker.system.fileName();
            result.commonFileName = faker.system.commonFileName();
            result.mimeType = faker.system.mimeType();
            result.fileExt = faker.system.fileExt();
            result.directoryPath = faker.system.directoryPath();
            break;
          case 'vehicle':
            result.vehicle = faker.vehicle.vehicle();
            result.manufacturer = faker.vehicle.manufacturer();
            result.model = faker.vehicle.model();
            result.type = faker.vehicle.type();
            result.fuel = faker.vehicle.fuel();
            result.vin = faker.vehicle.vin();
            break;
          case 'word':
            result.adjective = faker.word.adjective();
            result.adverb = faker.word.adverb();
            result.conjunction = faker.word.conjunction();
            result.interjection = faker.word.interjection();
            result.noun = faker.word.noun();
            result.preposition = faker.word.preposition();
            result.verb = faker.word.verb();
            break;
        }
      } else {
        // Generate only the requested fields
        for (const field of fields) {
          try {
            // Try to access the field on the module using type-safe approach
            switch (moduleName) {
              case 'airline':
                if (field in faker.airline && typeof faker.airline[field as keyof typeof faker.airline] === 'function') {
                  const value = faker.airline[field as keyof typeof faker.airline]();
                  result[field] = String(value);
                } else {
                  result[field] = `Unknown field: ${field}`;
                }
                break;
              case 'animal':
                if (field in faker.animal && typeof faker.animal[field as keyof typeof faker.animal] === 'function') {
                  const value = faker.animal[field as keyof typeof faker.animal]();
                  result[field] = String(value);
                } else {
                  result[field] = `Unknown field: ${field}`;
                }
                break;
              case 'color':
                if (field in faker.color && typeof faker.color[field as keyof typeof faker.color] === 'function') {
                  const value = faker.color[field as keyof typeof faker.color]();
                  result[field] = String(value);
                } else {
                  result[field] = `Unknown field: ${field}`;
                }
                break;
              // Add other modules as needed
              default:
                result[field] = `Unknown module or field: ${moduleName}.${field}`;
            }
              result[field] = `Unknown field: ${field}`;
            } catch (error) {
              result[field] = `Error generating field: ${field}`;
            }
          }
        }
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2)
          }
        ]
      };
    }

    default:
      throw new McpError(
        ErrorCode.MethodNotFound,
        `Unknown tool: ${request.params.name}`
      );
  }
});

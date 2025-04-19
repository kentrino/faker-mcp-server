import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function internet(server: McpServer) {
  // Define the custom types
  const EmojiTypeEnum = z.enum([
    "smiley",
    "body",
    "person",
    "nature",
    "food",
    "travel",
    "activity",
    "object",
    "symbol",
    "flag",
  ])

  const HTTPStatusCodeTypeEnum = z.enum(["informational", "success", "clientError", "serverError", "redirection"])

  const HTTPProtocolTypeEnum = z.enum(["http", "https"])

  const IPv4NetworkEnum = z.enum([
    "any",
    "loopback",
    "private-a",
    "private-b",
    "private-c",
    "test-net-1",
    "test-net-2",
    "test-net-3",
    "link-local",
    "multicast",
  ])

  // Define the SexType enum for use in the personPortrait method
  const SexTypeEnum = z.enum(["female", "male"])

  server.tool(
    "internet-email",
    "Generates an email address using the given person's name as base.",
    {
      firstName: z
        .string()
        .optional()
        .describe("The optional first name to use. If not specified, a random one will be chosen."),
      lastName: z
        .string()
        .optional()
        .describe("The optional last name to use. If not specified, a random one will be chosen."),
      provider: z
        .string()
        .optional()
        .describe("The mail provider domain to use. If not specified, a random free mail provider will be chosen."),
      allowSpecialCharacters: z
        .boolean()
        .optional()
        .describe("Whether special characters such as `.!#$%&'*+-/=?^_`{|}~` should be included in the email address."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.internet.email(args) }],
      }
    },
  )

  server.tool(
    "internet-exampleEmail",
    "Generates an email address using an example mail provider using the given person's name as base.",
    {
      firstName: z
        .string()
        .optional()
        .describe("The optional first name to use. If not specified, a random one will be chosen."),
      lastName: z
        .string()
        .optional()
        .describe("The optional last name to use. If not specified, a random one will be chosen."),
      allowSpecialCharacters: z
        .boolean()
        .optional()
        .describe("Whether special characters such as `.!#$%&'*+-/=?^_`{|}~` should be included in the email address."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.internet.exampleEmail(args) }],
      }
    },
  )

  server.tool(
    "internet-userName",
    "Generates a username using the given person's name as base. (Deprecated: Use `faker.internet.username()` instead.)",
    {
      firstName: z
        .string()
        .optional()
        .describe("The optional first name to use. If not specified, a random one will be chosen."),
      lastName: z
        .string()
        .optional()
        .describe("The optional last name to use. If not specified, a random one will be chosen."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.internet.userName(args) }],
      }
    },
  )

  server.tool(
    "internet-username",
    "Generates a username using the given person's name as base.",
    {
      firstName: z
        .string()
        .optional()
        .describe("The optional first name to use. If not specified, a random one will be chosen."),
      lastName: z
        .string()
        .optional()
        .describe("The optional last name to use. If not specified, a random one will be chosen."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.internet.username(args) }],
      }
    },
  )

  server.tool(
    "internet-displayName",
    "Generates a display name using the given person's name as base.",
    {
      firstName: z
        .string()
        .optional()
        .describe("The optional first name to use. If not specified, a random one will be chosen."),
      lastName: z
        .string()
        .optional()
        .describe("The optional last name to use. If not specified, a random one will be chosen."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.internet.displayName(args) }],
      }
    },
  )

  server.tool("internet-protocol", "Returns a random web protocol. Either `http` or `https`.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.internet.protocol() }],
    }
  })

  server.tool("internet-httpMethod", "Returns a random http method.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.internet.httpMethod() }],
    }
  })

  server.tool(
    "internet-httpStatusCode",
    "Generates a random HTTP status code.",
    {
      types: z
        .array(HTTPStatusCodeTypeEnum)
        .optional()
        .describe("A list of the HTTP status code types that should be used."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.internet.httpStatusCode(args).toString() }],
      }
    },
  )

  server.tool(
    "internet-url",
    "Generates a random http(s) url.",
    {
      appendSlash: z.boolean().optional().describe("Whether to append a slash to the end of the url (path)."),
      protocol: HTTPProtocolTypeEnum.optional().describe("The protocol to use."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.internet.url(args) }],
      }
    },
  )

  server.tool("internet-domainName", "Generates a random domain name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.internet.domainName() }],
    }
  })

  server.tool("internet-domainSuffix", "Returns a random domain suffix.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.internet.domainSuffix() }],
    }
  })

  server.tool("internet-domainWord", "Generates a random domain word.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.internet.domainWord() }],
    }
  })

  server.tool("internet-ip", "Generates a random IPv4 or IPv6 address.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.internet.ip() }],
    }
  })

  server.tool(
    "internet-ipv4",
    "Generates a random IPv4 address.",
    {
      cidrBlock: z.string().optional().describe("The optional CIDR block to use. Must be in the format `x.x.x.x/y`."),
      network: IPv4NetworkEnum.optional().describe(
        "The optional network to use. This is intended as an alias for well-known `cidrBlock`s.",
      ),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.internet.ipv4(args) }],
      }
    },
  )

  server.tool("internet-ipv6", "Generates a random IPv6 address.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.internet.ipv6() }],
    }
  })

  server.tool("internet-port", "Generates a random port number.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.internet.port().toString() }],
    }
  })

  server.tool("internet-userAgent", "Generates a random user agent string.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.internet.userAgent() }],
    }
  })

  server.tool(
    "internet-color",
    "Generates a random css hex color code in aesthetically pleasing color palette. (Deprecated: Please use faker.color.rgb() or any of the other color methods instead.)",
    {
      redBase: z.number().optional().describe("The optional base red in range between `0` and `255`."),
      greenBase: z.number().optional().describe("The optional base green in range between `0` and `255`."),
      blueBase: z.number().optional().describe("The optional base blue in range between `0` and `255`."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.internet.color(args) }],
      }
    },
  )

  server.tool(
    "internet-mac",
    "Generates a random mac address.",
    {
      separator: z.string().optional().describe("The optional separator to use. Can be either `':'`, `'-'` or `''`."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.internet.mac(args) }],
      }
    },
  )

  server.tool(
    "internet-password",
    "Generates a random password-like string.",
    {
      length: z.number().optional().describe("The length of the password to generate."),
      memorable: z.boolean().optional().describe("Whether the generated password should be memorable."),
      pattern: z.any().optional().describe("The pattern that all chars should match."),
      prefix: z.string().optional().describe("The prefix to use."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.internet.password(args) }],
      }
    },
  )

  server.tool(
    "internet-emoji",
    "Generates a random emoji.",
    {
      types: z.array(EmojiTypeEnum).optional().describe("A list of the emoji types that should be included."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.internet.emoji(args) }],
      }
    },
  )

  server.tool("internet-jwtAlgorithm", "Generates a random JWT (JSON Web Token) Algorithm.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.internet.jwtAlgorithm() }],
    }
  })

  server.tool(
    "internet-jwt",
    "Generates a random JWT (JSON Web Token).",
    {
      header: z.record(z.unknown()).optional().describe("The header to use for the token."),
      payload: z.record(z.unknown()).optional().describe("The payload to use for the token."),
      refDate: z.string().optional().describe("The date to use as reference point for the newly generated date."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.internet.jwt(args) }],
      }
    },
  )

  return server
}

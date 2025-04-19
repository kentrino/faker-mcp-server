import { faker } from "@faker-js/faker"
import type { ServerBuilder } from "../ServerBuilder.js"
import { z } from "zod"
import { ModuleBuilder } from "../ModuleBuilder.js"

export function internet(): Parameters<ServerBuilder["register"]>[0] {
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

  return new ModuleBuilder()
    .method(
      "email",
      "Generates an email address using the given person's name as base.",
      z.object({
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
          .describe(
            "Whether special characters such as `.!#$%&'*+-/=?^_`{|}~` should be included in the email address.",
          ),
      }),
      (input) => {
        return faker.internet.email(input)
      },
    )
    .method(
      "exampleEmail",
      "Generates an email address using an example mail provider using the given person's name as base.",
      z.object({
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
          .describe(
            "Whether special characters such as `.!#$%&'*+-/=?^_`{|}~` should be included in the email address.",
          ),
      }),
      (input) => {
        return faker.internet.exampleEmail(input)
      },
    )
    .method(
      "userName",
      "Generates a username using the given person's name as base. (Deprecated: Use `faker.internet.username()` instead.)",
      z.object({
        firstName: z
          .string()
          .optional()
          .describe("The optional first name to use. If not specified, a random one will be chosen."),
        lastName: z
          .string()
          .optional()
          .describe("The optional last name to use. If not specified, a random one will be chosen."),
      }),
      (input) => {
        return faker.internet.userName(input)
      },
    )
    .method(
      "username",
      "Generates a username using the given person's name as base.",
      z.object({
        firstName: z
          .string()
          .optional()
          .describe("The optional first name to use. If not specified, a random one will be chosen."),
        lastName: z
          .string()
          .optional()
          .describe("The optional last name to use. If not specified, a random one will be chosen."),
      }),
      (input) => {
        return faker.internet.username(input)
      },
    )
    .method(
      "displayName",
      "Generates a display name using the given person's name as base.",
      z.object({
        firstName: z
          .string()
          .optional()
          .describe("The optional first name to use. If not specified, a random one will be chosen."),
        lastName: z
          .string()
          .optional()
          .describe("The optional last name to use. If not specified, a random one will be chosen."),
      }),
      (input) => {
        return faker.internet.displayName(input)
      },
    )
    .method("protocol", "Returns a random web protocol. Either `http` or `https`.", z.object({}), () => {
      return faker.internet.protocol()
    })
    .method("httpMethod", "Returns a random http method.", z.object({}), () => {
      return faker.internet.httpMethod()
    })
    .method(
      "httpStatusCode",
      "Generates a random HTTP status code.",
      z.object({
        types: z
          .array(HTTPStatusCodeTypeEnum)
          .optional()
          .describe("A list of the HTTP status code types that should be used."),
      }),
      (input) => {
        return faker.internet.httpStatusCode(input).toString()
      },
    )
    .method(
      "url",
      "Generates a random http(s) url.",
      z.object({
        appendSlash: z.boolean().optional().describe("Whether to append a slash to the end of the url (path)."),
        protocol: HTTPProtocolTypeEnum.optional().describe("The protocol to use."),
      }),
      (input) => {
        return faker.internet.url(input)
      },
    )
    .method("domainName", "Generates a random domain name.", z.object({}), () => {
      return faker.internet.domainName()
    })
    .method("domainSuffix", "Returns a random domain suffix.", z.object({}), () => {
      return faker.internet.domainSuffix()
    })
    .method("domainWord", "Generates a random domain word.", z.object({}), () => {
      return faker.internet.domainWord()
    })
    .method("ip", "Generates a random IPv4 or IPv6 address.", z.object({}), () => {
      return faker.internet.ip()
    })
    .method(
      "ipv4",
      "Generates a random IPv4 address.",
      z.object({
        cidrBlock: z.string().optional().describe("The optional CIDR block to use. Must be in the format `x.x.x.x/y`."),
        network: IPv4NetworkEnum.optional().describe(
          "The optional network to use. This is intended as an alias for well-known `cidrBlock`s.",
        ),
      }),
      (input) => {
        return faker.internet.ipv4(input)
      },
    )
    .method("ipv6", "Generates a random IPv6 address.", z.object({}), () => {
      return faker.internet.ipv6()
    })
    .method("port", "Generates a random port number.", z.object({}), () => {
      return faker.internet.port().toString()
    })
    .method("userAgent", "Generates a random user agent string.", z.object({}), () => {
      return faker.internet.userAgent()
    })
    .method(
      "color",
      "Generates a random css hex color code in aesthetically pleasing color palette. (Deprecated: Please use faker.color.rgb() or any of the other color methods instead.)",
      z.object({
        redBase: z.number().optional().describe("The optional base red in range between `0` and `255`."),
        greenBase: z.number().optional().describe("The optional base green in range between `0` and `255`."),
        blueBase: z.number().optional().describe("The optional base blue in range between `0` and `255`."),
      }),
      (input) => {
        return faker.internet.color(input)
      },
    )
    .method(
      "mac",
      "Generates a random mac address.",
      z.object({
        separator: z.string().optional().describe("The optional separator to use. Can be either `':'`, `'-'` or `''`."),
      }),
      (input) => {
        return faker.internet.mac(input)
      },
    )
    .method(
      "password",
      "Generates a random password-like string.",
      z.object({
        length: z.number().optional().describe("The length of the password to generate."),
        memorable: z.boolean().optional().describe("Whether the generated password should be memorable."),
        pattern: z.any().optional().describe("The pattern that all chars should match."),
        prefix: z.string().optional().describe("The prefix to use."),
      }),
      (input) => {
        return faker.internet.password(input)
      },
    )
    .method(
      "emoji",
      "Generates a random emoji.",
      z.object({
        types: z.array(EmojiTypeEnum).optional().describe("A list of the emoji types that should be included."),
      }),
      (input) => {
        return faker.internet.emoji(input)
      },
    )
    .method("jwtAlgorithm", "Generates a random JWT (JSON Web Token) Algorithm.", z.object({}), () => {
      return faker.internet.jwtAlgorithm()
    })
    .method(
      "jwt",
      "Generates a random JWT (JSON Web Token).",
      z.object({
        header: z.record(z.unknown()).optional().describe("The header to use for the token."),
        payload: z.record(z.unknown()).optional().describe("The payload to use for the token."),
        refDate: z.string().optional().describe("The date to use as reference point for the newly generated date."),
      }),
      (input) => {
        return faker.internet.jwt(input)
      },
    )
    .build({
      name: "generate_internet",
      description: "Generate internet related entries",
    })
}

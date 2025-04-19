import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function finance(server: McpServer) {
  server.tool("finance-accountName", "Generates a random account name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.finance.accountName() }],
    }
  })

  server.tool(
    "finance-accountNumber",
    "Generates a random account number.",
    {
      length: z.number().optional().describe("The length of the account number."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.finance.accountNumber(args) }],
      }
    },
  )

  server.tool(
    "finance-amount",
    "Generates a random amount between the given bounds (inclusive).",
    {
      min: z.number().optional().describe("The lower bound for the amount."),
      max: z.number().optional().describe("The upper bound for the amount."),
      dec: z.number().optional().describe("The number of decimal places for the amount."),
      symbol: z.string().optional().describe("The symbol used to prefix the amount."),
      autoFormat: z
        .boolean()
        .optional()
        .describe("If true this method will use Number.toLocaleString(). Otherwise it will use Number.toFixed()."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.finance.amount(args) }],
      }
    },
  )

  server.tool(
    "finance-bic",
    "Generates a random SWIFT/BIC code based on the ISO-9362 format.",
    {
      includeBranchCode: z
        .boolean()
        .optional()
        .describe("Whether to include a three-digit branch code at the end of the generated code."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.finance.bic(args) }],
      }
    },
  )

  server.tool(
    "finance-bitcoinAddress",
    "Generates a random Bitcoin address.",
    {
      type: z.enum(["legacy", "segwit", "bech32", "taproot"]).optional().describe("The bitcoin address type."),
      network: z.enum(["mainnet", "testnet"]).optional().describe("The bitcoin network."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.finance.bitcoinAddress(args) }],
      }
    },
  )

  server.tool("finance-creditCardCVV", "Generates a random credit card CVV.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.finance.creditCardCVV() }],
    }
  })

  server.tool("finance-creditCardIssuer", "Returns a random credit card issuer.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.finance.creditCardIssuer() }],
    }
  })

  server.tool(
    "finance-creditCardNumber",
    "Generates a random credit card number.",
    {
      issuer: z
        .string()
        .optional()
        .describe("The name of the issuer (case-insensitive) or the format used to generate one."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.finance.creditCardNumber(args) }],
      }
    },
  )

  server.tool(
    "finance-currency",
    "Returns a random currency object, containing code, name, symbol, and numericCode properties.",
    {},
    async () => {
      return {
        content: [{ type: "text", text: JSON.stringify(faker.finance.currency()) }],
      }
    },
  )

  server.tool("finance-currencyCode", "Returns a random currency code.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.finance.currencyCode() }],
    }
  })

  server.tool("finance-currencyName", "Returns a random currency name.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.finance.currencyName() }],
    }
  })

  server.tool("finance-currencyNumericCode", "Returns a random currency numeric code.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.finance.currencyNumericCode() }],
    }
  })

  server.tool("finance-currencySymbol", "Returns a random currency symbol.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.finance.currencySymbol() }],
    }
  })

  server.tool("finance-ethereumAddress", "Creates a random, non-checksum Ethereum address.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.finance.ethereumAddress() }],
    }
  })

  server.tool(
    "finance-iban",
    "Generates a random IBAN.",
    {
      countryCode: z.string().optional().describe("The country code from which you want to generate an IBAN."),
      formatted: z.boolean().optional().describe("Return a formatted version of the generated IBAN."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.finance.iban(args) }],
      }
    },
  )

  server.tool("finance-litecoinAddress", "Generates a random Litecoin address.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.finance.litecoinAddress() }],
    }
  })

  server.tool(
    "finance-maskedNumber",
    "Generates a random masked number.",
    {
      length: z.number().optional().describe("The length of the unmasked number."),
      parens: z.boolean().optional().describe("Whether to use surrounding parenthesis."),
      ellipsis: z.boolean().optional().describe("Whether to prefix the number with an ellipsis."),
      maskChar: z.string().optional().describe("The character to use as a mask."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.finance.maskedNumber(args) }],
      }
    },
  )

  server.tool(
    "finance-pin",
    "Generates a random PIN.",
    {
      length: z.number().optional().describe("The length of the PIN to generate."),
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.finance.pin(args) }],
      }
    },
  )

  server.tool("finance-routingNumber", "Generates a random routing number.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.finance.routingNumber() }],
    }
  })

  server.tool("finance-transactionDescription", "Generates a random transaction description.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.finance.transactionDescription() }],
    }
  })

  server.tool("finance-transactionType", "Returns a random transaction type.", {}, async () => {
    return {
      content: [{ type: "text", text: faker.finance.transactionType() }],
    }
  })

  return server
}

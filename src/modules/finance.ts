import { faker } from "@faker-js/faker"
import type { ToolServer } from "../ToolServer.js"
import { z } from "zod"
import { ModuleBuilder } from "../ModuleBuilder.js"

export function finance(): Parameters<ToolServer["register"]>[0] {
  return new ModuleBuilder()
    .method("accountName", "Generates a random account name.", z.object({}), () => {
      return faker.finance.accountName()
    })
    .method(
      "accountNumber",
      "Generates a random account number.",
      z
        .union([
          z.number(),
          z.object({
            length: z.number().optional().describe("The length of the account number."),
          }),
        ])
        .optional(),
      (input) => {
        return faker.finance.accountNumber(input)
      },
    )
    .method(
      "amount",
      "Generates a random amount between the given bounds (inclusive).",
      z
        .object({
          min: z.number().optional().describe("The lower bound for the amount."),
          max: z.number().optional().describe("The upper bound for the amount."),
          dec: z.number().optional().describe("The number of decimal places for the amount."),
          symbol: z.string().optional().describe("The symbol used to prefix the amount."),
          autoFormat: z
            .boolean()
            .optional()
            .describe("If true this method will use Number.toLocaleString(). Otherwise it will use Number.toFixed()."),
        })
        .optional(),
      (input) => {
        return faker.finance.amount(input)
      },
    )
    .method(
      "bic",
      "Generates a random SWIFT/BIC code based on the ISO-9362 format.",
      z
        .object({
          includeBranchCode: z
            .boolean()
            .optional()
            .describe("Whether to include a three-digit branch code at the end of the generated code."),
        })
        .optional(),
      (input) => {
        return faker.finance.bic(input)
      },
    )
    .method(
      "bitcoinAddress",
      "Generates a random Bitcoin address.",
      z
        .object({
          type: z.enum(["legacy", "segwit", "bech32", "taproot"]).optional().describe("The bitcoin address type."),
          network: z.enum(["mainnet", "testnet"]).optional().describe("The bitcoin network."),
        })
        .optional(),
      (input) => {
        return faker.finance.bitcoinAddress(input)
      },
    )
    .method("creditCardCVV", "Generates a random credit card CVV.", z.object({}), () => {
      return faker.finance.creditCardCVV()
    })
    .method("creditCardIssuer", "Returns a random credit card issuer.", z.object({}), () => {
      return faker.finance.creditCardIssuer()
    })
    .method(
      "creditCardNumber",
      "Generates a random credit card number.",
      z
        .union([
          z.string(),
          z.object({
            issuer: z
              .string()
              .optional()
              .describe("The name of the issuer (case-insensitive) or the format used to generate one."),
          }),
        ])
        .optional(),
      (input) => {
        return faker.finance.creditCardNumber(input)
      },
    )
    .method(
      "currency",
      "Returns a random currency object, containing code, name, symbol, and numericCode properties.",
      z.object({}),
      () => {
        return JSON.stringify(faker.finance.currency())
      },
    )
    .method("currencyCode", "Returns a random currency code.", z.object({}), () => {
      return faker.finance.currencyCode()
    })
    .method("currencyName", "Returns a random currency name.", z.object({}), () => {
      return faker.finance.currencyName()
    })
    .method("currencyNumericCode", "Returns a random currency numeric code.", z.object({}), () => {
      return faker.finance.currencyNumericCode()
    })
    .method("currencySymbol", "Returns a random currency symbol.", z.object({}), () => {
      return faker.finance.currencySymbol()
    })
    .method("ethereumAddress", "Creates a random, non-checksum Ethereum address.", z.object({}), () => {
      return faker.finance.ethereumAddress()
    })
    .method(
      "iban",
      "Generates a random IBAN.",
      z
        .object({
          countryCode: z.string().optional().describe("The country code from which you want to generate an IBAN."),
          formatted: z.boolean().optional().describe("Return a formatted version of the generated IBAN."),
        })
        .optional(),
      (input) => {
        return faker.finance.iban(input)
      },
    )
    .method("litecoinAddress", "Generates a random Litecoin address.", z.object({}), () => {
      return faker.finance.litecoinAddress()
    })
    .method(
      "maskedNumber",
      "Generates a random masked number.",
      z
        .object({
          length: z.number().optional().describe("The length of the unmasked number."),
          parens: z.boolean().optional().describe("Whether to use surrounding parenthesis."),
          ellipsis: z.boolean().optional().describe("Whether to prefix the number with an ellipsis."),
          maskChar: z.string().optional().describe("The character to use as a mask."),
        })
        .optional(),
      (input) => {
        return faker.finance.maskedNumber(input)
      },
    )
    .method(
      "pin",
      "Generates a random PIN.",
      z
        .object({
          length: z.number().optional().describe("The length of the PIN to generate."),
        })
        .optional(),
      (input) => {
        return faker.finance.pin(input)
      },
    )
    .method("routingNumber", "Generates a random routing number.", z.object({}), () => {
      return faker.finance.routingNumber()
    })
    .method("transactionDescription", "Generates a random transaction description.", z.object({}), () => {
      return faker.finance.transactionDescription()
    })
    .method("transactionType", "Returns a random transaction type.", z.object({}), () => {
      return faker.finance.transactionType()
    })
    .build({
      name: "generate_finance",
      description: "Generate fake finance data",
    })
}

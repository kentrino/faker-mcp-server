import { faker } from "@faker-js/faker"
import type { ToolServer } from "../ToolServer.js"
import { z } from "zod"
import { ModuleBuilder } from "../ModuleBuilder.js"

// Define the SexType enum for use in the schema
const SexTypeEnum = z.enum(["female", "male"])
type SexType = z.infer<typeof SexTypeEnum>

export function person(): Parameters<ToolServer["register"]>[0] {
  return new ModuleBuilder()
    .method(
      "firstName",
      "Returns a random first name.",
      z.object({
        sex: SexTypeEnum.optional().describe("The optional sex to use. Can be either 'female' or 'male'."),
      }),
      (input) => {
        return faker.person.firstName(input.sex)
      },
    )
    .method(
      "lastName",
      "Returns a random last name.",
      z.object({
        sex: SexTypeEnum.optional().describe("The optional sex to use. Can be either 'female' or 'male'."),
      }),
      (input) => {
        return faker.person.lastName(input.sex)
      },
    )
    .method(
      "middleName",
      "Returns a random middle name.",
      z.object({
        sex: SexTypeEnum.optional().describe("The optional sex to use. Can be either 'female' or 'male'."),
      }),
      (input) => {
        return faker.person.middleName(input.sex)
      },
    )
    .method(
      "fullName",
      "Generates a random full name.",
      z.object({
        firstName: z
          .string()
          .optional()
          .describe("The optional first name to use. If not specified a random one will be chosen."),
        lastName: z
          .string()
          .optional()
          .describe("The optional last name to use. If not specified a random one will be chosen."),
        sex: SexTypeEnum.optional().describe("The optional sex to use. Can be either 'female' or 'male'."),
      }),
      (input) => {
        return faker.person.fullName(input)
      },
    )
    .method("gender", "Returns a random gender.", z.object({}), () => {
      return faker.person.gender()
    })
    .method("sex", "Returns a random sex.", z.object({}), () => {
      return faker.person.sex()
    })
    .method(
      "sexType",
      "Returns a random sex type. The `SexType` is intended to be used in parameters and conditions.",
      z.object({}),
      () => {
        return faker.person.sexType()
      },
    )
    .method("bio", "Returns a random short biography.", z.object({}), () => {
      return faker.person.bio()
    })
    .method(
      "prefix",
      "Returns a random person prefix.",
      z.object({
        sex: SexTypeEnum.optional().describe("The optional sex to use. Can be either 'female' or 'male'."),
      }),
      (input) => {
        return faker.person.prefix(input.sex)
      },
    )
    .method("suffix", "Returns a random person suffix.", z.object({}), () => {
      return faker.person.suffix()
    })
    .method("jobTitle", "Generates a random job title.", z.object({}), () => {
      return faker.person.jobTitle()
    })
    .method("jobDescriptor", "Generates a random job descriptor.", z.object({}), () => {
      return faker.person.jobDescriptor()
    })
    .method("jobArea", "Generates a random job area.", z.object({}), () => {
      return faker.person.jobArea()
    })
    .method("jobType", "Generates a random job type.", z.object({}), () => {
      return faker.person.jobType()
    })
    .method("zodiacSign", "Returns a random zodiac sign.", z.object({}), () => {
      return faker.person.zodiacSign()
    })
    .build({
      name: "generate_person",
      description: "Generate people's personal information such as names and job titles",
    })
}

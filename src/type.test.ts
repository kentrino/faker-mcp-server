import { describe, it, expectTypeOf } from "vitest"
import type { InstanceMethodsOf } from "./fieldSchemaOf.js"

describe("InstanceMethodOf", () => {
  it("v1 does not work", () => {
    type AnyFunction = (...args: never[]) => unknown

    type OnlyMethods<T> = {
      [K in keyof T]: T[K] extends AnyFunction ? K : never
    }
    type InstanceMethodOf<T> = keyof OnlyMethods<T>

    class A {
      c = "a"
      private d() {}
      a() {}
      b() {}
    }

    type Methods = InstanceMethodOf<A>

    expectTypeOf<Methods>().toEqualTypeOf<"a" | "b" | "c">()
  })

  it("v2  work", () => {
    type AnyFunction = (...args: never[]) => unknown

    type IsMethodKey<T, K extends keyof T> = T[K] extends AnyFunction ? K : never

    class A {
      c = "a"
      private d() {}
      a() {}
      b() {}
      e(e: string) {}
      f(e: never) {}
    }

    expectTypeOf<IsMethodKey<A, "a">>().toEqualTypeOf<"a">()
    expectTypeOf<IsMethodKey<A, "b">>().toEqualTypeOf<"b">()
    expectTypeOf<IsMethodKey<A, "c">>().toEqualTypeOf<never>()

    type MethodKeyOf<T> = {
      [K in keyof T]: T[K] extends AnyFunction ? K : never
    }[keyof T]

    expectTypeOf<MethodKeyOf<A>>().toEqualTypeOf<"a" | "b" | "e" | "f">()
  })
})

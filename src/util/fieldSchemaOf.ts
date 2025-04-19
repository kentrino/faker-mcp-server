import { z } from "zod"

type AnyFunction = (...args: never[]) => unknown

type InstanceMethodOf<T> = {
  [K in keyof T]: T[K] extends AnyFunction ? K : never
}[keyof T]

export type InstanceMethodsOf<T> = [InstanceMethodOf<T> & string, ...(InstanceMethodOf<T> & string)[]]

function instanceMethodsOf<T>(module: T) {
  return Object.keys(module as never).filter(
    (key) => typeof module[key as keyof T] === "function",
  ) as InstanceMethodsOf<T>
}

export function fieldSchemaOf<T>(
  module: T,
  {
    description,
  }: {
    description: string
  },
) {
  return z.enum(instanceMethodsOf(module))
}

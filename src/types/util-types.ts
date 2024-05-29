export type Truthyfier = <T>(obj: T | null | undefined) => obj is T

export type Defined<T> = Required<{
  [P in keyof T]-?: Exclude<T[P], undefined>
}>

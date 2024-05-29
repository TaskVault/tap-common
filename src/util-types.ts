export type AsTruthful = <T>(obj: T | null | undefined) => obj is NonNullable<T>

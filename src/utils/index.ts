import type { AsArray, IdMap, WithId } from '../types'

export const entries = <T extends object>(obj: T | null | undefined): AsArray<T> =>
  obj ? (Object.entries(obj) as AsArray<T>) : []

export const arrayToIdMap = <T extends WithId>(data: T[] | null | undefined): IdMap<T> => data ?
  data.reduce((acc, item) => ({ ...acc, [item.id]: item }), {} as IdMap<T>) : ({} as IdMap<T>)

const CRITICAL_STRING_LENGTH_RATIO = 1 / 4
export const hideCriticalString = (str: string) =>
  str.slice(0, str.length * CRITICAL_STRING_LENGTH_RATIO) +
  Array.from(str)
    .slice(str.length * CRITICAL_STRING_LENGTH_RATIO)
    .map(() => '*')
    .join('')

export type WithId<T extends object = object> = T & { id: string | number }
export const isWithId = (obj: object): obj is WithId =>
  obj && 'id' in obj && (typeof obj.id === 'string' || typeof obj.id === 'number')

export type IdMap<T extends WithId = WithId> = Record<T['id'], T>

export type AsArray<T extends object> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][]

// gpt-generated stuff (w/ descriptions).
// no lodash, because of bundle size. save some memory whenever possible

/**
 * Checks if the provided value is a number.
 * @param value - The value to check.
 * @returns True if the value is a number, false otherwise.
 */
export const isNumber = (value: any): value is number => {
  return typeof value === 'number' && !isNaN(value)
}

/**
 * Checks if the provided value is a string.
 * @param value - The value to check.
 * @returns True if the value is a string, false otherwise.
 */
export const isString = (value: any): value is string => {
  return typeof value === 'string'
}

/**
 * Checks if the provided value is an array.
 * @param value - The value to check.
 * @returns True if the value is an array, false otherwise.
 */
export const isArray = (value: any): value is Array<any> => {
  return Array.isArray(value)
}

/**
 * Checks if the provided object has a key and refines its type.
 * @param obj - The object to check.
 * @param key - The key to check.
 * @returns True if the object has the key, with refined type.
 */
export const has = <T extends object, K extends PropertyKey>(
  obj: T,
  key: K,
): obj is T & Record<K, any> => {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

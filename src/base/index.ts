/**
 * An empty arrow function that performs no operation.
 */
export const noop = () => {}

/**
 * Returns a string representing the object.
 */
export const toString = (v: any): string =>
  Object.prototype.toString.call(v).slice(8, -1)

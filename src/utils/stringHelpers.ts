/**
 * checks if string can be converted to a number
 * @param {string} s - input string
 */
export const isNumber = (s: string): boolean => !Number.isNaN(parseInt(s));

/**
 * formats provided number to have two digits after decimal point and separates thousands with half-space symbol
 * @param {number} n - number to format
 * @param {number} digits - count of digits after decimal point, will be filled by "0" if needed
 * @return {string} string representing provided number
 */

export const format = (n: number, digits = 2): string =>
  n
    .toFixed(digits)
    .replace(/\B(?=(\d{3})+(?!\d))/g, String.fromCharCode(0x2009)); // half-space symbol

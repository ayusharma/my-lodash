/**
 * Compact
 *
 * Falsy values:
 * null
 * undefined
 * 0
 * ""
 * false
 * NaN
 */
export default function compact(array = []) {
  const result = [];
  const falseValues = [null, NaN, undefined, 0, '', false];
  for (const element of array) {
    if (falseValues.includes(element) === false) {
      result.push(element);
    }
  }

  return result;
}

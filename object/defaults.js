/**
 * Defaults
 */
export default function defaults(...input) {
  const result = {};

  for (const val of input) {
    const keys = Object.keys(val);
    if (result[keys[0]] === undefined) {
      result[keys[0]] = val[keys[0]];
    }
  }

  return result;
}

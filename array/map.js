/**
 * map
 */

export default function map(input = [], cb) {
  const result = [];

  for (const item of input) {
    result.push(cb(item));
  }

  return result;
}

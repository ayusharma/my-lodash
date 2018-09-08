/**
 * DifferenceWith
 */
export default function differenceWith(source = [], target = [], comparer) {
  const result = [];

  for (const element of source) {
    const check = target.some(value => comparer(element, value));

    if (check === false) {
      result.push(element);
    }
  }

  return result;
}

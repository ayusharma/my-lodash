/**
 * camelCase
 */
export default function camelCase(string) {
  let result = '';
  const list = string.split(/[-,_,\s]+/);

  return list
    .filter(element => element.length > 0)
    .reduce((result, element, index) => {
      if (index % 2 !== 0) {
        result +=
          String(element[0]).toUpperCase() +
          String(element)
            .slice(1)
            .toLowerCase();
      } else {
        result += String(element).toLowerCase();
      }
      return result;
    }, '');
}

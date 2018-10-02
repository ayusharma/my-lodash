/**
 * compose
 */
export default function compose(...args) {
  return function composeHelper(input) {
    return args.reverse().reduce(
      (result, value) => {
        result = value(result);
        return result;
      },
      input
    );
  };
}

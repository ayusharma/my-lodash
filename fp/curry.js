/**
 * curry
 */
export default function curry(fn) {
  const arity = fn.length;
  const store = [];
  return function curryHelper(arg) {
    store.push(arg);
    if (store.length === arity) {
      return fn.apply(null, store);
    } else {
      return curryHelper;
    }
  };
}

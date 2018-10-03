/**
 * reduce
 */
export default function reduce(input = [], cb, initial) {
    let initialCopy = initial;

    for (const [index, value] of input.entries()) {
        initialCopy = cb(initialCopy, value, index);
    }

    return initialCopy;

}

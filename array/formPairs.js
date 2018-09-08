/**
 * formPairs
 */
export default function formPairs(array = []) {
    const result = {};

    for (const element of array) {
        result[element[0]] = element[1];
    }

    return result;
}
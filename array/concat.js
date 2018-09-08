/**
 * Concat
 */
export default function concat(...array) {
    const result = [];

    for (const element of array) {
        if (Array.isArray(element)) {
            result.push(...element);
        } else {
            result.push(element);
        }
    }
    return result;
}
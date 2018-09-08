/**
 * flattenDeep
 */
export default function flattenDeep(array = []) {
    const result = [];

    for(const element of array) {
        if (Array.isArray(element)) {
            result.push(...flattenDeep(element));
        } else {
            result.push(element);
        }
    }

    return result;
}
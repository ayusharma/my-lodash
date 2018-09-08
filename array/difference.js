/**
 * Difference
 */
export default function difference(source = [], target = []) {
    const result = [];

    for(const element of source) {
        if (target.includes(element) === false) {
            result.push(element);
        }
    }

    return result;
}
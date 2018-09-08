/**
 * fill
 */
export default function fill(array = [], value, start = 0, end = array.length) {
    for (let i = start; i < end; i += 1) {
        array[i] = value;
    }
    return array;
}
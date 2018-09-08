/**
 * indexOf
 */
export default function indexOf(array, value, fromIndex = 0) {
    let result = array.indexOf(value, fromIndex);
    if (fromIndex < 0 && result > -1) {
        return array.length - result;
    } 
    return result;
}
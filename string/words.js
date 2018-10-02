/**
 * words
 */
export default function words(input='', regex=/[a-zA-Z]+/igm) {
    const regExp = new RegExp(regex);
    const result = input.match(regExp);
    if (result) {
        return result;
    }
    return '';
}

/**
 * DifferenceBy
 */
export default function differenceBy(source = [], target = [], iteratee = () => {}) {
    const result = [];
    const modifiedTarget = target.map(iteratee);

    for (const element of source) {
        if (modifiedTarget.includes(iteratee(element)) === false){
            result.push(element);
        }
    }

    return result;
}

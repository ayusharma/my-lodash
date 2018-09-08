import drop from './drop'

/**
 * dropRight
 */
export default function dropRight(array = [], start = 1) {
    const arrayCopy = [...array].reverse();
    return [...drop(arrayCopy, start)].reverse();
}

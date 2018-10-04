/**
 * Flip
 */
export default function flip(fn) {
    return function (...args) {
        return fn(...[...args].reverse())
    }
}
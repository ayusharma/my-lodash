/**
 * endsWith
 */

export default function endsWith(string, target, position) {
  const start = (position || string.length) - 1;
  const end = target.length;
    const part = string.slice(start, start + end);

  return part === target ? true : false;
}

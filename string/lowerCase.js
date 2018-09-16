import {parser} from './kebabCase';

export default function lowerCase(string) {
    const parsed = parser(string.split(''));
    return parsed.map(e => e.toLowerCase()).join(' ');
}

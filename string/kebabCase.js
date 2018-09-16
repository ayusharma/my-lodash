/**
 * Kebab Case
 */


export function parser(tokens = []) {
    const result = [];
    let AZ = [], az = [], i;
    for (i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        AZ.push(letter);
    }
    for (i = 97; i <= 122; i++) {
        const letter = String.fromCharCode(i);
        az.push(letter);
    }
    let flag;
    let parsed = '';
    i = 0;
    while (i < tokens.length) {
        // assign a flag
        if (!flag && AZ.includes(tokens[i])) {
            flag = 'AZ';
            parsed += tokens[i];
        }
        if (!flag && az.includes(tokens[i])) {
            flag = 'az';
            parsed += tokens[i];
        }

        if (AZ.includes(tokens[i + 1]) && flag === 'AZ') {
            parsed += tokens[i + 1];
        } else if (az.includes(tokens[i + 1]) && (flag === 'az' || flag === 'AZ')) {
            parsed += tokens[i + 1];
        } else {
            if(parsed.length) result.push(parsed);
            parsed = '';
            flag = undefined;
        }
        i += 1;
    }
    return result;
}


export default function kebabCase(string) {
    const tokens = string.split('');
    const pp = parser(tokens);
    return pp.map(e => e.toLowerCase(e)).join('-');
}
import curry from '../curry';

function add(a,b,c) {
    return a+b+c;
}

test('curry', () => {
    const fn = curry(add);
    expect(fn(1)(2)(3)).toEqual(6);
});

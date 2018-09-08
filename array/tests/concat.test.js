import concat from '../concat';

test('concat', () => {
    const array = [1];
    const output = [1, 2, 3, [4], 5];
    expect(concat(array, 2, [3], [[4], 5])).toEqual(output);
    expect(array).toEqual([1]);
});

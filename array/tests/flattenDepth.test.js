import flattenDepth from '../flattenDepth';

test('flattenDepth', () => {
    const array = [1, [2, [3, [4]], 5]];

    expect(flattenDepth(array, 1)).toEqual([1, 2, [3, [4]], 5]);
    expect(flattenDepth(array, 2)).toEqual([1, 2, 3, [4], 5]);
});

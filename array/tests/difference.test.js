import difference from '../difference';

test('difference', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
    expect(difference([], [2, 3])).toEqual([]);
    expect(difference([2], [2, 3])).toEqual([]);
    expect(difference([1], [2, 3])).toEqual([1]);
});

import differenceBy from '../differenceBy';

test('differenceBy', () => {
    expect(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([1.2]);
})
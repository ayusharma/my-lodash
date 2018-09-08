import indexOf from '../indexOf';

test('indexOf', () => {
    expect(indexOf([1, 2, 1, 2], 2)).toEqual(1);
    expect(indexOf([1, 2, 1, 2], 2, 2)).toEqual(3);
    expect(indexOf([1, 2, 1, 2], 2, -2)).toEqual(1);
});
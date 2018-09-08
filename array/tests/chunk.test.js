import chunk from '../chunk';

test('chunk 1', () => {
  const array = ['a', 'b', 'c', 'd'];
  expect(chunk(array, 2)).toEqual([['a', 'b'], ['c', 'd']]);
  expect(chunk(array, 3)).toEqual([['a', 'b', 'c'], ['d']]);
});

test('chunk 2', () => {
  const array = [0, 1, 2, 3, 4, 5];
    expect(chunk(array, 4)).toEqual([[0, 1, 2, 3], [4, 5]]);
});

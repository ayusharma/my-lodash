import map from '../map';

test('map', () => {
  const arr = [1, 2, 3];
  expect(map(arr, a => Math.pow(a, 2))).toEqual([1, 4, 9]);
  expect(map(arr, a => a + 5)).toEqual([6, 7, 8]);
});

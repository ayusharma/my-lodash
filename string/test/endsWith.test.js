import endsWith from '../endsWith';

test('endsWith', () => {
  expect(endsWith('abc', 'c')).toBeTruthy();
  expect(endsWith('abc', 'b')).toBeFalsy();
  expect(endsWith('abc', 'b', 2)).toBeTruthy();
});

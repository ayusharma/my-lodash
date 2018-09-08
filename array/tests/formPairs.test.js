import formPairs from '../formPairs';

test('formPairs', () => {
  expect(formPairs([['a', 1], ['b', 2]])).toEqual({ a: 1, b: 2 });
});

import words from '../words';

test('words', () => {
  expect(words('fred, barney, & pebbles')).toEqual([
    'fred',
    'barney',
    'pebbles'
  ]);
  expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual([
    'fred',
    'barney',
    '&',
    'pebbles'
  ]);
});

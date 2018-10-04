import flip from '../flip';

function flipper(a, b, c, d) {
  return `${a} ${b} ${c} ${d}`;
}

test('flip', () => {
  expect(flip(flipper)(1, 2, 3, 4)).toEqual('4 3 2 1');
});

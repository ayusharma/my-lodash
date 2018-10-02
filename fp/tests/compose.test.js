import compose from '../compose';

function add2(a) {
  return 2 + a;
}

function triple(a) {
  return 3 * a;
}

test('compose', () => {
  const fn1 = compose(
    add2,
    triple
  );

  const fn2 = compose(
    triple,
    add2
  );

  expect(fn1(5)).toEqual(17);
  expect(fn2(5)).toEqual(21);
});

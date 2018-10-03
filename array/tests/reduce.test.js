import reduce from '../reduce';

test('reduce', () => {
  const arr = [1, 2, 3, 4, 5];

  expect(
    reduce(
      arr,
      (res, val) => {
        return res + val;
      },
      0
    )
  ).toEqual(15);

    expect(
        reduce(
            arr,
            (res, val) => {
                res.push(val+2)
                return res;
            },
            []
        )
    ).toEqual([3,4,5,6,7]);
});

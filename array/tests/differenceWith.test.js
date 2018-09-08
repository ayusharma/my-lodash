import isEqual from 'lodash/isEqual';
import differenceWith from '../differenceWith';

test('differenceWith 1', () => {
  const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }];

  expect(differenceWith(objects, [{ x: 1, y: 2 }], isEqual)).toEqual([
    { x: 2, y: 1 }
  ]);
});

test('differenceWith 2', () => {
  const array = [1, 2, 3];
  expect(differenceWith(array, [3, 4, 5], isEqual)).toEqual([1, 2]);
});

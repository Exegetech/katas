const { NumArray } = require('../src/rangeSumQueryImmutable');

test('NumArray', () => {
  const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);

  expect(numArray.sumRange(0, 2)).toBe(1);
  expect(numArray.sumRange(2, 5)).toBe(-1);
  expect(numArray.sumRange(0, 5)).toBe(-3);
});

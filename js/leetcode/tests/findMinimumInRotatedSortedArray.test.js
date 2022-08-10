const { findMin } = require('../src/findMinimumInRotatedSortedArray');

test('findMin', () => {
  const nums = [3, 4, 5, 1, 2];
  const output = 1;

  expect(findMin(nums)).toEqual(output);
});

test('findMin', () => {
  const nums = [4, 5, 6, 7, 0, 1, 2];
  const output = 0;

  expect(findMin(nums)).toEqual(output);
});

test('findMin', () => {
  const nums = [11, 13, 15, 17];
  const output = 11;

  expect(findMin(nums)).toEqual(output);
});

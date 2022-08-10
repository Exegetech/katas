const { maxSubArray } = require('../src/maximumSubarray');

test('maxSubArray', () => {
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  const output = 6;

  expect(maxSubArray(nums)).toEqual(output);
});

test('maxSubArray', () => {
  const nums = [1];
  const output = 1;

  expect(maxSubArray(nums)).toEqual(output);
});

test('maxSubArray', () => {
  const nums = [5, 4, -1, 7, 8];
  const output = 23;

  expect(maxSubArray(nums)).toEqual(output);
});

test('maxSubArray', () => {
  const nums = [-2, -1];
  const output = -1;

  expect(maxSubArray(nums)).toEqual(output);
});

const { lengthOfLIS } = require('../src/longestIncreasingSubsequence');

test('lengthOfLIS', () => {
  const nums = [10, 9, 2, 5, 3, 7, 101, 18];
  const output = 4;

  expect(lengthOfLIS(nums)).toEqual(output);
});

test('lengthOfLIS', () => {
  const nums = [0, 1, 0, 3, 2, 3];
  const output = 4;

  expect(lengthOfLIS(nums)).toEqual(output);
});

test('lengthOfLIS', () => {
  const nums = [7, 7, 7, 7, 7, 7, 7];
  const output = 1;

  expect(lengthOfLIS(nums)).toEqual(output);
});

test('lengthOfLIS', () => {
  const nums = [2, 1];
  const output = 1;

  expect(lengthOfLIS(nums)).toEqual(output);
});

test('lengthOfLIS', () => {
  const nums = [4, 10, 4, 3, 8, 9];
  const output = 3;

  expect(lengthOfLIS(nums)).toEqual(output);
});

test('lengthOfLIS', () => {
  const nums = [1, 3, 6, 7, 9, 4, 10, 5, 6];
  const output = 6;

  expect(lengthOfLIS(nums)).toEqual(output);
});

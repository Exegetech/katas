const { findMaxConsecutiveOnes } = require('../src/maxConsecutiveOnesII');

test('1', () => {
  const nums = [1, 0, 1, 1, 0];
  const output = 4;

  expect(findMaxConsecutiveOnes(nums)).toEqual(output);
});

test('2', () => {
  const nums = [1, 0, 1, 1, 0, 1];
  const output = 4;

  expect(findMaxConsecutiveOnes(nums)).toEqual(output);
});

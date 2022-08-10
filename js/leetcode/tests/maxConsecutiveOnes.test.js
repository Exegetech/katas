const { findMaxConsecutiveOnes } = require('../src/maxConsecutiveOnes');

test('1', () => {
  const nums = [1, 0, 1, 1, 0, 1];

  expect(findMaxConsecutiveOnes(nums)).toEqual(2);
});

test('2', () => {
  const nums = [1];

  expect(findMaxConsecutiveOnes(nums)).toEqual(1);
});

test('3', () => {
  const nums = [0];

  expect(findMaxConsecutiveOnes(nums)).toEqual(0);
});

test('4', () => {
  const nums = [];

  expect(findMaxConsecutiveOnes(nums)).toEqual(0);
});

test('5', () => {
  const nums = [0, 0, 0, 0];

  expect(findMaxConsecutiveOnes(nums)).toEqual(0);
});

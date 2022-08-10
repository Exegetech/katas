const { findNumbers } = require('../src/findNumbersWithEvenNumberOfDigits');

test('1', () => {
  const nums = [12, 345, 2, 6, 7896];
  const output = 2;

  expect(findNumbers(nums)).toEqual(output);
});

test('2', () => {
  const nums = [555, 901, 482, 1771];
  const output = 1;

  expect(findNumbers(nums)).toEqual(output);
});

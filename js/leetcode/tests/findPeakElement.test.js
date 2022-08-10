const { findPeakElement } = require('../src/findPeakElement');

test('findPeakElement', () => {
  const nums = [1, 2, 3, 1];
  const output = 2;

  expect(findPeakElement(nums)).toEqual(output);
});

test('findPeakElement', () => {
  const nums = [1, 2, 1, 3, 5, 6, 4];
  const output = 5;

  expect(findPeakElement(nums)).toEqual(output);
});

test('findPeakElement', () => {
  const nums = [2, 1];
  const output = 0;

  expect(findPeakElement(nums)).toEqual(output);
});

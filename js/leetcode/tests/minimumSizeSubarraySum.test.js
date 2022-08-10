const { minSubArrayLen } = require('../src/minimumSizeSubarraySum');

test('1', () => {
  const target = 7;
  const nums = [2, 3, 1, 2, 4, 3];

  expect(minSubArrayLen(target, nums)).toEqual(2);
});

test('2', () => {
  const target = 4;
  const nums = [1, 4, 4];
  expect(minSubArrayLen(target, nums)).toEqual(1);
});

test('3', () => {
  const target = 11;
  const nums = [1, 1, 1, 1, 1, 1, 1, 1];
  expect(minSubArrayLen(target, nums)).toEqual(0);
});

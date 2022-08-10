const { twoSum } = require('../src/twoSum');

test('1', () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  const output = [0, 1];

  expect(twoSum(nums, target)).toEqual(output);
});

test('2', () => {
  const nums = [3, 2, 4];
  const target = 6;
  const output = [1, 2];

  expect(twoSum(nums, target)).toEqual(output);
});

test('3', () => {
  const nums = [3, 3];
  const target = 6;
  const output = [0, 1];

  expect(twoSum(nums, target)).toEqual(output);
});

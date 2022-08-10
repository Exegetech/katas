const { moveZeroes } = require('../src/moveZeroes');

test('1', () => {
  const nums = [0, 1, 0, 3, 12];
  const output = [1, 3, 12, 0, 0];

  moveZeroes(nums);
  expect(nums).toEqual(output);
});

test('2', () => {
  const nums = [0];
  const output = [0];

  moveZeroes(nums);
  expect(nums).toEqual(output);
});

const { rotate } = require('../src/rotateArray');

test('rotate', () => {
  const nums = [1, 2, 3, 4, 5, 6, 7];
  const k = 3;
  const output = [5, 6, 7, 1, 2, 3, 4];

  rotate(nums, k);
  expect(nums).toEqual(output);
});

test('rotate', () => {
  const nums = [-1, -100, 3, 99];
  const k = 2;
  const output = [3, 99, -1, -100];

  rotate(nums, k);

  expect(nums).toEqual(output);
});

test('rotate', () => {
  const nums = [-1];
  const k = 2;
  const output = [-1];

  rotate(nums, k);

  expect(nums).toEqual(output);
});

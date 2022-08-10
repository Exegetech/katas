const { search } = require('../src/binarySearch');

test('search', () => {
  const nums = [-1, 0, 3, 5, 9, 12];
  const target = 9;
  const output = 4;

  expect(search(nums, target)).toEqual(output);
});

test('search', () => {
  const nums = [-1, 0, 3, 5, 9, 12];
  const target = 2;
  const output = -1;

  expect(search(nums, target)).toEqual(output);
});

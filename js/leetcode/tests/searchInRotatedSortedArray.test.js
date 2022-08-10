const { search } = require('../src/searchInRotatedSortedArray');

test('search', () => {
  const nums = [4, 5, 6, 7, 0, 1, 2];
  const target = 0;
  const output = 4;

  expect(search(nums, target)).toEqual(output);
});

test('search', () => {
  const nums = [4, 5, 6, 7, 0, 1, 2];
  const target = 3;
  const output = -1;

  expect(search(nums, target)).toEqual(output);
});

test('search', () => {
  const nums = [1];
  const target = 0;
  const output = -1;

  expect(search(nums, target)).toEqual(output);
});

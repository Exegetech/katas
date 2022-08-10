const { searchInsert } = require('../src/searchInsertPosition');

test('searchInsert', () => {
  const nums = [1, 3, 5, 6];
  const target = 5;
  const output = 2;

  expect(searchInsert(nums, target)).toEqual(output);
});

test('searchInsert', () => {
  const nums = [1, 3, 5, 6];
  const target = 2;
  const output = 1;

  expect(searchInsert(nums, target)).toEqual(output);
});

test('searchInsert', () => {
  const nums = [1, 3, 5, 6];
  const target = 7;
  const output = 4;

  expect(searchInsert(nums, target)).toEqual(output);
});

test('searchInsert', () => {
  const nums = [1, 3, 5, 6];
  const target = 0;
  const output = 0;

  expect(searchInsert(nums, target)).toEqual(output);
});

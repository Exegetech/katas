const { searchRange } = require('../src/searchForARange');

test.skip('searchRange', () => {
  const nums = [5, 7, 7, 8, 8, 10];
  const target = 8;
  const output = [3, 4];

  expect(searchRange(nums, target)).toEqual(output);
});

test.skip('searchRange', () => {
  const nums = [5, 7, 7, 8, 8, 10];
  const target = 6;
  const output = [-1, -1];

  expect(searchRange(nums, target)).toEqual(output);
});

test.skip('searchRange', () => {
  const nums = [];
  const target = 0;
  const output = [-1, -1];

  expect(searchRange(nums, target)).toEqual(output);
});

test.skip('searchRange', () => {
  const nums = [3, 3, 3];
  const target = 3;
  const output = [0, 2];

  expect(searchRange(nums, target)).toEqual(output);
});

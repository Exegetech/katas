const { removeDuplicates } = require('../src/removeDuplicatesFromSortedArray');

test('1', () => {
  const nums = [1, 1, 2];

  expect(removeDuplicates(nums)).toEqual(2);

  expect(nums[0]).toEqual(1);
  expect(nums[1]).toEqual(2);
});

test('1', () => {
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

  expect(removeDuplicates(nums)).toEqual(5);

  expect(nums[0]).toEqual(0);
  expect(nums[1]).toEqual(1);
  expect(nums[2]).toEqual(2);
  expect(nums[3]).toEqual(3);
  expect(nums[4]).toEqual(4);
});

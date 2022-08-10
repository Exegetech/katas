const { removeElement } = require('../src/removeElement');

test('1', () => {
  const nums = [3, 2, 2, 3];
  const val = 2;

  expect(removeElement(nums, val)).toEqual(2);

  expect(nums[0]).toEqual(3);
  expect(nums[1]).toEqual(3);
});

test('2', () => {
  const nums = [0, 1, 2, 2, 3, 0, 4, 2];
  const val = 2;

  expect(removeElement(nums, val)).toEqual(5);

  expect(nums[0]).toEqual(0);
  expect(nums[1]).toEqual(1);
  expect(nums[2]).toEqual(3);
  expect(nums[3]).toEqual(0);
  expect(nums[4]).toEqual(4);
});

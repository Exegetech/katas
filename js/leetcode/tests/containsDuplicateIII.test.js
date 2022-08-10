const {
  containsNearbyAlmostDuplicate,
} = require('../src/containsDuplicateIII');

test('1', () => {
  const nums = [1, 2, 3, 1];
  const k = 3;
  const t = 0;
  const output = true;

  expect(containsNearbyAlmostDuplicate(nums, k, t)).toEqual(output);
});

test('2', () => {
  const nums = [1, 0, 1, 1];
  const k = 1;
  const t = 2;
  const output = true;

  expect(containsNearbyAlmostDuplicate(nums, k, t)).toEqual(output);
});

test('3', () => {
  const nums = [1, 5, 9, 1, 5, 9];
  const k = 2;
  const t = 3;
  const output = false;

  expect(containsNearbyAlmostDuplicate(nums, k, t)).toEqual(output);
});

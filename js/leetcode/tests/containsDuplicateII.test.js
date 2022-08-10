const { containsNearbyDuplicate } = require('../src/containsDuplicateII');

test('1', () => {
  const nums = [1, 2, 3, 1];
  const k = 3;
  const output = true;

  expect(containsNearbyDuplicate(nums, k)).toEqual(output);
});

test('2', () => {
  const nums = [1, 0, 1, 1];
  const k = 1;
  const output = true;

  expect(containsNearbyDuplicate(nums, k)).toEqual(output);
});

test('3', () => {
  const nums = [1, 2, 3, 1, 2, 3];
  const k = 2;
  const output = false;

  expect(containsNearbyDuplicate(nums, k)).toEqual(output);
});

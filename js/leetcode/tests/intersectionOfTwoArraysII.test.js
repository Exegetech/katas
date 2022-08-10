const { intersect } = require('../src/intersectionOfTwoArraysII');

test('1', () => {
  const nums1 = [1, 2, 2, 1];
  const nums2 = [2, 2];
  const output = [2, 2];

  expect(intersect(nums1, nums2)).toEqual(output);
});

test('2', () => {
  const nums1 = [4, 9, 5];
  const nums2 = [9, 4, 9, 8, 4];
  const output = [9, 4];

  expect(intersect(nums1, nums2)).toEqual(output);
});

const {
  sortedArrayToBST,
} = require('../src/convertSortedArrayToBinarySearchTree');
const { serialize } = require('./helpers/treeNode');

test('1', () => {
  const nums = [-10, -3, 0, 5, 9];
  const output = [0, -3, 9, -10, null, 5];

  expect(serialize(sortedArrayToBST(nums))).toEqual(output);
});

test('2', () => {
  const nums = [1, 3];
  const output = [3, 1];

  expect(serialize(sortedArrayToBST(nums))).toEqual(output);
});

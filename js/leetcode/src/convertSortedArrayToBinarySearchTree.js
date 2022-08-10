const { TreeNode } = require('../tests/helpers/treeNode');

const sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }

  if (nums.length === 1) {
    return new TreeNode(nums[0]);
  }

  const middle = Math.floor(nums.length / 2);
  const leftArr = nums.slice(0, middle);
  const rightArr = nums.slice(middle + 1);

  const node = new TreeNode(nums[middle]);
  node.left = sortedArrayToBST(leftArr);
  node.right = sortedArrayToBST(rightArr);

  return node;
};

module.exports = { sortedArrayToBST };

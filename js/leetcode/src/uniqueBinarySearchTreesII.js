const { TreeNode } = require('../tests/helpers/treeNode');

const generateTrees = function (n) {
  const nums = makeNumsArr(n);
  const result = recurse(nums);

  // console.log(result)
  return result;
};

function makeNumsArr(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  return arr;
}

function recurse(nums) {
  if (nums.length === 1) {
    return [new TreeNode(nums[0])];
  }

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const leftArr = nums.slice(0, i - 1);
    const rightArr = nums.slice(i + 2);

    const leftTrees = recurse(leftArr);
    const rightTrees = recurse(rightArr);

    for (const l of leftTrees) {
      for (const r of rightTrees) {
        const root = new TreeNode(i);
        root.left = l;
        root.right = r;

        result.push(root);
      }
    }
  }

  return result;
}

module.exports = { generateTrees };

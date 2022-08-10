const hasPathSum = function (root, targetSum) {
  if (root === null) {
    return false;
  }

  return recurse(root, targetSum);
};

function recurse(root, targetSum) {
  if (root.left === null && root.right === null) {
    return root.val === targetSum;
  }

  let hasLeftPathSum = false;

  if (root.left) {
    hasLeftPathSum = hasPathSum(root.left, targetSum - root.val);
  }

  let hasRightPathSum = false;

  if (root.right) {
    hasRightPathSum = hasPathSum(root.right, targetSum - root.val);
  }

  return hasLeftPathSum || hasRightPathSum;
}

module.exports = { hasPathSum };

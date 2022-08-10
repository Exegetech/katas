const maxPathSum = function (root) {
  let maxPathSum = Number.NEGATIVE_INFINITY;

  function recurse(node) {
    if (node === null) {
      return {
        left: Number.NEGATIVE_INFINITY,
        right: Number.NEGATIVE_INFINITY,
      };
    }

    if (node.left === null && node.right === null) {
      maxPathSum = Math.max(maxPathSum, node.val);
      return {
        left: node.val,
        right: node.val,
      };
    }

    const subLeft = recurse(node.left);
    const subRight = recurse(node.right);

    const leftMax = Math.max(subLeft.left, subLeft.right);
    const rightMax = Math.max(subRight.left, subRight.right);

    maxPathSum = Math.max(maxPathSum, node.val, node.val + leftMax + rightMax);

    return {
      left: node.val + leftMax,
      right: node.val + rightMax,
    };
  }

  recurse(root);

  return maxPathSum;
};

module.exports = { maxPathSum };

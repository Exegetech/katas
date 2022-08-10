const maxDepth = function (root) {
  if (root === null) {
    return 0;
  }

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  const max = Math.max(left, right);

  return 1 + max;
};

module.exports = { maxDepth };

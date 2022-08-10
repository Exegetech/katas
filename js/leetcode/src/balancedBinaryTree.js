const isBalanced = function (root) {
  const result = recurse(root);
  return result.balanced;
};

function recurse(root) {
  if (root === null) {
    return {
      height: 0,
      balanced: true,
    };
  }

  const left = recurse(root.left);
  const right = recurse(root.right);

  const balanced =
    left.balanced &&
    right.balanced &&
    Math.abs(left.height - right.height) <= 1;

  const height = 1 + Math.max(left.height, right.height);

  return {
    height,
    balanced,
  };
}

module.exports = { isBalanced };

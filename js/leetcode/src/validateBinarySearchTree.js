const isValidBST = function (root) {
  const result = recurse(root);
  return result.valid;
};

function recurse(root) {
  if (root.left === null && root.right === null) {
    return {
      valid: true,
      max: root.val,
      min: root.val,
    };
  }

  if (root.right && root.left) {
    const leftResult = recurse(root.left);
    const rightResult = recurse(root.right);

    const currValid =
      leftResult.valid &&
      leftResult.max < root.val &&
      rightResult.valid &&
      rightResult.min > root.val &&
      root.left.val < root.val &&
      root.right.val > root.val;

    const min = Math.min(root.val, leftResult.min);
    const max = Math.max(root.val, rightResult.max);

    return { valid: currValid, min, max };
  }

  if (root.left) {
    const leftResult = recurse(root.left);

    const currValid =
      leftResult.valid && leftResult.max < root.val && root.left.val < root.val;

    const min = Math.min(root.val, leftResult.min);
    const max = Math.max(root.val, leftResult.max);

    return { valid: currValid, min, max };
  }

  const rightResult = recurse(root.right);

  const currValid =
    rightResult.valid &&
    rightResult.min > root.val &&
    root.right.val > root.val;

  const min = Math.min(root.val, rightResult.min);
  const max = Math.max(root.val, rightResult.max);

  return { valid: currValid, min, max };
}

module.exports = { isValidBST };

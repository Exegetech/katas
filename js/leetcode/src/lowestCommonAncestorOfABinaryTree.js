const lowestCommonAncestor = function (root, p, q) {
  if (root === null) {
    return null;
  }

  if (root.val === p.val || root.val === q.val) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left !== null && right !== null) {
    return root;
  }

  if (left !== null) {
    return left;
  }

  if (right !== null) {
    return right;
  }

  return null;
};

module.exports = { lowestCommonAncestor };

const isSymmetric = function (root) {
  return recurse(root, root);
};

function recurse(nodeL, nodeR) {
  if (nodeL === null && nodeR === null) {
    return true;
  }

  if (nodeL === null || nodeR === null) {
    return false;
  }

  const thisSame = nodeL.val === nodeR.val;
  const outerSame = recurse(nodeL.right, nodeR.left);
  const innerSame = recurse(nodeL.left, nodeR.right);

  return thisSame && outerSame && innerSame;
}

module.exports = { isSymmetric };

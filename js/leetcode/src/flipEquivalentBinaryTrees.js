const flipEquiv = function (root1, root2) {
  if (root1 === null && root2 === null) {
    return true;
  }

  if (root1 === null || root2 === null) {
    return false;
  }

  return recurse(root1, root2);
};

function recurse(root1, root2) {
  if (root1 === null || root2 === null) {
    return true;
  }

  const thisSame = root1.val === root2.val;

  const subCanFlip =
    recurse(root1.left, root2.right) && recurse(root1.right, root2.left);

  return thisSame && subCanFlip;
}

module.exports = { flipEquiv };

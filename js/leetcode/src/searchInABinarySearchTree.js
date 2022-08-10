const searchBST = function (root, val) {
  if (!root) {
    return null;
  }

  if (root.val === val) {
    return root;
  }

  if (val < root.val) {
    return searchBST(root.left, val);
  }

  return searchBST(root.right, val);
};

const searchBST2 = function (root, val) {
  if (root === null) {
    return null;
  }

  let node = root;
  while (node !== null) {
    if (node.val === val) {
      return node;
    }

    if (val < node.val) {
      node = node.left;
    } else {
      node = node.right;
    }
  }

  return null;
};

module.exports = { searchBST, searchBST2 };

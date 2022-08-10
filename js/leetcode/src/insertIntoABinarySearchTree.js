const { TreeNode } = require('../tests/helpers/treeNode');

const insertIntoBST = function (root, val) {
  if (root === null) {
    return new TreeNode(val);
  }

  if (val < root.val) {
    const left = insertIntoBST(root.left, val);
    root.left = left;
    return root;
  }

  const right = insertIntoBST(root.right, val);
  root.right = right;
  return root;
};

module.exports = { insertIntoBST };

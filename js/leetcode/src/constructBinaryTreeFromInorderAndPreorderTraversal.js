const { TreeNode } = require('../tests/helpers/treeNode');

const buildTree = function (preorder, inorder) {
  if (inorder.length === 0) {
    return null;
  }

  const { val: rootVal, inorderIdx: rootIdx } = findRootVal(preorder, inorder);

  const leftInorder = inorder.slice(0, rootIdx);
  const rightInorder = inorder.slice(rootIdx + 1);

  const root = new TreeNode(rootVal);
  root.left = buildTree(preorder, leftInorder);
  root.right = buildTree(preorder, rightInorder);

  return root;
};

function findRootVal(preorder, inorder) {
  for (let i = 0; i < preorder.length; i++) {
    for (let j = 0; j < inorder.length; j++) {
      if (preorder[i] === inorder[j]) {
        return {
          val: preorder[i],
          inorderIdx: j,
        };
      }
    }
  }
}

module.exports = { buildTree };

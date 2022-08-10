const { TreeNode } = require('../tests/helpers/treeNode');

const buildTree = function (inorder, postorder) {
  if (inorder.length === 0) {
    return null;
  }

  const { val: rootVal, inorderIdx: rootIdx } = findRootVal(inorder, postorder);

  const leftInorder = inorder.slice(0, rootIdx);
  const rightInorder = inorder.slice(rootIdx + 1);

  const root = new TreeNode(rootVal);
  root.left = buildTree(leftInorder, postorder);
  root.right = buildTree(rightInorder, postorder);

  return root;
};

function findRootVal(inorder, postorder) {
  for (let i = postorder.length - 1; i >= 0; i--) {
    for (let j = 0; j < inorder.length; j++) {
      if (postorder[i] === inorder[j]) {
        return {
          val: postorder[i],
          inorderIdx: j,
        };
      }
    }
  }
}

module.exports = { buildTree };

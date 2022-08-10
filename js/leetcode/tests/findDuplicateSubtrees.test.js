const { findDuplicateSubtrees } = require('../src/findDuplicateSubtrees');
const { TreeNode } = require('./helpers/treeNode');

test('findDuplicateSubtrees', () => {
  const n1 = new TreeNode(1);
  const n2 = new TreeNode(2);
  const n3 = new TreeNode(3);
  const n4 = new TreeNode(4);
  const n2b = new TreeNode(2);
  const n4b = new TreeNode(4);
  const n4c = new TreeNode(4);

  n1.left = n2;
  n1.right = n3;

  n2.left = n4;

  n3.left = n2b;
  n3.right = n4c;

  n2b.left = n4b;

  const result = findDuplicateSubtrees(n1);

  // Need to fill this test case
});

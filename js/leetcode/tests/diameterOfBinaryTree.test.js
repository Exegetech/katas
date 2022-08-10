const { diameterOfBinaryTree } = require('../src/diameterOfBinaryTree');
const { TreeNode } = require('./helpers/treeNode');

test('diameterOfBinaryTree', () => {
  const node1 = new TreeNode(1);
  const node2 = new TreeNode(2);
  const node3 = new TreeNode(3);
  const node4 = new TreeNode(4);
  const node5 = new TreeNode(5);

  node1.left = node2;
  node1.right = node3;
  node2.left = node4;
  node2.right = node5;

  const output = 3;

  expect(diameterOfBinaryTree(node1)).toEqual(output);
});

test('diameterOfBinaryTree', () => {
  const node1 = new TreeNode(1);
  const node2 = new TreeNode(2);

  node1.left = node2;

  const output = 1;

  expect(diameterOfBinaryTree(node1)).toEqual(output);
});

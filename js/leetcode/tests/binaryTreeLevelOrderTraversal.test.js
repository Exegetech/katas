const { levelOrder } = require('../src/binaryTreeLevelOrderTraversal');
const { TreeNode } = require('./helpers/treeNode');

test('1', () => {
  const root = null;
  const output = [];

  expect(levelOrder(root)).toEqual(output);
});

test('2', () => {
  const root = new TreeNode(1);
  const output = [[1]];

  expect(levelOrder(root)).toEqual(output);
});

test('3', () => {
  const node3 = new TreeNode(3);
  const node9 = new TreeNode(9);
  const node20 = new TreeNode(20);
  const node15 = new TreeNode(15);
  const node7 = new TreeNode(7);

  node3.left = node9;
  node3.right = node20;
  node20.left = node15;
  node20.right = node7;

  const output = [[3], [9, 20], [15, 7]];

  expect(levelOrder(node3)).toEqual(output);
});

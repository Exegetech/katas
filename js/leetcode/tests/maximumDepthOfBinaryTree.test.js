const { maxDepth } = require('../src/maximumDepthOfBinaryTree');
const { TreeNode } = require('./helpers/treeNode');

test('1', () => {
  expect(maxDepth(null)).toEqual(0);
});

test('2', () => {
  const node1 = new TreeNode(1);
  const output = 1;
  expect(maxDepth(node1)).toEqual(output);
});

test('3', () => {
  const node1 = new TreeNode(1);
  const node2 = new TreeNode(2);

  node1.left = null;
  node1.right = node2;

  const output = 2;

  expect(maxDepth(node1)).toEqual(output);
});

test('4', () => {
  const node3 = new TreeNode(3);
  const node9 = new TreeNode(9);
  const node20 = new TreeNode(20);
  const node15 = new TreeNode(15);
  const node7 = new TreeNode(7);

  node3.left = node9;
  node3.right = node20;
  node20.left = node15;
  node20.right = node7;

  const output = 3;

  expect(maxDepth(node3)).toEqual(output);
});

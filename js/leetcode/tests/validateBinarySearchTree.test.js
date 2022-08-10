const { isValidBST } = require('../src/validateBinarySearchTree');
const { TreeNode } = require('./helpers/treeNode');

test('1', () => {
  const node2 = new TreeNode(2);
  const node1 = new TreeNode(1);
  const node3 = new TreeNode(3);

  node2.left = node1;
  node2.right = node3;

  const output = true;

  expect(isValidBST(node2)).toEqual(output);
});

test('2', () => {
  const node5 = new TreeNode(5);
  const node1 = new TreeNode(1);
  const node4 = new TreeNode(4);
  const node3 = new TreeNode(3);
  const node6 = new TreeNode(6);

  node5.left = node1;
  node5.right = node4;
  node4.left = node3;
  node4.right = node6;

  const output = false;

  expect(isValidBST(node5)).toEqual(output);
});

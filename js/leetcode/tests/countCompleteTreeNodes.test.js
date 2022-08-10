const { countNodes } = require('../src/countCompleteTreeNodes');
const { TreeNode } = require('./helpers/treeNode');

test('countNodes', () => {
  const node1 = new TreeNode(1);
  const node2 = new TreeNode(2);
  const node3 = new TreeNode(3);
  const node4 = new TreeNode(4);
  const node5 = new TreeNode(5);
  const node6 = new TreeNode(6);

  node1.left = node2;
  node1.right = node3;
  node2.left = node4;
  node2.right = node5;
  node3.left = node6;

  const output = 6;

  expect(countNodes(node1)).toBe(output);
});

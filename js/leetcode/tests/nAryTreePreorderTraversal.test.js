const { preorder } = require('../src/nAryTreePreorderTraversal');
const { TreeNode } = require('./helpers/nAryNode');

test('preorder', () => {
  const node1 = new TreeNode(1);
  const node2 = new TreeNode(2);
  const node3 = new TreeNode(3);
  const node4 = new TreeNode(4);
  const node5 = new TreeNode(5);
  const node6 = new TreeNode(6);

  node1.children = [node3, node2, node4];

  node3.children = [node5, node6];

  const output = [1, 3, 5, 6, 2, 4];

  expect(preorder(node1)).toEqual(output);
});

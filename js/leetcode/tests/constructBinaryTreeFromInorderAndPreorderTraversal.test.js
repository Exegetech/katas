const {
  buildTree,
} = require('../src/constructBinaryTreeFromInorderAndPreorderTraversal');
const { serialize, deserialize } = require('./helpers/treeNode');

test('1', () => {
  const inorder = [9, 3, 15, 20, 7];
  const preorder = [3, 9, 20, 15, 7];

  const output = [3, 9, 20, null, null, 15, 7];

  expect(serialize(buildTree(preorder, inorder))).toEqual(output);
});

test('2', () => {
  const inorder = [-1];
  const preorder = [-1];
  const output = [-1];

  expect(serialize(buildTree(preorder, inorder))).toEqual(output);
});

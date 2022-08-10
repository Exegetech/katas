const {
  buildTree,
} = require('../src/constructBinaryTreeFromInorderAndPostorderTraversal');
const { serialize, deserialize } = require('./helpers/treeNode');

test('1', () => {
  const inorder = [9, 3, 15, 20, 7];
  const postorder = [9, 15, 7, 20, 3];
  const output = [3, 9, 20, null, null, 15, 7];

  expect(serialize(buildTree(inorder, postorder))).toEqual(output);
});

test('2', () => {
  const inorder = [-1];
  const postorder = [-1];
  const output = [-1];

  expect(serialize(buildTree(inorder, postorder))).toEqual(output);
});

const {
  lowestCommonAncestor,
} = require('../src/lowestCommonAncestorOfABinaryTree');
const { deserialize, TreeNode } = require('./helpers/treeNode');

test('1', () => {
  const root = deserialize([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
  const p = new TreeNode(5);
  const q = new TreeNode(1);
  const output = 3;

  expect(lowestCommonAncestor(root, p, q).val).toEqual(output);
});

test('2', () => {
  const root = deserialize([1, 2]);
  const p = new TreeNode(1);
  const q = new TreeNode(2);
  const output = 1;

  expect(lowestCommonAncestor(root, p, q).val).toEqual(output);
});

test('3', () => {
  const root = deserialize([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
  const p = new TreeNode(5);
  const q = new TreeNode(4);
  const output = 5;

  expect(lowestCommonAncestor(root, p, q).val).toEqual(output);
});

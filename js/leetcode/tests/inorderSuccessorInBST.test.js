const { inorderSuccessor } = require('../src/inorderSuccessorInBST');
const { deserialize, TreeNode } = require('./helpers/treeNode');

test('1', () => {
  const root = deserialize([2, 1, 3]);
  const p = new TreeNode(1);
  const output = 2;

  expect(inorderSuccessor(root, p).val).toEqual(output);
});

test('2', () => {
  const root = deserialize([5, 3, 6, 2, 4, null, null, 1]);
  const p = new TreeNode(6);
  const output = null;

  expect(inorderSuccessor(root, p)).toEqual(output);
});

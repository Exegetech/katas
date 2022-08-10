const { isBalanced } = require('../src/balancedBinaryTree');
const { deserialize } = require('./helpers/treeNode');

test('1', () => {
  const root = deserialize([3, 9, 20, null, null, 15, 7]);
  const output = true;

  expect(isBalanced(root)).toEqual(output);
});

test('2', () => {
  const root = deserialize([1, 2, 2, 3, 3, null, null, 4, 4]);
  const output = false;

  expect(isBalanced(root)).toEqual(output);
});

test('3', () => {
  const root = deserialize([]);
  const output = true;

  expect(isBalanced(root)).toEqual(output);
});

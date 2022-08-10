const { searchBST, searchBST2 } = require('../src/searchInABinarySearchTree');
const { deserialize, serialize } = require('./helpers/treeNode');

test('1', () => {
  const root = deserialize([4, 2, 7, 1, 3]);
  const val = 2;
  const output = [2, 1, 3];

  expect(serialize(searchBST(root, val))).toEqual(output);
});

test('1', () => {
  const root = deserialize([4, 2, 7, 1, 3]);
  const val = 5;
  const output = [];

  expect(serialize(searchBST(root, val))).toEqual(output);
});

test('3', () => {
  const root = deserialize([4, 2, 7, 1, 3]);
  const val = 2;
  const output = [2, 1, 3];

  expect(serialize(searchBST2(root, val))).toEqual(output);
});

test('4', () => {
  const root = deserialize([4, 2, 7, 1, 3]);
  const val = 5;
  const output = [];

  expect(serialize(searchBST2(root, val))).toEqual(output);
});

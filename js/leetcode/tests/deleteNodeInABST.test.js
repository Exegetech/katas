const { deleteNode } = require('../src/deleteNodeInABST');
const { deserialize, serialize } = require('./helpers/treeNode');

test('1', () => {
  const root = deserialize([5, 3, 6, 2, 4, null, 7]);
  const key = 3;
  const output = [5, 4, 6, 2, null, null, 7];

  expect(serialize(deleteNode(root, key))).toEqual(output);
});

test('2', () => {
  const root = deserialize([5, 3, 6, 2, 4, null, 7]);
  const key = 0;
  const output = [5, 3, 6, 2, 4, null, 7];

  expect(serialize(deleteNode(root, key))).toEqual(output);
});

test('3', () => {
  const root = deserialize([]);
  const key = 0;
  const output = [];

  expect(serialize(deleteNode(root, key))).toEqual(output);
});

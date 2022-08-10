const { insertIntoBST } = require('../src/insertIntoABinarySearchTree');
const { deserialize, serialize } = require('./helpers/treeNode');

test('1', () => {
  const root = deserialize([4, 2, 7, 1, 3]);
  const val = 5;
  const output = [4, 2, 7, 1, 3, 5];

  expect(serialize(insertIntoBST(root, val))).toEqual(output);
});

test('2', () => {
  const root = deserialize([40, 20, 60, 10, 30, 50, 70]);
  const val = 25;
  const output = [40, 20, 60, 10, 30, 50, 70, null, null, 25];

  expect(serialize(insertIntoBST(root, val))).toEqual(output);
});

test('3', () => {
  const root = deserialize([4, 2, 7, 1, 3, null, null, null, null, null, null]);
  const val = 5;
  const output = [4, 2, 7, 1, 3, 5];

  expect(serialize(insertIntoBST(root, val))).toEqual(output);
});

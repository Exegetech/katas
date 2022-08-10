const { BSTIterator } = require('../src/binarySearchTreeIterator');
const { deserialize } = require('./helpers/treeNode');

test('1', () => {
  const root = deserialize([7, 3, 15, null, null, 9, 20]);
  const bSTIterator = new BSTIterator(root);
  expect(bSTIterator.next()).toEqual(3);
  expect(bSTIterator.next()).toEqual(7);
  expect(bSTIterator.hasNext()).toEqual(true);
  expect(bSTIterator.next()).toEqual(9);
  expect(bSTIterator.hasNext()).toEqual(true);
  expect(bSTIterator.next()).toEqual(15);
  expect(bSTIterator.hasNext()).toEqual(true);
  expect(bSTIterator.next()).toEqual(20);
  expect(bSTIterator.hasNext()).toEqual(false);
});

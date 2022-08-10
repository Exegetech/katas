const { closestValue } = require('../src/closestBinarySearchTreeValue');
const { deserialize } = require('./helpers/treeNode');

test('closestValue', () => {
  const root = deserialize([4, 2, 5, 1, 3]);
  const target = 3.714286;
  const output = 4;

  expect(closestValue(root, target)).toEqual(output);
});

test('closestValue', () => {
  const root = deserialize([1]);
  const target = 3.714286;
  const output = 1;

  expect(closestValue(root, target)).toEqual(output);
});

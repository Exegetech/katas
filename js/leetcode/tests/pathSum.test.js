const { hasPathSum } = require('../src/pathSum');
const { deserialize } = require('./helpers/treeNode');

test('1', () => {
  const root = deserialize([
    5,
    4,
    8,
    11,
    null,
    13,
    4,
    7,
    2,
    null,
    null,
    null,
    1,
  ]);
  const targetSum = 22;
  const output = true;

  expect(hasPathSum(root, targetSum)).toEqual(output);
});

test('2', () => {
  const root = deserialize([1, 2, 3]);
  const targetSum = 5;
  const output = false;

  expect(hasPathSum(root, targetSum)).toEqual(output);
});

test('2', () => {
  const root = deserialize([]);
  const targetSum = 0;
  const output = false;

  expect(hasPathSum(root, targetSum)).toEqual(output);
});

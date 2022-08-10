const { countUnivalSubtrees } = require('../src/countUnivalueSubtrees');
const { deserialize } = require('./helpers/treeNode');

test('1', () => {
  const root = deserialize([5, 1, 5, 5, 5, null, 5]);
  const output = 4;

  expect(countUnivalSubtrees(root)).toEqual(output);
});

test('2', () => {
  const root = deserialize([]);
  const output = 0;

  expect(countUnivalSubtrees(root)).toEqual(output);
});

test('3', () => {
  const root = deserialize([5, 5, 5, 5, 5, null, 5]);
  const output = 6;

  expect(countUnivalSubtrees(root)).toEqual(output);
});

test('4', () => {
  const root = deserialize([5, 5, 5, 5, 1, null, 5]);
  const output = 4;

  expect(countUnivalSubtrees(root)).toEqual(output);
});

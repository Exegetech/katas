const { isSymmetric } = require('../src/symmetricTree');
const { deserialize } = require('./helpers/treeNode');

test('1', () => {
  const root = deserialize([1, 2, 2, 3, 4, 4, 3]);
  const output = true;

  expect(isSymmetric(root)).toEqual(output);
});

test('2', () => {
  const root = deserialize([1, 2, 2, null, 3, null, 3]);
  const output = false;

  expect(isSymmetric(root)).toEqual(output);
});

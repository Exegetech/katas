const { maxPathSum } = require('../src/binaryTreeMaximumPathSum');
const { deserialize } = require('./helpers/treeNode');

const cases = [
  {
    root: deserialize([1, 2, 3]),
    output: 6,
  },
  {
    root: deserialize([-10, 9, 20, null, null, 15, 7]),
    output: 42,
  },
  {
    root: deserialize([-3]),
    output: -3,
  },
  {
    root: deserialize([2, -1]),
    output: 2,
  },
  {
    root: deserialize([-2, -1]),
    output: -1,
  },
];

test.skip.each(cases)('maxPathSum', ({ root, output }) => {
  expect(maxPathSum(root)).toEqual(output);
});

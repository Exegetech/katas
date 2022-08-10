const { findLeaves } = require('../src/findLeavesOfBinaryTree');
const { deserialize } = require('./helpers/treeNode');

const cases = [
  {
    root: [1, 2, 3, 4, 5],
    output: [[4, 5, 3], [2], [1]],
  },
  {
    root: [1],
    output: [[1]],
  },
];

test.each(cases)('findLeaves', ({ root, output }) => {
  expect(findLeaves(deserialize(root))).toEqual(output);
});

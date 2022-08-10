const { mergeTrees } = require('../src/mergeTwoBinaryTrees');
const { serialize, deserialize } = require('./helpers/treeNode');

const cases = [
  {
    root1: deserialize([1, 3, 2, 5]),
    root2: deserialize([2, 1, 3, null, 4, null, 7]),
    output: [3, 4, 5, 5, 4, null, 7],
  },
];

test.each(cases)('mergeTrees', ({ root1, root2, output }) => {
  expect(serialize(mergeTrees(root1, root2))).toEqual(output);
});

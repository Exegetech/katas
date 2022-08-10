const { printTree } = require('../src/printBinaryTree');
const { deserialize } = require('./helpers/treeNode');

const cases = [
  {
    root: deserialize([1, 2]),
    output: [
      ['', '1', ''],
      ['2', '', ''],
    ],
  },
  {
    root: deserialize([1, 2, 3, null, 4]),
    output: [
      ['', '', '', '1', '', '', ''],
      ['', '2', '', '', '', '3', ''],
      ['', '', '4', '', '', '', ''],
    ],
  },
];

test.skip.each(cases)('printTree', ({ root, output }) => {
  expect(printTree(root)).toEqual(output);
});

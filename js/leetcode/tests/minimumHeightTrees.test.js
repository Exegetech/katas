const { findMinHeightTrees } = require('../src/minimumHeightTrees');

const cases = [
  {
    n: 4,
    edges: [
      [1, 0],
      [1, 2],
      [1, 3],
    ],
    output: [1],
  },
  {
    n: 6,
    edges: [
      [3, 0],
      [3, 1],
      [3, 2],
      [3, 4],
      [5, 4],
    ],
    output: [3, 4],
  },
];

test.skip.each(cases)('findMinHeightTrees', ({ n, edges, output }) => {
  expect(findMinHeightTrees(n, edges)).toEqual(output);
});

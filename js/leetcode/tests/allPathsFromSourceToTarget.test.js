const { allPathsSourceTarget } = require('../src/allPathsFromSourceToTarget');

const cases = [
  {
    graph: [[1, 2], [3], [3], []],
    output: [
      [0, 1, 3],
      [0, 2, 3],
    ],
  },
  {
    graph: [[4, 3, 1], [3, 2, 4], [3], [4], []],
    output: [
      [0, 4],
      [0, 3, 4],
      [0, 1, 3, 4],
      [0, 1, 2, 3, 4],
      [0, 1, 4],
    ],
  },
];

test.each(cases)('allPathsSourceTarget', ({ graph, output }) => {
  expect(allPathsSourceTarget(graph)).toEqual(output);
});

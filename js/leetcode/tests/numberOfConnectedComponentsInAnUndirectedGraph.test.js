const {
  countComponents,
} = require('../src/numberOfConnectedComponentsInAnUndirectedGraph');

const cases = [
  {
    n: 5,
    edges: [
      [0, 1],
      [1, 2],
      [3, 4],
    ],
    output: 2,
  },
  {
    n: 5,
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ],
    output: 1,
  },
];

test.each(cases)('countComponents', ({ n, edges, output }) => {
  expect(countComponents(n, edges)).toEqual(output);
});

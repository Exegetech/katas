const {
  longestIncreasingPath,
} = require('../src/longestIncreasingPathInAMatrix');

const cases = [
  {
    matrix: [
      [9, 9, 4],
      [6, 6, 8],
      [2, 1, 1],
    ],
    output: 4,
  },
  {
    matrix: [
      [3, 4, 5],
      [3, 2, 6],
      [2, 2, 1],
    ],
    output: 4,
  },
  {
    matrix: [[1]],
    output: 1,
  },
];

test.each(cases)('longestIncreasingPath', ({ matrix, output }) => {
  expect(longestIncreasingPath(matrix)).toEqual(output);
});

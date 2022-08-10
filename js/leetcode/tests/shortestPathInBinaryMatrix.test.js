const {
  shortestPathBinaryMatrix,
} = require('../src/shortestPathInBinaryMatrix');

const cases = [
  {
    grid: [
      [0, 1],
      [1, 0],
    ],
    output: 2,
  },
  {
    grid: [
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ],
    output: 4,
  },
  {
    grid: [
      [1, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ],
    output: -1,
  },
];

test.each(cases)('shortestPathBinaryMatrix', ({ grid, output }) => {
  expect(shortestPathBinaryMatrix(grid)).toEqual(output);
});

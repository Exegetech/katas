const { orangesRotting } = require('../src/rottingOranges');

const cases = [
  {
    grid: [
      [2, 1, 1],
      [1, 1, 0],
      [0, 1, 1],
    ],
    output: 4,
  },
  {
    grid: [
      [2, 1, 1],
      [0, 1, 1],
      [1, 0, 1],
    ],
    output: -1,
  },
  {
    grid: [[0, 2]],
    output: 0,
  },
  {
    grid: [[0]],
    output: 0,
  },
  {
    grid: [[1]],
    output: -1,
  },
];

test.each(cases)('orangesRotting', ({ grid, output }) => {
  expect(orangesRotting(grid)).toEqual(output);
});

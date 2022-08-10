const { shortestBridge } = require('../src/shortestBridge');

const cases = [
  {
    grid: [
      [0, 1],
      [1, 0],
    ],
    output: 1,
  },
  {
    grid: [
      [0, 1, 0],
      [0, 0, 0],
      [0, 0, 1],
    ],
    output: 2,
  },
  {
    grid: [
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1],
    ],
    output: 1,
  },
];

test.each(cases)('shortestBridge', ({ grid, output }) => {
  expect(shortestBridge(grid)).toEqual(output);
});

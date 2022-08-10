const { numIslands2 } = require('../src/numberOfIslandsII');

const cases = [
  {
    m: 3,
    n: 3,
    positions: [
      [0, 0],
      [0, 1],
      [1, 2],
      [2, 1],
    ],
    output: [1, 1, 2, 3],
  },
  {
    m: 1,
    n: 1,
    positions: [[0, 0]],
    output: [1],
  },
  {
    m: 3,
    n: 3,
    positions: [
      [0, 1],
      [1, 2],
      [2, 1],
      [1, 0],
      [0, 2],
      [0, 0],
      [1, 1],
    ],
    output: [1, 2, 3, 4, 3, 2, 1],
  },
  {
    m: 3,
    n: 3,
    positions: [
      [0, 0],
      [0, 1],
      [1, 2],
      [1, 2],
    ],
    output: [1, 1, 2, 2],
  },
];

test.each(cases)('numIslands2', ({ m, n, positions, output }) => {
  expect(numIslands2(m, n, positions)).toEqual(output);
});

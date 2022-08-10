const { spiralOrder } = require('../src/spiralMatrix');

const cases = [
  {
    matrix: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    output: [1, 2, 3, 6, 9, 8, 7, 4, 5],
  },
  {
    matrix: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
    output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
  },
];

test.each(cases)('spiralOrder', ({ matrix, output }) => {
  expect(spiralOrder(matrix)).toEqual(output);
});

const { setZeroes } = require('../src/setMatrixZeroes');

const cases = [
  {
    matrix: [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
    output: [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ],
  },
  {
    matrix: [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ],
    output: [
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ],
  },
];

test.each(cases)('setZeroes', ({ matrix, output }) => {
  setZeroes(matrix);
  expect(matrix).toEqual(output);
});

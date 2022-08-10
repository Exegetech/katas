const { searchMatrix } = require('../src/searchA2DMatrix');

const cases = [
  {
    matrix: [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    target: 3,
    output: true,
  },
  {
    matrix: [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    target: 13,
    output: false,
  },
];

test.each(cases)('searchMatrix', ({ matrix, target, output }) => {
  expect(searchMatrix(matrix, target)).toEqual(output);
});

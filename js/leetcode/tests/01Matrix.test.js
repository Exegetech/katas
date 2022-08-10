const { updateMatrix } = require('../src/01Matrix');

const cases = [
  {
    mat: [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    output: [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
  },
  {
    mat: [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ],
    output: [
      [0, 0, 0],
      [0, 1, 0],
      [1, 2, 1],
    ],
  },
  {
    mat: [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 0],
    ],
    output: [
      [4, 3, 2],
      [3, 2, 1],
      [2, 1, 0],
    ],
  },
];

test.skip.each(cases)('updateMatrix', ({ mat, output }) => {
  expect(updateMatrix(mat)).toEqual(output);
});

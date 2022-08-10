const { matrixReshape } = require('../src/reshapeTheMatrix');

const cases = [
  {
    mat: [
      [1, 2],
      [3, 4],
    ],
    r: 1,
    c: 4,
    output: [[1, 2, 3, 4]],
  },
  {
    mat: [
      [1, 2],
      [3, 4],
    ],
    r: 2,
    c: 4,
    output: [
      [1, 2],
      [3, 4],
    ],
  },
];

test.each(cases)('matrixReshape', ({ mat, r, c, output }) => {
  expect(matrixReshape(mat, r, c)).toEqual(output);
});

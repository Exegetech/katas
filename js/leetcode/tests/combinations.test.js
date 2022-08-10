const { combine } = require('../src/combinations');

const cases = [
  {
    n: 4,
    k: 2,
    output: [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4],
    ],
  },
  {
    n: 1,
    k: 1,
    output: [[1]],
  },
];

test.each(cases)('combine', ({ n, k, output }) => {
  expect(combine(n, k)).toEqual(output);
});

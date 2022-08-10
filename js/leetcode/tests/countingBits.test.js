const { countBits } = require('../src/countingBits');

const cases = [
  {
    n: 2,
    output: [0, 1, 1],
  },
  {
    n: 5,
    output: [0, 1, 1, 2, 1, 2],
  },
];

test.each(cases)('countBits', ({ n, output }) => {
  expect(countBits(n)).toEqual(output);
});

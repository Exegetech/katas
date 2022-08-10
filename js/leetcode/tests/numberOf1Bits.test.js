const { hammingWeight } = require('../src/numberOf1Bits');

const cases = [
  {
    n: 0b00000000000000000000000000001011,
    output: 3,
  },
  {
    n: 0b00000000000000000000000010000000,
    output: 1,
  },
  {
    n: 0b11111111111111111111111111111101,
    output: 31,
  },
  {
    n: 0b00000000000000000000000000000000,
    output: 0,
  },
];

test.each(cases)('hammingWeight', ({ n, output }) => {
  expect(hammingWeight(n)).toEqual(output);
});

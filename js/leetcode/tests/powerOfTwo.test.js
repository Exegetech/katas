const { isPowerOfTwo } = require('../src/powerOfTwo');

const cases = [
  {
    n: 1,
    output: true,
  },
  {
    n: 16,
    output: true,
  },
  {
    n: 3,
    output: false,
  },
];

test.skip.each(cases)('powerOfTwo', ({ n, output }) => {
  expect(isPowerOfTwo(n)).toEqual(output);
});

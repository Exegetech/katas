const { mySqrt } = require('../src/sqrtX');

test('mySqrt', () => {
  const x = 4;
  const output = 2;

  expect(mySqrt(x)).toEqual(output);
});

test('mySqrt', () => {
  const x = 8;
  const output = 2;

  expect(mySqrt(x)).toEqual(output);
});

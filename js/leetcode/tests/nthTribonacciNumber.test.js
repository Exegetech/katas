const { tribonacci } = require('../src/nthTribonacciNumber');

test('1', () => {
  const n = 4;
  const output = 4;

  expect(tribonacci(n)).toEqual(output);
});

test('2', () => {
  const n = 25;
  const output = 1389537;

  expect(tribonacci(n)).toEqual(output);
});

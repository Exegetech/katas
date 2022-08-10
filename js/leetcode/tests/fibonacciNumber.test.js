const { fib } = require('../src/fibonacciNumber');

test('1', () => {
  const n = 2;
  const output = 1;

  expect(fib(n)).toEqual(output);
});

test('2', () => {
  const n = 3;
  const output = 2;

  expect(fib(n)).toEqual(output);
});

test('3', () => {
  const n = 4;
  const output = 3;

  expect(fib(n)).toEqual(output);
});

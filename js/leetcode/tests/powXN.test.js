const { myPow } = require('../src/powXN');

test('1', () => {
  const x = 2.0;
  const n = 10;
  const output = '1024.00000';

  expect(myPow(x, n).toFixed(5)).toEqual(output);
});

test('2', () => {
  const x = 2.1;
  const n = 3;
  const output = '9.26100';

  expect(myPow(x, n).toFixed(5)).toEqual(output);
});

test('3', () => {
  const x = 2.0;
  const n = -2;
  const output = '0.25000';

  expect(myPow(x, n).toFixed(5)).toEqual(output);
});

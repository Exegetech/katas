const { isPerfectSquare } = require('../src/isPerfectSquare');

test('isPerfectSquare', () => {
  const num = 9;
  const output = true;

  expect(isPerfectSquare(num)).toEqual(output);
});

test('isPerfectSquare', () => {
  const num = 12;
  const output = false;

  expect(isPerfectSquare(num)).toEqual(output);
});

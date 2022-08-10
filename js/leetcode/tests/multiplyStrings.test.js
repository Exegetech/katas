const { multiply } = require('../src/multiplyStrings');

test.skip('multiply', () => {
  const num1 = '2';
  const num2 = '3';
  const output = '6';

  expect(multiply(num1, num2)).toEqual(output);
});

test.skip('multiply', () => {
  const num1 = '123';
  const num2 = '456';
  const output = '56088';

  expect(multiply(num1, num2)).toEqual(output);
});

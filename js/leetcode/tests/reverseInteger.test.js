const { reverse } = require('../src/reverseInteger');

test.skip('reverse', () => {
  const x = 123;
  const output = 321;

  expect(reverse(x)).toEqual(output);
});

test.skip('reverse', () => {
  const x = -123;
  const output = -321;

  expect(reverse(x)).toEqual(output);
});

test.skip('reverse', () => {
  const x = 120;
  const output = 21;

  expect(reverse(x)).toEqual(output);
});

test.skip('reverse', () => {
  const x = 0;
  const output = 0;

  expect(reverse(x)).toEqual(output);
});

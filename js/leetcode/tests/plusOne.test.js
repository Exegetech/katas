const { plusOne } = require('../src/plusOne');

test('plusOne', () => {
  const digits = [1, 2, 3];
  const output = [1, 2, 4];

  expect(plusOne(digits)).toEqual(output);
});

test('plusOne', () => {
  const digits = [9];
  const output = [1, 0];

  expect(plusOne(digits)).toEqual(output);
});

test('plusOne', () => {
  const digits = [4, 3, 2, 1];
  const output = [4, 3, 2, 2];

  expect(plusOne(digits)).toEqual(output);
});

const { heightChecker } = require('../src/heightChecker');

test('1', () => {
  const heights = [1, 1, 4, 2, 1, 3];
  const output = 3;

  expect(heightChecker(heights)).toEqual(output);
});

test('2', () => {
  const heights = [5, 1, 2, 3, 4];
  const output = 5;

  expect(heightChecker(heights)).toEqual(output);
});

test('3', () => {
  const heights = [1, 2, 3, 4, 5];
  const output = 0;

  expect(heightChecker(heights)).toEqual(output);
});

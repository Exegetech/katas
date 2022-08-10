const { sortedSquares } = require('../src/squaresOfASortedArray');

test('1', () => {
  const nums = [-4, -1, 0, 3, 10];
  const output = [0, 1, 9, 16, 100];
  expect(sortedSquares(nums)).toEqual(output);
});

test('1', () => {
  const nums = [-7, -3, 2, 3, 11];
  const output = [4, 9, 9, 49, 121];
  expect(sortedSquares(nums)).toEqual(output);
});

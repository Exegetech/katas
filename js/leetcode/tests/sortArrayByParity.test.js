const { sortArrayByParity } = require('../src/sortArrayByParity');

test('1', () => {
  const nums = [3, 1, 2, 4];

  const outputs = [
    [4, 2, 3, 1],
    [4, 2, 1, 3],
    [2, 4, 3, 1],
    [2, 4, 1, 3],
  ];

  expect(sortArrayByParity(nums)).toBeOneOf(outputs);
});

test('2', () => {
  const nums = [0];
  const output = [0];

  expect(sortArrayByParity(nums)).toEqual(output);
});

const { twoSum, twoSum2 } = require('../src/twoSumII');

const cases = [
  {
    numbers: [-1, 0],
    target: -1,
    output: [1, 2],
  },
  {
    numbers: [2, 7, 11, 15],
    target: 9,
    output: [1, 2],
  },
  {
    numbers: [2, 3, 4],
    target: 6,
    output: [1, 3],
  },
  {
    numbers: [-1, 0],
    target: -1,
    output: [1, 2],
  },
  {
    numbers: [1, 2, 3, 4, 4, 9, 56, 90],
    target: 8,
    output: [4, 5],
  },
];

test.each(cases)('twoSum', ({ numbers, target, output }) => {
  expect(twoSum(numbers, target)).toEqual(output);
});

test.each(cases)('twoSum2', ({ numbers, target, output }) => {
  expect(twoSum(numbers, target)).toEqual(output);
});

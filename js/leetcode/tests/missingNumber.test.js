const { missingNumber } = require('../src/missingNumber');

const cases = [
  {
    nums: [3, 0, 1],
    output: 2,
  },
  {
    nums: [0, 1],
    output: 2,
  },
  {
    nums: [9, 6, 4, 2, 3, 5, 7, 0, 1],
    output: 8,
  },
];

test.each(cases)('missingNumber', ({ nums, output }) => {
  expect(missingNumber(nums)).toEqual(output);
});

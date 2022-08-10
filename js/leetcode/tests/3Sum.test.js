const { threeSum } = require('../src/3Sum');

const cases = [
  {
    nums: [-1, 0, 1, 2, -1, -4],
    output: [
      [-1, 0, 1],
      [-1, -1, 2],
    ],
  },
  {
    nums: [],
    output: [],
  },
  {
    nums: [0],
    output: [],
  },
];

test.skip.each(cases)('threeSum', ({ nums, output }) => {
  expect(threeSum(nums)).toEqual(output);
});

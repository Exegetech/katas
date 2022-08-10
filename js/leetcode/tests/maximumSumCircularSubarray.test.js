const { maxSubarraySumCircular } = require('../src/maximumSumCircularSubarray');

const cases = [
  {
    nums: [1, -2, 3, -2],
    output: 3,
  },
  {
    nums: [5, -3, 5],
    output: 10,
  },
  {
    nums: [-3, -2, -3],
    output: -2,
  },
];

test.skip.each(cases)('maxSubarraySumCircular', ({ nums, output }) => {
  expect(maxSubarraySumCircular(nums)).toEqual(output);
});

const { maxProduct } = require('../src/maximumProductSubarray');

const cases = [
  // {
  //   nums: [2,3,-2,4],
  //   output: 6
  // },
  // {
  //   nums: [-2,0,-1],
  //   output: 0,
  // },
  {
    nums: [-2, 3, -4],
    output: 24,
  },
];

test.skip.each(cases)('maxProduct', ({ nums, output }) => {
  expect(maxProduct(nums)).toEqual(output);
});

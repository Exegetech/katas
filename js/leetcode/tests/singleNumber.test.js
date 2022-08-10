const { singleNumber } = require('../src/singleNumber');

const cases = [
  {
    nums: [2, 2, 1],
    output: 1,
  },
  {
    nums: [4, 1, 2, 1, 2],
    output: 4,
  },
  {
    nums: [1],
    output: 1,
  },
];

test.each(cases)('singleNumber', ({ nums, output }) => {
  expect(singleNumber(nums)).toEqual(output);
});

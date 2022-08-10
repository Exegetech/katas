const { rob } = require('../src/houseRobberII');

const cases = [
  {
    nums: [2, 3, 2],
    output: 3,
  },
  {
    nums: [1, 2, 3, 1],
    output: 4,
  },
  {
    nums: [1, 2, 3],
    output: 3,
  },
  {
    nums: [0],
    output: 0,
  },
  {
    nums: [1],
    output: 1,
  },
  {
    nums: [0, 0],
    output: 0,
  },
];

test.each(cases)('rob', ({ nums, output }) => {
  expect(rob(nums)).toEqual(output);
});

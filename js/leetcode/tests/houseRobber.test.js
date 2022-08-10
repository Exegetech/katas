const { rob, rob2 } = require('../src/houseRobber');

const cases = [
  {
    nums: [1, 2, 3, 1],
    output: 4,
  },
  {
    nums: [2, 7, 9, 3, 1],
    output: 12,
  },
  {
    nums: [0],
    output: 0,
  },
];

test.each(cases)('rob', ({ nums, output }) => {
  expect(rob(nums)).toEqual(output);
});

test.each(cases)('rob2', ({ nums, output }) => {
  expect(rob2(nums)).toEqual(output);
});

const { deleteAndEarn } = require('../src/deleteAndEarn');

const cases = [
  {
    nums: [2, 2],
    output: 4,
  },
  {
    nums: [2, 3],
    output: 3,
  },
  {
    nums: [3, 2],
    output: 3,
  },
  {
    nums: [3, 4, 2],
    output: 6,
  },
  {
    nums: [2, 2, 3, 3, 3, 4],
    output: 9,
  },
  {
    nums: [1, 1, 1, 2, 4, 5, 5, 5, 6],
    output: 18,
  },
  {
    nums: [8, 10, 4, 9, 1, 3, 5, 9, 4, 10],
    output: 37,
  },
];

test.each(cases)('deleteAndEarn', ({ nums, output }) => {
  expect(deleteAndEarn(nums)).toEqual(output);
});

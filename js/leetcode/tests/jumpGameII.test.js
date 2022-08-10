const { jump } = require('../src/jumpGameII');

const cases = [
  {
    nums: [2, 3, 1, 1, 4],
    output: 2,
  },
  {
    nums: [2, 3, 0, 1, 4],
    output: 2,
  },
  {
    nums: [3, 2, 1],
    output: 1,
  },
  {
    nums: [2, 3, 1],
    output: 1,
  },
  {
    nums: [1, 2, 1, 1, 1],
    output: 3,
  },
  {
    nums: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0],
    output: 2,
  },
];

test.skip.each(cases)('jump', ({ nums, output }) => {
  expect(jump(nums)).toEqual(output);
});

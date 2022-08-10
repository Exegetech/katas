const { subsets } = require('../src/subsets');

const cases = [
  {
    nums: [1, 2, 3],
    output: [[1, 2, 3], [2, 3], [3], [], [2], [1, 3], [1], [1, 2]],
  },
  {
    nums: [0],
    output: [[0], []],
  },
];

test.each(cases)('subsets', ({ nums, output }) => {
  expect(subsets(nums)).toEqual(output);
});

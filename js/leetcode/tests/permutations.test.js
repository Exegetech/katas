const { permute } = require('../src/permutations');

const cases = [
  {
    nums: [1, 2, 3],
    output: [
      [2, 1, 3],
      [1, 3, 2],
      [1, 2, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ],
  },
  {
    nums: [0, 1],
    output: [
      [0, 1],
      [1, 0],
    ],
  },
];

test.skip.each(cases)('permute', ({ nums, output }) => {
  expect(permute(nums)).toEqual(output);
});

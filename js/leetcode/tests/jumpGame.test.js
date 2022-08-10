const { canJump, canJump2 } = require('../src/jumpGame');

const cases = [
  {
    nums: [2, 3, 1, 1, 4],
    output: true,
  },
  {
    nums: [3, 2, 1, 0, 4],
    output: false,
  },
  {
    nums: [0, 2, 3],
    output: false,
  },
  {
    nums: [0],
    output: true,
  },
];

test.each(cases)('canJump', ({ nums, output }) => {
  expect(canJump(nums)).toEqual(output);
});

test.each(cases)('canJump2', ({ nums, output }) => {
  expect(canJump2(nums)).toEqual(output);
});

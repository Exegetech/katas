const { majorityElement } = require('../src/majorityElement');

const cases = [
  {
    nums: [3, 2, 3],
    output: 3,
  },
  {
    nums: [2, 2, 1, 1, 1, 2, 2],
    output: 2,
  },
];

test.each(cases)('majorityElement', ({ nums, output }) => {
  expect(majorityElement(nums)).toEqual(output);
});

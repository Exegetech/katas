const { findMissingRanges } = require('../src/missingRanges');

const cases = [
  {
    nums: [0, 1, 3, 50, 75],
    lower: 0,
    upper: 99,
    output: ['2', '4->49', '51->74', '76->99'],
  },
  {
    nums: [-1],
    lower: -1,
    upper: -1,
    output: [],
  },
  {
    nums: [],
    lower: 1,
    upper: 1,
    output: ['1'],
  },
];

test.each(cases)('findMissingRanges', ({ nums, lower, upper, output }) => {
  expect(findMissingRanges(nums, lower, upper)).toEqual(output);
});

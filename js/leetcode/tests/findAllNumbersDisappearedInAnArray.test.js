const {
  findDisappearedNumbers,
} = require('../src/findAllNumbersDisappearedInAnArray');

const cases = [
  {
    nums: [4, 3, 2, 7, 8, 2, 3, 1],
    output: [5, 6],
  },
  {
    nums: [1, 1],
    output: [2],
  },
];

test.each(cases)('findDisappearedNumbers', ({ nums, output }) => {
  expect(findDisappearedNumbers(nums)).toEqual(output);
});

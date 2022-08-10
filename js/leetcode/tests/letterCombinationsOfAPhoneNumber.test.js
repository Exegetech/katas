const {
  letterCombinations,
} = require('../src/letterCombinationsOfAPhoneNumber');

const cases = [
  {
    digits: '23',
    output: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
  },
  {
    digits: '',
    output: [],
  },
  {
    digits: '2',
    output: ['a', 'b', 'c'],
  },
];

test.each(cases)('letterCombinations', ({ digits, output }) => {
  expect(letterCombinations(digits)).toEqual(output);
});

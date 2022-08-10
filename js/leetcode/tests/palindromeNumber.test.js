const { isPalindrome } = require('../src/palindromeNumber');

const cases = [
  {
    input: [],
    output: [],
  },
];

test.skip.each(cases)('isPalindrome', ({ input, output }) => {
  expect(isPalindrome(input)).toEqual(output);
});

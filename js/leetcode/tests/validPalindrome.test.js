const { isPalindrome } = require('../src/validPalindrome');

const cases = [
  {
    s: 'A man, a plan, a canal: Panama',
    output: true,
  },
  {
    s: 'race a car',
    output: false,
  },
  {
    s: ' ',
    output: true,
  },
  {
    s: '.,',
    output: true,
  },
];

test.each(cases)('isPalindrome', ({ s, output }) => {
  expect(isPalindrome(s)).toEqual(output);
});

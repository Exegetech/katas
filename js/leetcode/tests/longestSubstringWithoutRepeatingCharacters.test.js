const {
  lengthOfLongestSubstring,
} = require('../src/longestSubstringWithoutRepeatingCharacters');

const cases = [
  {
    s: 'abcabcbb',
    output: 3,
  },
  {
    s: 'bbbbb',
    output: 1,
  },
  {
    s: 'pwwkew',
    output: 3,
  },
];

test.each(cases)('lengthOfLongestSubstring', ({ s, output }) => {
  expect(lengthOfLongestSubstring(s)).toEqual(output);
});

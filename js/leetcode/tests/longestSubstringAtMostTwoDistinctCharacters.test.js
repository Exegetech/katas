const {
  lengthOfLongestSubstringTwoDistinct,
} = require('../src/longestSubstringAtMostTwoDistinctCharacters');

const cases = [
  {
    s: 'eceba',
    output: 3,
  },
  // {
  //   s: "ccaabbb",
  //   output: 5
  // },
  // {
  //   s: "a",
  //   output: 1,
  // },
  // {
  //   s: "aa",
  //   output: 2,
  // }
];

test.skip.each(cases)(
  'lengthOfLongestSubstringTwoDistinct',
  ({ s, output }) => {
    expect(lengthOfLongestSubstringTwoDistinct(s)).toEqual(output);
  }
);

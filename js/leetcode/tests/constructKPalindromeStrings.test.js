const { canConstruct } = require('../src/constructKPalindromeStrings');

const cases = [
  {
    s: 'annabelle',
    k: 2,
    output: true,
  },
  {
    s: 'leetcode',
    k: 3,
    output: false,
  },
  {
    s: 'true',
    k: 4,
    output: true,
  },
  {
    s: 'eminem',
    k: 2,
    output: true,
  },
];

test.skip.each(cases)('canConstruct', ({ s, k, output }) => {
  expect(canConstruct(s, k)).toEqual(output);
});

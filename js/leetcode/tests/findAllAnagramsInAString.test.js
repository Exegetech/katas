const { findAnagrams } = require('../src/findAllAnagramsInAString');

const cases = [
  {
    s: 'cbaebabacd',
    p: 'abc',
    output: [0, 6],
  },
  {
    s: 'abab',
    p: 'ab',
    output: [0, 1, 2],
  },
];

test.each(cases)('findAnagrams', ({ s, p, output }) => {
  expect(findAnagrams(s, p)).toEqual(output);
});

const { canConstruct } = require('../src/ransomNote');

const cases = [
  {
    ransomNote: 'a',
    magazine: 'b',
    output: false,
  },
  {
    ransomNote: 'aa',
    magazine: 'ab',
    output: false,
  },
  {
    ransomNote: 'aa',
    magazine: 'aab',
    output: true,
  },
  {
    ransomNote: 'aabbc',
    magazine: 'aabbca',
    output: true,
  },
];

test.each(cases)('canConstruct', ({ ransomNote, magazine, output }) => {
  expect(canConstruct(ransomNote, magazine)).toEqual(output);
});

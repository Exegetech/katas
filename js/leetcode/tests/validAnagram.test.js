const { isAnagram } = require('../src/validAnagram');

const cases = [
  {
    s: 'anagram',
    t: 'nagaram',
    output: true,
  },
  {
    s: 'rat',
    t: 'car',
    output: false,
  },
  {
    s: 'a',
    t: 'ab',
    output: false,
  },
];

test.each(cases)('twoSum', ({ s, t, output }) => {
  expect(isAnagram(s, t)).toEqual(output);
});

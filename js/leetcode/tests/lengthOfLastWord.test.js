const { lengthOfLastWord } = require('../src/lengthOfLastWord');

const cases = [
  {
    s: 'Hello World',
    output: 5,
  },
  {
    s: '   fly me   to   the moon  ',
    output: 4,
  },
  {
    s: 'luffy is still joyboy',
    output: 6,
  },
];

test.each(cases)('lengthOfLastWord', ({ s, output }) => {
  expect(lengthOfLastWord(s)).toEqual(output);
});

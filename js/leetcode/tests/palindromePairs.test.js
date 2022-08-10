const { palindromePairs } = require('../src/palindromePairs');

const cases = [
  {
    words: ['abcd', 'dcba', 'lls', 's', 'sssll'],
    output: [
      [0, 1],
      [1, 0],
      [2, 4],
      [3, 2],
    ],
  },
  {
    words: ['bat', 'tab', 'cat'],
    output: [
      [0, 1],
      [1, 0],
    ],
  },
  {
    words: ['a', ''],
    output: [
      [0, 1],
      [1, 0],
    ],
  },
];

test.each(cases)('palindromePairs', ({ words, output }) => {
  expect(palindromePairs(words)).toEqual(output);
});

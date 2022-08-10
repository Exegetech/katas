const { smallestStringWithSwaps } = require('../src/smallestStringWithSwaps');

const cases = [
  {
    s: 'dcab',
    pairs: [
      [0, 3],
      [1, 2],
    ],
    output: 'bacd',
  },
  {
    s: 'dcab',
    pairs: [
      [0, 3],
      [1, 2],
      [0, 2],
    ],
    output: 'abcd',
  },
  {
    s: 'cba',
    pairs: [
      [0, 1],
      [1, 2],
    ],
    output: 'abc',
  },
];

test.skip.each(cases)('smallestStringWithSwaps', ({ s, pairs, output }) => {
  expect(smallestStringWithSwaps(s, pairs)).toEqual(output);
});

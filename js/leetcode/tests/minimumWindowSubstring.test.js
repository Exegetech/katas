const { minWindow } = require('../src/minimumWindowSubstring');

const cases = [
  {
    s: 'ADOBECODEBANC',
    t: 'ABC',
    output: 'BANC',
  },
  {
    s: 'a',
    t: 'a',
    output: 'a',
  },
  {
    s: 'a',
    t: 'aa',
    output: '',
  },
];

test.skip.each(cases)('minWindow', ({ s, t, output }) => {
  expect(minWindow(s, t)).toEqual(output);
});

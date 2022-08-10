const { strStr } = require('../src/implementStrStr');

const cases = [
  {
    haystack: 'hello',
    needle: 'll',
    output: 2,
  },
  {
    haystack: 'aaaa',
    needle: 'bba',
    output: -1,
  },
  {
    haystack: '',
    needle: '',
    output: 0,
  },
  {
    haystack: 'mississippi',
    needle: 'issip',
    output: 4,
  },
  {
    haystack: 'a',
    needle: 'a',
    output: 0,
  },
];

test.each(cases)('strStr', ({ haystack, needle, output }) => {
  expect(strStr(haystack, needle)).toEqual(output);
});

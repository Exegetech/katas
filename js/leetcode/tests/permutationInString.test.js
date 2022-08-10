const { checkInclusion } = require('../src/permutationInString');

const cases = [
  {
    s1: 'ab',
    s2: 'eidbaooo',
    output: true,
  },
  {
    s1: 'ab',
    s2: 'eidboaoo',
    output: false,
  },
];

test.each(cases)('checkInclusion', ({ s1, s2, output }) => {
  expect(checkInclusion(s1, s2)).toEqual(output);
});

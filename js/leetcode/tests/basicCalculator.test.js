const { calculate } = require('../src/basicCalculator');

const cases = [
  {
    s: '1 + 1',
    output: 2,
  },
  {
    s: ' 2-1 + 2 ',
    output: 3,
  },
  {
    s: '(1+(4+5+2)-3)+(6+8)',
    output: 23,
  },
];

test.skip.each(cases)('calculate', ({ s, output }) => {
  expect(calculate(s)).toEqual(output);
});

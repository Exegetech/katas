const { generateParenthesis } = require('../src/generateParentheses');

const cases = [
  {
    n: 3,
    output: ['((()))', '(()())', '(())()', '()(())', '()()()'],
  },
  {
    n: 1,
    output: ['()'],
  },
];

test.each(cases)('generateParenthesis', ({ n, output }) => {
  expect(generateParenthesis(n)).toEqual(output);
});

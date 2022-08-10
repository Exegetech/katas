const { evalRPN } = require('../src/evaluateReversePolishNotation');

test('1', () => {
  const tokens = ['2', '1', '+', '3', '*'];
  const output = 9;

  expect(evalRPN(tokens)).toEqual(output);
});

test('2', () => {
  const tokens = ['4', '13', '5', '/', '+'];
  const output = 6;

  expect(evalRPN(tokens)).toEqual(output);
});

test('3', () => {
  const tokens = [
    '10',
    '6',
    '9',
    '3',
    '+',
    '-11',
    '*',
    '/',
    '*',
    '17',
    '+',
    '5',
    '+',
  ];
  const output = 22;

  expect(evalRPN(tokens)).toEqual(output);
});

test('4', () => {
  const tokens = ['4', '3', '-'];
  const output = 1;

  expect(evalRPN(tokens)).toEqual(output);
});

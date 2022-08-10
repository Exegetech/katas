const { calcEquation } = require('../src/evaluateDivision');

const cases = [
  {
    equations: [
      ['a', 'b'],
      ['b', 'c'],
    ],
    values: [2.0, 3.0],
    queries: [
      ['a', 'c'],
      ['b', 'a'],
      ['a', 'e'],
      ['a', 'a'],
      ['x', 'x'],
    ],
    output: [6.0, 0.5, -1.0, 1.0, -1.0],
  },
  {
    equations: [
      ['a', 'b'],
      ['b', 'c'],
      ['bc', 'cd'],
    ],
    values: [1.5, 2.5, 5.0],
    queries: [
      ['a', 'c'],
      ['c', 'b'],
      ['bc', 'cd'],
      ['cd', 'bc'],
    ],
    output: [3.75, 0.4, 5.0, 0.2],
  },
  {
    equations: [['a', 'b']],
    values: [0.5],
    queries: [
      ['a', 'b'],
      ['b', 'a'],
      ['a', 'c'],
      ['x', 'y'],
    ],
    output: [0.5, 2.0, -1.0, -1.0],
  },
];

test.each(cases)('calcEquation', ({ equations, values, queries, output }) => {
  expect(calcEquation(equations, values, queries)).toEqual(output);
});

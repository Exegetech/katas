const { generate } = require('../src/pascalsTriangle');

const cases = [
  {
    numRows: 5,
    output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
  },
  {
    numRows: 1,
    output: [[1]],
  },
];

test.each(cases)('generate', ({ numRows, output }) => {
  expect(generate(numRows)).toEqual(output);
});

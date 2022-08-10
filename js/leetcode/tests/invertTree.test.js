const { invertTree } = require('../src/invertTree');

const cases = [
  {
    input: [],
    output: [],
  },
];

test.skip.each(cases)('invertTree', ({ input, output }) => {
  expect(invertTree(input)).toEqual(output);
});

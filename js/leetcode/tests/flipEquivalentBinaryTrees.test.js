const {
  flipEquivalentBinaryTrees,
} = require('../src/flipEquivalentBinaryTrees');

const cases = [
  {
    input: [],
    output: [],
  },
];

test.skip.each(cases)('flipEquivalentBinaryTrees', ({ input, output }) => {
  expect(flipEquivalentBinaryTrees(input)).toEqual(output);
});

const { minDepth } = require('../src/minimumDepthOfBinaryTree');

const cases = [
  {
    input: [],
    output: [],
  },
];

test.skip.each(cases)('minDepth', ({ input, output }) => {
  expect(minDepth(input)).toEqual(output);
});

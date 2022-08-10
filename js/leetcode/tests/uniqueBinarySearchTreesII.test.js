const { generateTrees } = require('../src/uniqueBinarySearchTreesII');

test.skip('1', () => {
  const n = 3;
  const result = generateTrees(n);

  expect(result.length).toEqual(3);
});

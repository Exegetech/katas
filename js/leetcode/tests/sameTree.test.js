const { isSameTree } = require('../src/sameTree');
const { deserialize } = require('./helpers/treeNode');

const cases = [
  {
    p: [1, 2, 3],
    q: [1, 2, 3],
    output: true,
  },
  {
    p: [1, 2],
    q: [1, null, 2],
    output: true,
  },
  {
    p: [1, 2, 1],
    q: [1, 1, 2],
    output: false,
  },
];

test.skip.each(cases)('isSameTree', ({ p, q, output }) => {
  expect(isSameTree(deserialize(p), deserialize(q))).toEqual(output);
});

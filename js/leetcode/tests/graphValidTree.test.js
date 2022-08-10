const { validTree } = require('../src/graphValidTree');

const cases = [
  {
    n: 5,
    edges: [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 4],
    ],
    output: true,
  },
  {
    n: 5,
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [1, 3],
      [1, 4],
    ],
    output: false,
  },
  {
    n: 4,
    edges: [
      [0, 1],
      [2, 3],
      [1, 2],
    ],
    output: true,
  },
];

test.each(cases)('validTree', ({ n, edges, output }) => {
  expect(validTree(n, edges)).toEqual(output);
});

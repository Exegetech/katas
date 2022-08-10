const { validPath, validPath2 } = require('../src/findIfPathExistsInGraph');

const cases = [
  {
    n: 3,
    edges: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    start: 0,
    end: 2,
    output: true,
  },
  {
    n: 6,
    edges: [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    start: 0,
    end: 5,
    output: false,
  },
  {
    n: 10,
    edges: [
      [0, 7],
      [0, 8],
      [6, 1],
      [2, 0],
      [0, 4],
      [5, 8],
      [4, 7],
      [1, 3],
      [3, 5],
      [6, 5],
    ],
    start: 7,
    end: 5,
    output: true,
  },
];

test.each(cases)('validPath', ({ n, edges, start, end, output }) => {
  expect(validPath(n, edges, start, end)).toEqual(output);
});

test.each(cases)('validPath2', ({ n, edges, start, end, output }) => {
  expect(validPath2(n, edges, start, end)).toEqual(output);
});

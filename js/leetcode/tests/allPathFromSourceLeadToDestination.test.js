const {
  leadsToDestination,
} = require('../src/allPathFromSourceLeadToDestination');

const cases = [
  {
    n: 3,
    edges: [
      [0, 1],
      [0, 2],
    ],
    source: 0,
    destination: 2,
    output: false,
  },
  {
    n: 4,
    edges: [
      [0, 1],
      [0, 3],
      [1, 2],
      [2, 1],
    ],
    source: 0,
    destination: 3,
    output: false,
  },
  {
    n: 4,
    edges: [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 3],
    ],
    source: 0,
    destination: 3,
    output: true,
  },
  {
    n: 2,
    edges: [
      [0, 1],
      [1, 1],
    ],
    source: 0,
    destination: 1,
    output: false,
  },
  {
    n: 5,
    edges: [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 3],
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4],
    ],
    source: 0,
    destination: 4,
    output: true,
  },
];

test.skip.each(cases)(
  'leadsToDestination',
  ({ n, edges, source, destination, output }) => {
    expect(leadsToDestination(n, edges, source, destination)).toEqual(output);
  }
);

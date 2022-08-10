const { numBusesToDestination } = require('../src/busRoutes');

const cases = [
  {
    routes: [
      [1, 2, 7],
      [3, 6, 7],
    ],
    source: 1,
    target: 6,
    output: 2,
  },
  {
    routes: [[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]],
    source: 15,
    target: 12,
    output: -1,
  },
  {
    routes: [[2], [2, 8]],
    source: 8,
    target: 2,
    output: 1,
  },
];

test.each(cases)(
  'numBusesToDestination',
  ({ routes, source, target, output }) => {
    expect(numBusesToDestination(routes, source, target)).toEqual(output);
  }
);

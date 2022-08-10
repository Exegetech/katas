const {
  minCostConnectPoints,
  minCostConnectPoints2,
} = require('../src/minCostToConnectAllPoints');

const cases = [
  {
    points: [
      [0, 0],
      [2, 2],
      [3, 10],
      [5, 2],
      [7, 0],
    ],
    output: 20,
  },
  {
    points: [
      [3, 12],
      [-2, 5],
      [-4, 1],
    ],
    output: 18,
  },
];

test.each(cases)('minCostConnectPoints', ({ points, output }) => {
  expect(minCostConnectPoints(points)).toEqual(output);
});

test.each(cases)('minCostConnectPoints2', ({ points, output }) => {
  expect(minCostConnectPoints2(points)).toEqual(output);
});

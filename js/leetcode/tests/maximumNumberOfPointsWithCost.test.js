const { maxPoints } = require('../src/maximumNumberOfPointsWithCost');

const cases = [
  {
    points: [
      [1, 2, 3],
      [1, 5, 1],
      [3, 1, 1],
    ],
    output: 9,
  },
  {
    points: [
      [1, 5],
      [2, 3],
      [4, 2],
    ],
    output: 11,
  },
  {
    points: [
      [2, 4, 0, 5, 5],
      [0, 5, 4, 2, 5],
      [2, 0, 2, 3, 1],
      [3, 0, 5, 5, 2],
    ],
    output: 17,
  },
];

test.skip.each(cases)('maxPoints', ({ points, output }) => {
  expect(maxPoints(points)).toEqual(output);
});

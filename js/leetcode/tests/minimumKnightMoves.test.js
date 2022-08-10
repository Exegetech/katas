const { minKnightMoves } = require('../src/minimumKnightMoves');

const cases = [
  {
    x: 2,
    y: 1,
    output: 1,
  },
  {
    x: 5,
    y: 5,
    output: 4,
  },
];

test.skip.each(cases)('minKnightMoves', ({ x, y, output }) => {
  expect(minKnightMoves(x, y)).toEqual(output);
});

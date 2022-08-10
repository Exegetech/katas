const { asteroidCollision } = require('../src/asteroidCollision');

const cases = [
  {
    asteroids: [5, 10, -5],
    output: [5, 10],
  },
  {
    asteroids: [8, -8],
    output: [],
  },
  {
    asteroids: [10, 2, -5],
    output: [10],
  },
];

test.each(cases)('asteroidCollision', ({ asteroids, output }) => {
  expect(asteroidCollision(asteroids)).toEqual(output);
});

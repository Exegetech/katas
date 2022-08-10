const { climbStairs } = require('../src/climbingStairs');

test('1', () => {
  const n = 2;
  const output = 2;

  expect(climbStairs(n)).toEqual(output);
});

test('2', () => {
  const n = 3;
  const output = 3;

  expect(climbStairs(n)).toEqual(output);
});

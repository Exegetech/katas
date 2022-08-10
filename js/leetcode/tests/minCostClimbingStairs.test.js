const {
  minCostClimbingStairs,
  minCostClimbingStairs2,
} = require('../src/minCostClimbingStairs');

test('minCostClimbingStairs', () => {
  const cost = [10, 15, 20];
  const output = 15;

  expect(minCostClimbingStairs(cost)).toEqual(output);
});

test('minCostClimbingStairs', () => {
  const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
  const output = 6;

  expect(minCostClimbingStairs(cost)).toEqual(output);
});

test('minCostClimbingStairs', () => {
  const cost = [1, 100];
  const output = 1;

  expect(minCostClimbingStairs(cost)).toEqual(output);
});

test('minCostClimbingStairs2', () => {
  const cost = [10, 15, 20];
  const output = 15;

  expect(minCostClimbingStairs2(cost)).toEqual(output);
});

test('minCostClimbingStairs2', () => {
  const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
  const output = 6;

  expect(minCostClimbingStairs2(cost)).toEqual(output);
});

test('minCostClimbingStairs2', () => {
  const cost = [1, 100];
  const output = 1;

  expect(minCostClimbingStairs2(cost)).toEqual(output);
});

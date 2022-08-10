const { numWays } = require('../src/paintFence');

test.skip('numWays', () => {
  const n = 3;
  const k = 2;
  const output = 6;

  expect(numWays(n, k)).toEqual(output);
});

test.skip('numWays', () => {
  const n = 1;
  const k = 1;
  const output = 1;

  expect(numWays(n, k)).toEqual(output);
});

test.skip('numWays', () => {
  const n = 7;
  const k = 2;
  const output = 42;

  expect(numWays(n, k)).toEqual(output);
});

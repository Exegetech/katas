const { coinChange } = require('../src/coinChange');

test('coinChange', () => {
  const coins = [1, 2, 5];
  const amount = 11;
  const output = 3;

  expect(coinChange(coins, amount)).toEqual(output);
});

test('coinChange', () => {
  const coins = [2];
  const amount = 1;
  const output = -1;

  expect(coinChange(coins, amount)).toEqual(output);
});

test('coinChange', () => {
  const coins = [2];
  const amount = 3;
  const output = -1;

  expect(coinChange(coins, amount)).toEqual(output);
});

test('coinChange', () => {
  const coins = [1];
  const amount = 0;
  const output = 0;

  expect(coinChange(coins, amount)).toEqual(output);
});

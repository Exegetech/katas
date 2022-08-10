const { maxProfit } = require('../src/bestTimeToBuyAndSellStockIV');

test.skip('maxProfit', () => {
  const k = 2;
  const prices = [2, 4, 1];
  const output = 2;

  expect(maxProfit(k, prices)).toEqual(output);
});

test.skip('maxProfit', () => {
  const k = 2;
  const prices = [3, 2, 6, 5, 0, 3];
  const output = 7;

  expect(maxProfit(k, prices)).toEqual(output);
});

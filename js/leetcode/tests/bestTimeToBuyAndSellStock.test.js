const { maxProfit } = require('../src/bestTimeToBuyAndSellStock');

const cases = [
  {
    prices: [7, 1, 5, 3, 6, 4],
    output: 5,
  },
  {
    prices: [7, 6, 4, 3, 1],
    output: 0,
  },
];

test.each(cases)('maxProfit', ({ prices, output }) => {
  expect(maxProfit(prices)).toEqual(output);
});

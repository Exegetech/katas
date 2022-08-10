const maxProfit = function (prices) {
  let minPrice = Number.POSITIVE_INFINITY;
  let maxProfit = 0;

  prices.forEach((price) => {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  });

  return maxProfit;
};

module.exports = { maxProfit };

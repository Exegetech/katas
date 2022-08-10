const maxProfit = function (k, prices) {
  const memo = {};

  return recurse(prices, k, 0, false, memo);
};

function recurse(prices, transactionsRemaining, day, holding, memo) {
  if (transactionsRemaining === 0 || day === prices.length) {
    return 0;
  }

  const hash = `${day}-${transactionsRemaining}-${holding}`;

  if (typeof memo[hash] !== 'undefined') {
    return memo[hash];
  }

  if (holding) {
    const profitDoNothing = recurse(
      prices,
      transactionsRemaining,
      day + 1,
      true,
      memo
    );

    const profitSell =
      prices[day] +
      recurse(prices, transactionsRemaining - 1, day + 1, false, memo);

    memo[hash] = Math.max(profitDoNothing, profitSell);
  } else {
    const profitDoNothing = recurse(
      prices,
      transactionsRemaining,
      day + 1,
      false,
      memo
    );

    const profitBuy =
      -1 * prices + recurse(prices, transactionsRemaining, day + 1, true, memo);

    memo[hash] = Math.max(profitDoNothing, profitBuy);
  }

  return memo[hash];
}

module.exports = { maxProfit };

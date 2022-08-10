const coinChange = function (coins, amount) {
  const memo = {};
  memo[0] = 0;
  coins.forEach((c) => {
    memo[c] = 1;
  });

  return recurse(coins, memo, amount);
};

function recurse(coins, memo, amount) {
  if (amount < 0) {
    return -1;
  }

  if (typeof memo[amount] !== 'undefined') {
    return memo[amount];
  }

  let min = Number.POSITIVE_INFINITY;
  coins.forEach((c) => {
    const subResult = recurse(coins, memo, amount - c);

    if (subResult !== -1) {
      min = Math.min(min, 1 + subResult);
    }
  });

  if (min === Number.POSITIVE_INFINITY) {
    memo[amount] = -1;
  } else {
    memo[amount] = min;
  }

  return memo[amount];
}

module.exports = { coinChange };

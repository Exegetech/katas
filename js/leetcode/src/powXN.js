const myPow = function (x, n) {
  const negative = n < 0;
  const absN = Math.abs(n);

  const memo = new Array(Math.floor(absN / 2));
  memo[0] = 1;
  memo[1] = x;

  const recurseResult = recurse(x, absN, memo);

  if (!negative) {
    return recurseResult;
  }

  return 1 / recurseResult;
};

function recurse(x, n, memo) {
  if (typeof memo[n] !== 'undefined') {
    return memo[n];
  }

  if (n % 2 === 0) {
    memo[n] = recurse(x, n / 2, memo) * recurse(x, n / 2, memo);
  } else {
    memo[n] = x * recurse(x, n - 1, memo);
  }

  return memo[n];
}

module.exports = { myPow };

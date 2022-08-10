const climbStairs = function (n) {
  const memo = new Array(n);
  memo[0] = 0;
  memo[1] = 1;
  memo[2] = 2;

  return recurse(memo, n);
};

function recurse(memo, n) {
  if (typeof memo[n] !== 'undefined') {
    return memo[n];
  }

  memo[n] = recurse(memo, n - 1) + recurse(memo, n - 2);

  return memo[n];
}

module.exports = { climbStairs };

const maxSubarraySumCircular = function (nums) {
  const realNums = [...nums, ...nums];

  const memo = new Array(realNums).fill(0);
  memo[0] = realNums[0];

  for (let i = 1; i < realNums.length; i++) {
    memo[i] = Math.max(realNums[i], realNums[i] + memo[i - 1]);
  }

  return memo[memo.length - 1];
};

module.exports = { maxSubarraySumCircular };

const lengthOfLIS = function (nums) {
  const memo = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        memo[i] = Math.max(1 + memo[j], memo[i]);
      }
    }
  }

  return memo.reduce((acc, el) => Math.max(acc, el), Number.NEGATIVE_INFINITY);
};

module.exports = { lengthOfLIS };

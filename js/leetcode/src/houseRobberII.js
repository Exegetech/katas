const rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const exceptLast = dp(nums.slice(0, nums.length - 1));
  const exceptFirst = dp(nums.slice(1));

  return Math.max(exceptLast, exceptFirst);
};

function dp(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const memo = new Array(nums.length).fill(0);
  memo[0] = nums[0];
  memo[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    memo[i] = Math.max(nums[i] + memo[i - 2], memo[i - 1]);
  }

  return memo[memo.length - 1];
}

module.exports = { rob };

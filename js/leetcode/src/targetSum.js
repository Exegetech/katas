const findTargetSumWays = function (nums, target) {
  return dfs(nums, target, 0, 0);
};

function dfs(nums, target, index, current) {
  if (index === nums.length) {
    if (current === target) {
      return 1;
    }

    return 0;
  }

  const plus = dfs(nums, target, index + 1, current + nums[index]);
  const minus = dfs(nums, target, index + 1, current - nums[index]);

  return plus + minus;
}

module.exports = { findTargetSumWays };

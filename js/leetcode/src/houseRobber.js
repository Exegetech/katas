const rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }

  const tabs = new Array(nums.length);
  tabs[0] = nums[0];
  tabs[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    tabs[i] = Math.max(tabs[i - 1], tabs[i - 2] + nums[i]);
  }

  return tabs[tabs.length - 1];
};

const rob2 = function (nums) {
  const memo = {};

  return recurse(nums, memo, nums.length - 1);
};

function recurse(nums, memo, index) {
  if (index === 0) {
    return nums[0];
  }

  if (index === 1) {
    return Math.max(nums[0], nums[1]);
  }

  if (typeof memo[index] !== 'undefined') {
    return memo[index];
  }

  memo[index] = Math.max(
    nums[index] + recurse(nums, memo, index - 2),
    recurse(nums, memo, index - 1)
  );

  return memo[index];
}

module.exports = { rob, rob2 };

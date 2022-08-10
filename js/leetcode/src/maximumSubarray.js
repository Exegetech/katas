const maxSubArray = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const table = new Array(nums).fill(0);
  table[0] = nums[0];
  table[1] = Math.max(nums[1], nums[1] + table[0]);

  for (let i = 1; i < nums.length; i++) {
    table[i] = Math.max(nums[i], nums[i] + table[i - 1]);
  }

  return table.reduce((acc, el) => Math.max(acc, el), Number.NEGATIVE_INFINITY);
};

module.exports = { maxSubArray };

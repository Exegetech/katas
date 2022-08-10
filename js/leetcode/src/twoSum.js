const twoSum = function (nums, target) {
  const dict = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const remainder = target - num;

    if (typeof dict[remainder] !== 'undefined') {
      return [dict[remainder], i];
    }

    dict[num] = i;
  }
};

module.exports = { twoSum };

const containsNearbyDuplicate = function (nums, k) {
  const dict = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (
      typeof dict[num] !== 'undefined' &&
      dict[num] !== i &&
      Math.abs(dict[num] - i) <= k
    ) {
      return true;
    }

    dict[num] = i;
  }

  return false;
};

module.exports = { containsNearbyDuplicate };

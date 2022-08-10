const containsNearbyAlmostDuplicate = function (nums, k, t) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= k; j++) {
      if (Math.abs(nums[i] - nums[i + j]) <= t) {
        return true;
      }
    }
  }

  return false;
};

module.exports = { containsNearbyAlmostDuplicate };

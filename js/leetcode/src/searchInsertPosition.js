const searchInsert = function (nums, target) {
  if (nums.length === 1) {
    if (target === nums[0]) {
      return 0;
    }

    return target < nums[0] ? 0 : 1;
  }

  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (target < nums[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  if (left === nums.length) {
    return nums.length;
  }

  return target < nums[left] ? left : left + 1;
};

module.exports = { searchInsert };

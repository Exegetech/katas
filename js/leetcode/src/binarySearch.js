const search = function (nums, target) {
  if (nums.length === 0) {
    return -1;
  }

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) {
      return mid;
    }

    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // End condition is left > right

  return -1;
};

module.exports = { search };

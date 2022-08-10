const findPeakElement = function (nums) {
  if (nums.length === 1) {
    return 0;
  }

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = left + 1;
    }
  }

  return left;
};

module.exports = { findPeakElement };

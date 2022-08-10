const searchRange = function (nums, target) {
  if (nums.length === 0) {
    return [-1, -1];
  }

  const leftIdx = findLeftBound(nums, target);
  const rightIdx = findRightBound(nums, target);

  return [leftIdx, rightIdx];
};

function findLeftBound(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left + 1 < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (
      nums[mid] === target &&
      nums[left - 1] !== nums[mid] &&
      nums[mid] === nums[mid + 1]
    ) {
      return mid;
    }

    if (target <= nums[mid]) {
      right = mid;
    } else {
      left = mid;
    }
  }

  if (nums[left] === target && nums[left] !== nums[left - 1]) {
    return left;
  }

  if (nums[right] === target && nums[right] !== nums[right - 1]) {
    return right;
  }

  return -1;
}

function findRightBound(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left + 1 < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (
      nums[mid] === target &&
      nums[left - 1] === nums[mid] &&
      nums[mid] !== nums[mid + 1]
    ) {
      return mid;
    }

    if (target >= nums[mid]) {
      left = mid;
    } else {
      right = mid;
    }
  }

  if (nums[left] === target && nums[left] !== nums[left + 1]) {
    return left;
  }

  if (nums[right] === target && nums[right] !== nums[right + 1]) {
    return right;
  }

  return -1;
}

module.exports = { searchRange };

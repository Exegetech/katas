const search = function (nums, target) {
  if (nums.length === 0) {
    return -1;
  }

  const minIndex = findMinIndex(nums);

  if (nums[0] <= target && target <= nums[minIndex - 1]) {
    return binarySearch(nums, target, 0, minIndex - 1);
  }

  return binarySearch(nums, target, minIndex, nums.length - 1);
};

function findMinIndex(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[mid + 1]) {
      return mid + 1;
    }

    if (nums[mid - 1] > nums[mid]) {
      return mid;
    }

    if (nums[left] > nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}

function binarySearch(nums, target, from, to) {
  let left = from;
  let right = to;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

module.exports = { search };

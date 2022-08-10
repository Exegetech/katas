const twoSum = function (numbers, target) {
  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    const sum = numbers[i] + numbers[j];

    if (sum < target) {
      i++;
    } else if (sum > target) {
      j--;
    } else {
      return [i + 1, j + 1];
    }
  }

  return [-1, -1];
};

const twoSum2 = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const remainder = target - num;

    const remainderIdx = binarySearch(numbers, remainder, i);

    if (remainderIdx !== -1) {
      return [i + 1, remainderIdx + 1];
    }
  }

  return [0, 0];
};

function binarySearch(nums, target, exceptIndex) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      if (mid === exceptIndex) {
        if (nums[mid + 1] === target) {
          return mid + 1;
        }

        return mid - 1;
      }

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

module.exports = { twoSum, twoSum2 };

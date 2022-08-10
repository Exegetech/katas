const sortArray = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }

  const left = [];
  const right = [];

  const mid = Math.floor(nums.length / 2);

  let i = 0;
  while (i < mid) {
    left.push(nums[i]);
    i++;
  }

  while (i < nums.length) {
    right.push(nums[i]);
    i++;
  }

  const leftResult = sortArray(left);
  const rightResult = sortArray(right);

  return combine(leftResult, rightResult);
};

function combine(left, right) {
  const result = [];
  let l = 0;
  let r = 0;

  while (true) {
    if (l < left.length && r < right.length) {
      if (left[l] <= right[r]) {
        result.push(left[l]);
        l++;
      } else {
        result.push(right[r]);
        r++;
      }
    } else if (l < left.length) {
      result.push(left[l]);
      l++;
    } else if (r < right.length) {
      result.push(right[r]);
      r++;
    } else {
      break;
    }
  }

  return result;
}

module.exports = { sortArray };

const pivotIndex = function (nums) {
  let right = countTotal(nums);
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    const leftIdx = i - 1;
    if (leftIdx >= 0) {
      left += nums[leftIdx];
    }

    right -= nums[i];

    if (left === right) {
      return i;
    }
  }

  return -1;
};

function countTotal(nums) {
  return nums.reduce((acc, el) => acc + el, 0);
}

// const nums = [1, 7, 3, 6, 5, 6] // 3
// const nums = [1, 2, 3] // -1
const nums = [2, 1, -1]; // 0

console.log(pivotIndex(nums));

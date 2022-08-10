const dominantIndex = function (nums) {
  const { maxIdx, max } = findMax(nums);

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];

    if (i !== maxIdx && max < n * 2) {
      return -1;
    }
  }

  return maxIdx;
};

function findMax(nums) {
  let maxIdx = -1;
  let max = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
      maxIdx = i;
      max = Math.max(max, nums[i]);
    }
  }

  return { max, maxIdx };
}

// const nums = [3, 6, 1, 0]
// const nums = [1, 2, 3, 4]
const nums = [1];
console.log(dominantIndex(nums));

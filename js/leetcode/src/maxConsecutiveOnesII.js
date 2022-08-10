const findMaxConsecutiveOnes = (nums) => {
  let right = 0;
  let left = 0;
  let max = 0;
  let numOfZeros = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      numOfZeros++;
    }

    while (numOfZeros === 2) {
      if (nums[left] === 0) {
        numOfZeros--;
      }

      left++;
    }

    max = Math.max(max, right - left + 1);

    right++;
  }

  return max;
};

module.exports = { findMaxConsecutiveOnes };

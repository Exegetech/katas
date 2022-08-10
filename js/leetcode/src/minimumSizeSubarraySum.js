const minSubArrayLen = (target, nums) => {
  let minLen = Number.POSITIVE_INFINITY;

  let i = 0;

  while (i < nums.length) {
    let j = i;
    let subTotal = 0;

    while (subTotal < target && j < nums.length) {
      subTotal += nums[j];
      j++;
    }

    if (subTotal >= target) {
      minLen = Math.min(minLen, j - i);
    }

    i++;
    j = i;
    subTotal = 0;
  }

  if (minLen === Number.POSITIVE_INFINITY) {
    return 0;
  }

  return minLen;
};

module.exports = { minSubArrayLen };

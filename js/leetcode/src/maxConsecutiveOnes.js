const findMaxConsecutiveOnes = function (nums) {
  let max = 0;

  for (let p1 = 0; p1 < nums.length; p1++) {
    if (nums[p1] === 0) {
      continue;
    }

    let consecutives = 0;
    for (let p2 = p1; p2 < nums.length && nums[p2] === 1; p2++) {
      consecutives++;
    }

    max = Math.max(consecutives, max);
  }

  return max;
};

module.exports = { findMaxConsecutiveOnes };

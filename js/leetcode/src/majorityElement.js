const majorityElement = function (nums) {
  const halfLength = Math.floor(nums.length / 2);
  const dict = {};

  for (const n of nums) {
    if (typeof dict[n] === 'undefined') {
      dict[n] = 1;
    } else {
      dict[n] += 1;
    }

    if (dict[n] > halfLength) {
      return n;
    }
  }
};

module.exports = { majorityElement };

const arrayPairSum = function (nums) {
  const sorted = nums.sort((a, b) => {
    if (a < b) return -1;
    return 1;
  });

  let sum = 0;

  for (let i = 0; i < sorted.length - 1; i += 2) {
    sum += Math.min(sorted[i], sorted[i + 1]);
  }

  return sum;
};

module.exports = { arrayPairSum };

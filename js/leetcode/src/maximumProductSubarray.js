const maxProduct = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const memo = new Array(nums.length).fill(0);
  memo[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let max = 1;

    for (let j = 0; j < i; j++) {
      max = max * nums[j];
    }

    memo[i] = max;
  }

  return memo.reduce((acc, el) => Math.max(acc, el), 0);
};

module.exports = { maxProduct };

const rotate = function (nums, k) {
  const realK = k % nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, realK - 1);
  reverse(nums, realK, nums.length - 1);
};

function reverse(nums, from, to) {
  let i = from;
  let j = to;

  while (i < j) {
    const swap = nums[i];
    nums[i] = nums[j];
    nums[j] = swap;

    i++;
    j--;
  }
}

module.exports = { rotate };

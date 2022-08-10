const findKthLargest = function (nums, k) {
  nums.sort((a, b) => {
    if (a < b) {
      return 1;
    } else {
      return -1;
    }
  });

  return nums[k - 1];
};

module.exports = { findKthLargest };

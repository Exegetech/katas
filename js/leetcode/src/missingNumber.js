/**
 * Space: O(1)
 * Time: O(n)
 */
const missingNumber = function (nums) {
  let indexSum = 0;
  let valueSum = 0;

  for (let i = 0; i <= nums.length; i++) {
    indexSum += i;
    if (i < nums.length) {
      valueSum += nums[i];
    }
  }

  return indexSum - valueSum;
};

module.exports = { missingNumber };

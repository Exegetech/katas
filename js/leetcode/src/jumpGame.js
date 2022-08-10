const canJump = function (nums) {
  if (nums.length === 1) {
    return true;
  }

  const memo = new Array(nums.length);
  memo[0] = nums[0] >= 1;

  for (let i = 1; i < nums.length; i++) {
    let canJump = false;

    for (let j = 0; j < i; j++) {
      canJump = canJump || (memo[j] && nums[j] >= i - j);
    }

    memo[i] = canJump;
  }

  return memo[memo.length - 1];
};

const canJump2 = function (nums) {
  if (nums.length === 1) {
    return true;
  }

  const memo = {};
  return recurse(nums, memo, nums.length - 1);
};

function recurse(nums, memo, index) {
  if (index === 0) {
    return nums[0] >= 1;
  }

  if (typeof memo[index] !== 'undefined') {
    return memo[index];
  }

  memo[index] = false;
  for (let i = 0; i < index; i++) {
    memo[index] =
      memo[index] || (recurse(nums, memo, index - 1) && nums[i] >= index - i);
  }

  return memo[index];
}

module.exports = { canJump, canJump2 };

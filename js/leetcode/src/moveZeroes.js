const moveZeroes = function (nums) {
  let pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }

  while (pointer < nums.length) {
    nums[pointer] = 0;
    pointer++;
  }
};

module.exports = { moveZeroes };

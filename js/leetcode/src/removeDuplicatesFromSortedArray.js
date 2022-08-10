const removeDuplicates = function (nums) {
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[pointer] = nums[i];
    pointer++;

    while (nums[i] === nums[i + 1]) {
      i++;
    }
  }

  return pointer;
};

module.exports = { removeDuplicates };

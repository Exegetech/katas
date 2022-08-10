const permute = function (nums) {
  const result = [];

  backtrack(result, nums, 0);

  return result;
};

function backtrack(result, nums, index) {
  if (index === nums.length - 1) {
    return result.push([...nums]);
  }

  for (let i = 0; i < nums.length; i++) {
    swap(nums, index, i);
    backtrack(result, nums, index + 1);
    swap(nums, i, index);
  }
}

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

module.exports = { permute };

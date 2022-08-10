const subsets = function (nums) {
  const result = new Set();

  recursiveBacktrack(nums, result);

  return Array.from(result).map((el) => JSON.parse(el));
};

function recursiveBacktrack(nums, result) {
  if (nums.length === 0) {
    result.add(JSON.stringify(nums));
    return;
  }

  result.add(JSON.stringify(nums));

  for (let i = 0; i < nums.length; i++) {
    const left = nums.slice(0, i);
    const right = nums.slice(i + 1);

    const newNums = [...left, ...right];

    recursiveBacktrack(newNums, result);
  }
}

module.exports = { subsets };

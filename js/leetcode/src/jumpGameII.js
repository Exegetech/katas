const jump = function (nums) {
  if (nums.length === 1) {
    return 0;
  }

  let jumps = 0;
  let i = 0;

  while (i < nums.length - 1) {
    const jumpDistance = nums[i];

    if (jumpDistance === 1) {
      i++;
      continue;
    }

    const nextIndexWithHighestJumpValue = findNextIndexWithHighestJumpValue(
      nums,
      i
    );

    jumps++;

    if (nextIndexWithHighestJumpValue === -1) {
      return jumps;
    }

    i = nextIndexWithHighestJumpValue;
  }

  return jumps;
};

function findNextIndexWithHighestJumpValue(nums, i) {
  let highestJumpValue = 0;
  let nextIndexWithHighestJumpValue = -1;

  const jumpDistance = nums[i];

  for (let j = 1; j <= jumpDistance; j++) {
    const nextIndex = i + j;

    if (i + j >= nums.length - 1) {
      return -1;
    }

    const nextJumpValue = nums[nextIndex];

    if (nextJumpValue > highestJumpValue) {
      highestJumpValue = nextJumpValue;
      nextIndexWithHighestJumpValue = nextIndex;
    } else if (nextJumpValue === highestJumpValue) {
      nextIndexWithHighestJumpValue = nextIndex;
    }
  }

  return nextIndexWithHighestJumpValue;
}

module.exports = { jump };

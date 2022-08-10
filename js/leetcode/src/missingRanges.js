const findMissingRanges = function (nums, lower, upper) {
  if (nums.length === 0) {
    return [makeBetween(lower - 1, upper + 1)];
  }

  const result = [];

  const opening = makeBetween(lower - 1, nums[0]);
  if (opening !== null) {
    result.push(opening);
  }

  for (let i = 1; i < nums.length; i++) {
    const sub = makeBetween(nums[i - 1], nums[i]);
    if (sub !== null) {
      result.push(sub);
    }
  }

  const closing = makeBetween(nums[nums.length - 1], upper + 1);
  if (closing !== null) {
    result.push(closing);
  }

  return result;
};

function makeBetween(from, to) {
  if (to - from <= 1) {
    return null;
  }

  if (to - from === 2) {
    return (from + 1).toString();
  }

  return `${from + 1}->${to - 1}`;
}

module.exports = { findMissingRanges };

const threeSum = function (nums) {
  const results = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const remainder = 0 - num;

    const twoSum = findTwoSum(nums, i, remainder);
    const triplet = [num, ...twoSum.values];

    triplet.sort((a, b) => {
      if (a <= b) {
        return -1;
      } else {
        return 1;
      }
    });

    const hash = makeHash(triplet);

    if (twoSum.found && typeof results[hash] === 'undefined') {
      results[hash] = triplet;
    }
  }

  return Object.values(results);
};

function makeHash(triplet) {
  return `${triplet[0]}-${triplet[1]}-${triplet[2]}`;
}

function findTwoSum(nums, exceptIndex, target) {
  const idxDict = {};

  for (let i = 0; i < nums.length; i++) {
    if (i !== exceptIndex) {
      const num = nums[i];
      const remainder = target - num;

      if (
        typeof idxDict[remainder] !== 'undefined' &&
        i !== idxDict[remainder]
      ) {
        return {
          found: true,
          values: [num, remainder],
        };
      }

      idxDict[num] = i;
    }
  }

  return {
    found: false,
    values: [],
  };
}

module.exports = { threeSum };

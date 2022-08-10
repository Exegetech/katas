const deleteAndEarn = function (nums) {
  const { numCount, unique } = makeUniqueAndNumCount(nums);
  const sortedUnique = unique.sort((e1, e2) => {
    if (e1 <= e2) {
      return -1;
    }

    return 1;
  });

  return dp(sortedUnique, numCount);
};

function dp(unique, numCount) {
  if (unique.length === 1) {
    return unique[0] * numCount[unique[0]];
  }

  const memo = new Array(unique.length).fill(0);
  memo[0] = unique[0] * numCount[unique[0]];

  if (unique[1] === unique[0] + 1) {
    memo[1] = Math.max(
      unique[0] * numCount[unique[0]],
      unique[1] * numCount[unique[1]]
    );
  } else {
    memo[1] = unique[0] * numCount[unique[0]] + unique[1] * numCount[unique[1]];
  }

  for (let i = 2; i < unique.length; i++) {
    if (unique[i] === unique[i - 1] + 1) {
      memo[i] = Math.max(
        memo[i - 1],
        unique[i] * numCount[unique[i]] + memo[i - 2]
      );
    } else {
      memo[i] = unique[i] * numCount[unique[i]] + memo[i - 1];
    }
  }

  return memo[memo.length - 1];
}

function makeUniqueAndNumCount(nums) {
  const numCount = {};
  const unique = [];

  nums.forEach((n) => {
    if (typeof numCount[n] === 'undefined') {
      numCount[n] = 1;
      unique.push(n);
    } else {
      numCount[n] += 1;
    }
  });

  return { numCount, unique };
}

module.exports = { deleteAndEarn };

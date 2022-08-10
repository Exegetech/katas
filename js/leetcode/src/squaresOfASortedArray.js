const sortedSquares = function (nums) {
  const { negative, positive } = findNegPosSlices(nums);
  if (negative.length === 0) {
    return positive.map((p) => Math.pow(p, 2));
  }

  if (positive.length === 0) {
    return negative.reverse().map((n) => Math.pow(n, 2));
  }

  const result = [];

  let ni = negative.length - 1;
  let pi = 0;

  while (ni >= 0 && pi < positive.length) {
    const n2 = Math.pow(negative[ni], 2);
    const p2 = Math.pow(positive[pi], 2);

    if (n2 < p2) {
      result.push(n2);
      ni--;
    } else {
      result.push(p2);
      pi++;
    }
  }

  while (ni >= 0) {
    const n2 = Math.pow(negative[ni], 2);
    result.push(n2);
    ni--;
  }

  while (pi < positive.length) {
    const p2 = Math.pow(positive[pi], 2);
    result.push(p2);
    pi++;
  }

  return result;
};

function findNegPosSlices(nums) {
  const negative = [];
  const positive = [];

  nums.forEach((n) => {
    if (n < 0) {
      negative.push(n);
    } else {
      positive.push(n);
    }
  });

  return { negative, positive };
}

module.exports = { sortedSquares };
